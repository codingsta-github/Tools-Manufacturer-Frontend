import React from "react";

const Tool = ({tool}) => {

  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={tool.image}
          alt="tool"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{tool.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
