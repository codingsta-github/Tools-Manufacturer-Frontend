import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Alert from "../Shared/Alert";
const MyReview = () => {
  const [user] = useAuthState(auth);
  const [rev,setRev]=useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    
    const review = {
      email: user.email,
      subject: data.subject,
      rating: data.rating,
      review: data.review,
    };
    console.log(review);
    fetch("https://shielded-dusk-13129.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        setRev(true)
      });
      data={}
  };
const Ale=()=>{
setRev(false)

}
  return (
    <div className=" my-20 py-10 bg-slate-100 lg:px-32 px-5">
      <div className="my-10 text-center ">
      {rev && <Alert>Thanks for your word</Alert>}
        <h1 className="capitalize font-semibold  lg:text-2xl text-xl">
          Tell us something about your experience with us
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form-control">
        <div className="flex flex-col items-center justify-center">
          <input
            type="email"
            className="input input-bordered input-md w-full max-w-xs my-3 "
            value={user.email}
            readOnly
          />

          <input onFocus={Ale}
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="input input-bordered input-md w-full max-w-xs my-3"
            required
          />
          <input
            {...register("rating")}
            type="number"
            placeholder="Rate us (out of 5)"
            className="input input-bordered input-md w-full max-w-xs my-3"
            required
          />

          <textarea
            {...register("review")}
            className="textarea w-80 textarea-bordered my-3 mb-7"
            placeholder="Tell us (briefly)"
          ></textarea>
          <button type="submit" className="btn">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyReview;
