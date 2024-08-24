import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  shortBody: string;
  onReadMore: () => void;
}

export const SecondCard: React.FC<BlogCardProps> = ({
  image,
  title,
  shortBody,
  onReadMore,
}) => {
  return (
    <div className="card image-full w-full max-w-xl shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body gap-1 justify-end w-full p-4 ">
        <h2 className="card-title text-white my-line-clamp-2 ">{title}</h2>
        <p className="leading-5 grow-0 text-sm w-full my-line-clamp-2">
          {shortBody}
        </p>
        <button
          onClick={onReadMore}
          className="hidden bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Read More
        </button>
      </div>
    </div>
  );
};
