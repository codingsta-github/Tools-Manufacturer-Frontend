import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({tool}) => {
const {name,image,description,minimum,available,price,_id}=tool
const navigate = useNavigate();
  const purchase = () => {
    navigate(`tool/${_id}`);
  };
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="tool"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <h3>{minimum}</h3>
        <h3>{available}</h3>
        <h3>{price}</h3>
        <div class="card-actions justify-end">
          <button onClick={purchase} class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
