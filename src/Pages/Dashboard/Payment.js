import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1hnGIKPVQVfNhJ6NTJQGva9QNuLhQSHjpleLvgV1IzmguJfVkfIuSI0cMD6eWPscwWZZQaFrii3HxFU4twsPSn00oRmMOEqx');
const Payment = () => {
    const { paymentId } = useParams()
    const [orders, setOrders] = useState({})
    const url = `http://localhost:5001/myorder/${paymentId}`
    fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => {
            setOrders(data)
            console.log(data)
        })



    return (
        <>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!{orders?.productName}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm orders={orders} />
                        </Elements>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Payment;