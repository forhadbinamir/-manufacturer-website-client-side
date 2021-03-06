import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1hnGIKPVQVfNhJ6NTJQGva9QNuLhQSHjpleLvgV1IzmguJfVkfIuSI0cMD6eWPscwWZZQaFrii3HxFU4twsPSn00oRmMOEqx');
const Payment = () => {
    const { paymentId } = useParams()
    const [orders, setOrders] = useState({})
    useEffect(() => {
        const url = `https://immense-earth-45924.herokuapp.com/myorder/${paymentId}`
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

    }, [])


    return (
        <>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Your Order: {orders?.productName}</h2>
                        <p className='text-center'>Your have to pay: ${orders.price}</p>
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