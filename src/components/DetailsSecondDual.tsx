import React, { useState } from "react";
import { useGetBlogListQuery } from "../app/rootApi";

import { CommentForm } from "./CommentForm";
import { Comments } from "./Comments";
import { ThirdCard } from "./ThirdCard";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  // image: string; // URL or path to image
}
let image = "https://via.placeholder.com/400x200";

export const DetailsSecondDual: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(6);
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
    <div className="flex flex-col lg:flex-row gap-6">
      <div className=" w-full flex flex-col gap-6 ">
        <Comments />
        <CommentForm />
      </div>
      <div className="lg:w-2/5 xl:w-2/5 h-fit gap-6 sm:w-full  grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-1  w-full  mx-auto bg-white shadow-md rounded-lg p-6">
        {visibleBlogs.map((blog: BlogPost) => (
          <ThirdCard
            key={blog.id}
            image={image}
            title={blog.title}
            shortBody={blog.body}
            onReadMore={() => handleReadMore(blog.id)}
          />
        ))}
      </div>
    </div>
  );
};
