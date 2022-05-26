import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Hooks/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5001/myorder/${id}`
    const { data: orders, isLoading } = useQuery('booking', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    console.log(orders)
    if (isLoading) {
        <Loading />
    }

    return (
        <>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!{orders?.productName}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Payment;