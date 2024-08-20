import React, { useEffect, useState } from "react";

import { Carousel } from "../components/Carousel";

import { HomeFirstDual } from "../components/HomeFirstDual";
import { SecondCard } from "../components/SecondCard";
// import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  image: string; // URL or path to image
}

export const HomePage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  // const [visibleCount, setVisibleCount] = useState<number>(4);
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
  };

  // const handleSeeMore = () => {
  //   setVisibleCount((prevCount) => Math.min(prevCount + 4, blogs.length));
  // };

  if (loading) {
    return <div className="text-center text-gray-500">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="flex flex-col gap-6">
      <Carousel />
      <HomeFirstDual />
      <div className="  lg:grid-cols-4 gap-6 flex overflow-x-auto space-x-4 py-2 my-scrollbar-hidden">
        {blogs.map((blog) => (
          <SecondCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            shortBody={blog.body}
            onReadMore={() => handleReadMore(blog.id)}
          />
        ))}
      </div>

      <HomeFirstDual />
    </div>
  );
};
