export const SecondCard = () => {
  return (
    <div className="card image-full w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body gap-1 justify-end w-full p-4 ">
        <h2 className="card-title text-white ">Shoes!</h2>
        <p className="leading-5 grow-0 text-sm w-full my-line-clamp-3">
          If a dog chews shoes whose shoes does he choose?If a dog chews shoes
          whose shoes does he choose?If a dog chews shoes whose shoes does he
          choose?If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  );
};
