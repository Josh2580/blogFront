import React, { useState } from "react";

import { FirstCard } from "./FirstCard";
import { ThirdCard } from "./ThirdCard";
import { useNavigate } from "react-router-dom";
import { useGetBlogListQuery } from "../app/rootApi";

export const HomeFirstDual: React.FC = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetBlogListQuery(undefined);

  const [visibleCount, setVisibleCount] = useState<number>(4);

  const handleReadMore = (id: number) => {
    // Implement logic to handle "Read More" button click
    console.log(`Read more about blog ${id}`);
    navigate(`details/${id}`);
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, data.length));
  };

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
  // console.log(visibleBlogs);
  // console.log(data);

  return (
    <div className="flex flex-col lg:flex-row gap-6 ">
      <div className=" grid md:grid-cols-3 lg:grid-cols-2  gap-6 grid-cols-2 w-full  mx-auto bg-white shadow-md rounded-lg p-6">
        {visibleBlogs.map((blog: any) => (
          <FirstCard
            key={blog.id}
            image={blog.image || "https://via.placeholder.com/600/771796"}
            title={blog.title}
            shortBody={blog.body}
            onReadMore={() => handleReadMore(blog.id)}
          />
        ))}

        {visibleCount < data.length && (
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
        {visibleBlogs.map((blog: any) => (
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
