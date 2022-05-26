import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";

const Purchase = () => {
  const { _id } = useParams();

  const [tool, setTool] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/tool/${_id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  const { name, image, description, minimum, available, price } = tool;

  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const order = {
      image:image,
      tool: name,
      email: user.email,
      price:parseInt(price),
      quantity: parseInt(data.quantity),
      payment:'unpaid',
      status:'pending'
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
      });
  };

  return (
    <div>
      <div>
        <h1>purchase</h1>
        <h2 class="card-title">{name}</h2>
        <img src={image} alt="" />
        <p>{description}</p>
        <h3>minimum : {minimum}</h3>
        <h3>available : {available}</h3>
        <h3>price : {price}</h3>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>

          <input
            type="email"
            value={user.email}
            className="input input-bordered"
            readOnly
          />

          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            {...register("quantity", {
              required: {
                value: true,
                message: "quantity is required",
              },
              min: {
                value: minimum,
                message: `minimum order quantity ${minimum}`,
              },
              max: {
                value: available,
                message: `maximum order quantity ${available}`,
              },
            })}
            type="number"
            placeholder="Order quantity"
            className="input input-bordered"
          />
          <label class="label">
            {errors.quantity?.type === "min" && (
              <span class="label-text-alt">{errors.quantity.message}</span>
            )}
            {errors.quantity?.type === "max" && (
              <span class="label-text-alt">{errors.quantity.message}</span>
            )}
          </label>

          <div className="card-actions justify-end">
            <button className="btn btn-accent w-full mt-3 text-white">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
