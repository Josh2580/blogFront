import React, { useState } from "react";
import { useGetBlogCommentsQuery } from "../app/rootApi";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export const Comments: React.FC = () => {
  const { data, error, isLoading } = useGetBlogCommentsQuery(undefined);

  const [showAll, setShowAll] = useState<boolean>(false);

  const handleShowAll = () => setShowAll(true);
  const handleShowLess = () => setShowAll(false);

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading comments...</div>;
  }

  if (error) {
    // Assuming `error.message` is a string. Adjust according to the actual structure.
    const errorMessage =
      "error" in error ? error.error : "An unknown error occurred";
    return <div className="text-center text-red-500">{errorMessage}</div>;
  }

  // Determine the number of comments to display
  const displayedComments = showAll ? data : data.slice(0, 5);

  return (
    <div className="w-full  mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="mt-4 flex justify-start">
        {showAll ? (
          <button
            onClick={handleShowLess}
            className="hover:bg-purple-700 hover:text-white text-purple-700 font-bold py-1 px-4 text-xs rounded-sm "
          >
            See Less
          </button>
        ) : (
          data.length > 5 && (
            <button
              onClick={handleShowAll}
              className="hover:bg-purple-700 hover:text-white text-purple-700 font-bold py-1 px-4 text-xs rounded-sm "
            >
              See All
            </button>
          )
        )}
      </div>
      <ul className="space-y-4">
        {displayedComments.map((comment: Comment) => (
          <li
            key={comment.id}
            className="p-4 border rounded-lg shadow-sm bg-gray-50"
          >
            <h3 className="text-lg font-medium text-gray-900">
              {comment.name}
            </h3>
            <p className="text-sm text-gray-600">{comment.email}</p>
            <p className="mt-2 text-gray-700">{comment.body}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-start">
        {showAll ? (
          <button
            onClick={handleShowLess}
            className="hover:bg-purple-700 hover:text-white text-purple-700 font-bold py-1 px-4 text-xs rounded-sm "
          >
            See Less
          </button>
        ) : (
          data.length > 5 && (
            <button
              onClick={handleShowAll}
              className="hover:bg-purple-700 hover:text-white text-purple-700 font-bold py-1 px-4 text-xs rounded-sm "
            >
              See All
            </button>
          )
        )}
      </div>
    </div>
  );
};
