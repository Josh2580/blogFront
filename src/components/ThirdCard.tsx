interface BlogCardProps {
  image: string;
  title: string;
  shortBody: string;
  onReadMore: () => void;
}

export const ThirdCard: React.FC<BlogCardProps> = ({
  image,
  title,
  shortBody,
  onReadMore,
}) => {
  return (
    <>
      <div className="flex items-center gap-3 h-20 w-full border rounded-lg shadow-sm bg-gray-50">
        <div className="avatar h-full">
          <div className=" rounded-l-xl  ">
            <img src={image} alt={title} className="h-full" />
          </div>
        </div>
        <div>
          <div className="font-semibold my-line-clamp-2 ">{shortBody}</div>
          <button className="hidden" onClick={onReadMore}>
            Read more
          </button>
        </div>
      </div>
    </>
  );
};
