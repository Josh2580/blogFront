// import React from 'react'

import { CommentForm } from "./CommentForm";
import { Comments } from "./Comments";
import { ThirdCard } from "./ThirdCard";

export const DetailsSecondDual = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className=" w-full flex flex-col gap-6 ">
        <Comments />
        <CommentForm />
      </div>
      <div className="lg:w-2/5 xl:w-2/5 h-fit gap-6 sm:w-full  grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-1  w-full  mx-auto bg-white shadow-md rounded-lg p-6">
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
        <ThirdCard />
      </div>
    </div>
  );
};
