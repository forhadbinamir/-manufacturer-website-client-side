import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../Firebase.init';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
const UserInfo = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const [products, setProductions] = useState({})
    const [count, setCount] = useState({
        minimum: '20',
        cost: '14',
        name: 'abdullah'
    })
    useEffect(() => {
        fetch(`http://localhost:5001/production/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setProductions(data)
            })
    }, [products, id])
    const handleInitialValue = e => {
        const { minimum, ...rest } = count
        const newQuantity = e.target.value

        const updateQuantity = { minimum: newQuantity }
        setCount(updateQuantity)
        console.log("u", updateQuantity)
        console.log(minimum, rest)
        console.log("c", count)



    }
    const handleOrderDeliver = event => {
        event.preventDefault()

        const orderInfo = {
            name: user.name,
            email: user.email,
            productName: products.name,
            price: products.price,
            minimum: products.minimum,
            quantity: products.quantity,
            phone: event.target.phone.value
        }

        fetch(`http://localhost:5001/orders/${user.email}`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log("order", data)
                if (data.acknowledged) {
                    const newQuantity = event.target.quantity.value
                    const updateQuantity = parseInt(products.quantity) - parseInt(newQuantity)
                    fetch(`http://localhost:5001/update/${products._id}`, {
                        method: 'PATCH',
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({ quantity: updateQuantity })
                    })
                        .then(res => res.json())
                        .then(data => console.log("update", data))
                }
            })
    }

    const handlePlusQuantity = (event) => {
        event.preventDefault()
        const previousQuantity = parseInt(products.quantity)
        const quantity = parseInt(event.target.quantity.value)
        const updateQuantity = quantity + previousQuantity
        // console.log(quantity)
        event.target.reset()

        fetch(`http://localhost:5001/update/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ quantity: updateQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    const handleMinusQuantity = event => {
        event.preventDefault()
        const previousQuantity = parseInt(products.quantity)
        const quantity = parseInt(event.target.quantity.value)
        const updateQuantity = quantity - previousQuantity
        // console.log(quantity)
        event.target.reset()

        fetch(`http://localhost:5001/update/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ quantity: updateQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
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
                                    <input className='mb-2 p-3 border rounded-lg  w-full' name="quantity" type="text" onChange={handleInitialValue} value={count.minimum} />
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
                <form onSubmit={handlePlusQuantity} className='flex mb-2' >
                    <input className='p-2  outline-none ' type="text" name='quantity' />
                    <button className='text-white p-3 bg-purple-600 uppercase font-bold '><AiOutlinePlus /></button>
                </form>


                <form onSubmit={handleMinusQuantity} className='flex' >
                    <input className='p-2  outline-none ' type="text" name='quantity' />
                    <button className='text-white p-3 bg-purple-600 uppercase font-bold '><AiOutlineMinus /></button>
                </form>
            </div>
        </div>
    );
};

export default UserInfo;