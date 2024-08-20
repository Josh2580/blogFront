// import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  shortBody: string;
  onReadMore: () => void;
}

export const FirstCard: React.FC<BlogCardProps> = ({
  image,
  title,
  shortBody,
  onReadMore,
}) => {
  return (
    <div className="card w-auto max-w-full border rounded-lg shadow-sm bg-gray-50">
      <figure className="max-h-lg">
        <img src={image} alt={title} className="h-full w-full" />
      </figure>
      <div className="card-body md:p-4 p-2 m-0">
        <h2 className="card-title leading-tight my-line-clamp-3 text-lg md:text-lg">
          {title}
        </h2>
        <p className="text-gray-500 leading-5 my-line-clamp-2 hidden md:inline">
          {shortBody}
        </p>
        <div className="card-actions justify-start">
          <button onClick={onReadMore} className="my-btn hidden md:inline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
