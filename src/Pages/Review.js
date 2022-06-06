import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card w-full bg-base-100 shadow-xl p-3">
      <div class="card-body">
        <p class="">{review.email}</p>
        <h2 class="card-title">Subject : {review.subject}</h2>
        <h1 class="text-md">Ratings : {review.rating}</h1>
        <p class="py-5 text-justify">Reviews : {review.review}</p>
      </div>
    </div>
  );
};

export default Review;
