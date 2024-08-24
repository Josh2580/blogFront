import React, { useState } from "react";
import { DetailsSecondDual } from "../components/DetailsSecondDual";
import { SecondCard } from "../components/SecondCard";
import { DetailsFirstDual } from "./../components/DetailsFirstDual";
import { useGetBlogListQuery } from "../app/rootApi";
import { useParams } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  // image: string; // URL or path to image
}

let image = "https://via.placeholder.com/400x200";

export const DetailsPage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const { data, error, isLoading } = useGetBlogListQuery(undefined);

  const handleReadMore = (id: number) => {
    // Implement logic to handle "Read More" button click
    console.log(`Read more about blog ${id}`);
  };

  // const handleSeeMore = () => {
  //   setVisibleCount((prevCount) => Math.min(prevCount + 4, blogs.length));
  // };

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading blogs...</div>;
  }

  if (error) {
    // Assuming `error.message` is a string. Adjust according to the actual structure.
    const errorMessage =
      "error" in error ? error.error : "An unknown error occurred";
    return <div className="text-center text-red-500">{errorMessage}</div>;
  }

  const visibleBlogs = data.slice(0, visibleCount);

  return (
    <div className="flex flex-col gap-6">
      <DetailsFirstDual />
      <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-6">
        {visibleBlogs.map((blog: BlogPost) => (
          <SecondCard
            key={blog.id}
            image={image}
            title={blog.title}
            shortBody={blog.body}
            onReadMore={() => handleReadMore(blog.id)}
          />
        ))}
      </div>
      <DetailsSecondDual />
    </div>
  );
};
