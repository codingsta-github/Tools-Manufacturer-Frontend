import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3xv7HrN020A0QszKugUhXgB4axKkcnwFcvmlAU7xZPpoqaMEJrv0EzM5udBqQzelVTwc1CtXQYGvFXacN7NX6L00frfftZy9');

const Payment = () => {
    const { _id } = useParams();

  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`https://shielded-dusk-13129.herokuapp.com/order/${_id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

    

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.email}</p>
                    <h2 class="card-title">You've ordered: {order.tool}</h2>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;