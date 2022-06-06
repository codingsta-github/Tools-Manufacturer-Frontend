import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderModal from "./OrderModal";

const Purchase = () => {
  const { _id } = useParams();

  const [tool, setTool] = useState({});
  useEffect(() => {
    fetch(`https://mercedez-warehouse.herokuapp.com/tool/${_id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [_id]);
  const { name, image, description, minimum, available, price } = tool;
 

  return (
    <div>
      <div class="hero min-h-screen bg-base-200 ">
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
              <label for="my-modal-3" class="btn modal-button m-3">Place an order</label>
            </div>
            
          </div>
        </div>
      </div>
      <OrderModal tool={tool}></OrderModal>
    </div>
  );
};

export default Purchase;
