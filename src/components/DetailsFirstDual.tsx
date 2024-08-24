import React, { useState } from "react";

import { ThirdCard } from "./ThirdCard";
import { DeatilsComp } from "./DeatilsComp";
import { useGetBlogListQuery } from "../app/rootApi";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  // image: string; // URL or path to image
}

let image: string = "https://via.placeholder.com/400x200";

export const DetailsFirstDual: React.FC = () => {
  const { data, error, isLoading } = useGetBlogListQuery(undefined);

  const [visibleCount, setVisibleCount] = useState<number>(6);

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
      "message" in error ? error.message : "An unknown error occurred";
    return <div className="text-center text-red-500">{errorMessage}</div>;
  }

  const visibleBlogs = data.slice(0, visibleCount);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full  mx-auto bg-white shadow-md rounded-lg p-6  ">
        <DeatilsComp />
      </div>
      <div className=" bg-white shadow-md rounded-lg p-6 lg:w-2/5 xl:w-2/5 h-fit sm:w-full gap-6 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-1">
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
