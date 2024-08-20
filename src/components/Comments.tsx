import React, { useEffect, useState } from "react";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        ); // Example API
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Comment[] = await response.json();
        setComments(data);
      } catch (error) {
        setError("Failed to fetch comments");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleShowAll = () => setShowAll(true);
  const handleShowLess = () => setShowAll(false);

  if (loading) {
    return <div className="text-center text-gray-500">Loading comments...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Determine the number of comments to display
  const displayedComments = showAll ? comments : comments.slice(0, 5);

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
          comments.length > 5 && (
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
        {displayedComments.map((comment) => (
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
          comments.length > 5 && (
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
