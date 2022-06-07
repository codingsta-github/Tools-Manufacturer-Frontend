import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";
import Alert from "./Shared/Alert";

const OrderModal = ({ tool }) => {
  const { name, image, minimum, available, price } = tool;
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [modal, setModal] = useState(false);
  const Modal=()=>{
    setModal(false)
  }
  console.log(modal);
  const onSubmit = (data) => {
    const order = {
      image: image,
      tool: name,
      email: user.email,
      price: parseInt(price),
      quantity: parseInt(data.quantity),
      address: data.address,
      phone: data.phone,
      payment: "unpaid",
      status: "pending",
    };

    fetch("https://shielded-dusk-13129.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModal(true);
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal mx-auto">
        <div className="modal-box relative px-10">
          <label onClick={Modal}
            for="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <h3 className="text-md font-bold">Price : ${price}</h3>

          {modal && <Alert>Your purchase has been confirmed</Alert>}


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
              <span className="label-text">Quantity</span>
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
              {errors.required?.type === "required" && (
                <span class="label-text-alt">{errors.required.message}</span>
              )}
              {errors.quantity?.type === "min" && (
                <span class="label-text-alt">{errors.quantity.message}</span>
              )}
              {errors.quantity?.type === "max" && (
                <span class="label-text-alt">{errors.quantity.message}</span>
              )}
            </label>

            <label className="label">
              <span className="label-text">Your Address</span>
            </label>

            <input
              {...register("address", {
                required: {
                  value: true,
                  message: "Please give your address",
                },
              })}
              type="text"
              placeholder="Address"
              className="input input-bordered"
              required
            />

            <label className="label">
              <span className="label-text">Your phone number</span>
            </label>

            <input
              {...register("phone", {
                required: {
                  value: true,
                  message: "Please give your phone number",
                },
              })}
              type="number"
              placeholder="Phone number"
              className="input input-bordered"
              required
            />
            

            <div className="card-actions justify-end">
              <input
                type="submit"
                className="btn w-full mt-3 "
                value="Place Order"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
