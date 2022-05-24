import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../Firebase.init';

const UserInfo = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const [products, setProductions] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5001/production/${id}`)
            .then(res => res.json())
            .then(data => {
                setProductions(data)
                console.log(data)

            })
    }, [id])
    const handleOrderDeliver = event => {
        event.preventDefault()

        const orderInfo = {
            name: user.name,
            email: user.email,
            productName: products.name,
            price: products.price,
            quantity: products.quantity,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5001/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const handleQuantity = (event) => {
        event.preventDefault()
        const quantity = event.target.quantity.value
        console.log(quantity)

    }
    return (
        <div className='flex justify-evenly items-center'>
            <div>
                <div className='p-10'>
                    <div className='border rounded-lg bg-base-200 w-[600px] mx-auto px-20 py-10'>
                        <h1 className='text-center text-accent text-2xl p-2'>Add your info with login information</h1>
                        <form onSubmit={handleOrderDeliver}>
                            <div>
                                <label htmlFor="">Name</label>
                                <input className='mb-2 p-3 border rounded-lg  w-full' type="text" placeholder='Name' />
                            </div>

                            <div>
                                <label htmlFor="">Email</label>
                                <input className='mb-2 p-3 border rounded-lg  w-full' type="email" value={user?.email} readOnly />
                            </div>

                            <div>
                                <label htmlFor="">Product Name</label>
                                <input className='mb-2 p-3 border rounded-lg  w-full' type="text" value={products?.name} readOnly />
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <label className='text-accent' htmlFor="">Quantity</label>
                                    <input className='mb-2 p-3 border rounded-lg  w-full' type="text" value={products?.quantity} readOnly />
                                </div>
                                <div>
                                    <label htmlFor="">Price</label>
                                    <input className='mb-2 p-3 border rounded-lg  w-full' type="text" value={products?.price} readOnly />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="">Address</label>
                                <input className='mb-2 p-3 border rounded-lg  w-full' type="text" placeholder='Address' />
                            </div>

                            <div>
                                <label htmlFor="">Phone Number</label>
                                <input className='mb-2 p-3 border rounded-lg  w-full' name='phone' type="text" placeholder='Phone' />
                            </div>

                            <input className='w-full bg-purple-600 rounded-lg p-3 text-white font-bold uppercase' type="submit" value="Order" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='bg-accent rounded p-20'>
                <form onSubmit={handleQuantity} >
                    <input className='p-3  outline-none ' type="text" name='quantity' />
                    <button className='text-white p-3 bg-purple-600 uppercase font-bold '>Add Quantity</button>
                </form>
            </div>
        </div>
    );
};

export default UserInfo;