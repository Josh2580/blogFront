import React from "react";

import { Carousel } from "../components/Carousel";

import { HomeFirstDual } from "../components/HomeFirstDual";
import { SecondCard } from "../components/SecondCard";
import { useGetBlogListQuery } from "../app/rootApi";

// interface BlogPost {
//   id: number;
//   title: string;
//   body: string;
//   image: string; // URL or path to image
// }

export const HomePage: React.FC = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetBlogListQuery(undefined);

  // const [visibleCount, setVisibleCount] = useState<number>(4);

  // console.log(typeof data);

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

  // const visibleBlogs = data.slice(0, visibleCount);

  return (
    <div className="flex flex-col gap-6">
      <Carousel />
      <HomeFirstDual />
      <div className="  lg:grid-cols-4 gap-6 flex overflow-x-auto space-x-4 py-2 my-scrollbar-hidden">
        {data.map((blog: any) => (
          <SecondCard
            key={blog.id}
            image={blog.image || "https://via.placeholder.com/600/771796"}
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
