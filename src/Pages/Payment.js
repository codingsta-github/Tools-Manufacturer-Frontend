import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {_id}=useParams()
    return (
        <div>
            <h1>{_id}</h1>
        </div>
    );
};

export default Payment;