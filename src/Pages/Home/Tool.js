import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { name, image, description, minimum, available, price, _id } = tool;
  const navigate = useNavigate();
  const purchase = () => {
    navigate(`tool/${_id}`);
  };
  return (
    <div class="hero min-h-max bg-base-200 ">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={image}
          alt="tool"
          class="lg:max-w-sm rounded-lg shadow-2xl w-full"
        />
        <div>
          <h1 class="lg:text-5xl text-2xl font-bold">{name}</h1>
          <p class="py-6 text-justify font-semibold">{description}</p>
          <div className="text-center">
          <h3 class="lg:text-3xl text-xl font-bold">Price : ${price}</h3>
          <h3 class="lg:text-xl font-bold">
            Minimum order quantity : {minimum}
          </h3>
          <h3 class="lg:text-xl font-bold ">In stock : {available}</h3>

          <button onClick={purchase} class="btn my-3 ">
            Order Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
