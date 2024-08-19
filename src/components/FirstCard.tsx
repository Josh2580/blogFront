// import React from "react";

export const FirstCard = () => {
  return (
    <div className="card  bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">Shoes!</h2>
        <p className="text-gray-500 leading-5">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-start">
          <button className="my-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};
