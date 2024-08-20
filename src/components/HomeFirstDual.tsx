import React, { useState, useEffect } from "react";

import { FirstCard } from "./FirstCard";
import { ThirdCard } from "./ThirdCard";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  image: string; // URL or path to image
}

export const HomeFirstDual: React.FC = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ); // Example API
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Assuming the API returns an array of posts; modify as needed
        const formattedData: BlogPost[] = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          body: post.body.substring(0, 100) + "...", // Shorten the body
          image: "https://via.placeholder.com/400x200", // Placeholder image
        }));
        setBlogs(formattedData);
      } catch (error) {
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleReadMore = (id: number) => {
    // Implement logic to handle "Read More" button click
    console.log(`Read more about blog ${id}`);
    navigate(`details/${id}`);
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, blogs.length));
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="flex flex-col lg:flex-row gap-6 ">
      <div className=" grid md:grid-cols-3 lg:grid-cols-2  gap-6 grid-cols-2 w-full  mx-auto bg-white shadow-md rounded-lg p-6">
        {visibleBlogs.map((blog) => (
          <FirstCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            shortBody={blog.body}
            onReadMore={() => handleReadMore(blog.id)}
          />
        ))}

        {visibleCount < blogs.length && (
          <div className="mt-4">
            <button
              onClick={handleSeeMore}
              className="hover:bg-purple-700 hover:text-white text-purple-700 font-bold py-1 px-4 text-xs rounded-sm "
            >
              See More
            </button>
          </div>
        )}
      </div>
      <div className="lg:w-2/5 xl:w-2/5 h-fit sm:w-full grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-1  gap-6 w-full  mx-auto bg-white shadow-md rounded-lg p-6">
        {visibleBlogs.map((blog) => (
          <ThirdCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            shortBody={blog.body}
            onReadMore={() => handleReadMore(blog.id)}
          />
        ))}
      </div>
    </div>
  );
};
