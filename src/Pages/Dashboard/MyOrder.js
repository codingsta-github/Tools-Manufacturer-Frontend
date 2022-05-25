import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [MyOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [user]);

  return (
    <div>
      <h1>my order</h1>
      <table>
        {MyOrders.map((myOrder) => (
          <tr>
            <td>{myOrder.tool}</td>
            <td>{myOrder.quantity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MyOrder;
