import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrder = () => {
  const [user] = useAuthState(auth);

  const [MyOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [user]);

  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Tool</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {MyOrders.map(MyOrder=>(
              <tr>
              
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src={MyOrder.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  
                </div>
              </td>
              <td>
                {MyOrder.tool}
              </td>
              <td>{MyOrder.price}</td>
              <td>{MyOrder.quantity}</td>
              <td>{MyOrder.price*MyOrder.quantity}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
