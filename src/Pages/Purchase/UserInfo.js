import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../Firebase.init';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import { toast } from 'react-toastify';
const UserInfo = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const [products, setProductions] = useState({})
    const [count, setCount] = useState({ minimum: '20', })
    const [orderBtn, setOrderBtn] = useState(false)
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
        const { minimum } = count
        const newQuantity = e.target.value
        const updateQuantity = { minimum: newQuantity }
        setCount(updateQuantity)
        if (minimum <= 20) {

            console.log('quantity is less')
        } else {
            console.log('quantity is more')
        }

    }
    const handleOrderDeliver = event => {
        event.preventDefault()
        if (!products.quantity > 0) {
            return toast.error('Your products  stock is zero ')
        } else {
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
                            .then(data => {
                                console.log("update", data)
                                if (data.acknowledged) {

                                    const myOrders = {
                                        name: user.name,
                                        email: user.email,
                                        productName: products.name,
                                        price: products.price,
                                        myOrder: newQuantity,
                                        phone: event.target.phone.value
                                    }
                                    fetch('http://localhost:5001/myorder', {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(myOrders)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            console.log('Your order is added to card', data)
                                            toast('Your order added to card')
                                        })
                                }
                            })
                    }
                })
        }
    }

    const handlePlusQuantity = (event) => {
        event.preventDefault()
        if (!event.target.quantity.value > 0 && event.target.quantity.value === "") {
            return toast.warning('Put some value of quantity')
        } else {
            const previousQuantity = parseInt(products.quantity)
            const newQuantity = parseInt(event.target.quantity.value)
            const updateQuantity = newQuantity + previousQuantity
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
                    if (data.matchedCount === 1) {
                        toast.success('Product added successfully')
                    }
                })
        }

    }

    const handleMinusQuantity = event => {
        event.preventDefault()
        if (!event.target.quantity.value > 0 && event.target.quantity.value === "") {
            return toast.warning('Put some eligible value')
        } else {
            const previousQuantity = parseInt(products.quantity)
            const newQuantity = parseInt(event.target.quantity.value)
            const updateQuantity = previousQuantity - newQuantity
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
                    if (data.matchedCount === 1) {
                        toast.success('Your Product is now changed successfully')
                    }

                })
        }
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

                            <div className='flex justify-between'>
                                <div>
                                    <label htmlFor="">Product Name</label>
                                    <input className='mb-2 p-3 border rounded-lg  w-full' type="text" value={products?.name} readOnly />
                                </div>
                                <div>
                                    <label htmlFor="">Price</label>
                                    <input className='mb-2 p-3 border rounded-lg  w-full' type="text" value={products?.price} readOnly />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <label className='text-accent' htmlFor="">Minimum Order</label>
                                    <input className='mb-2 p-3 border rounded-lg  w-full' name="quantity" type="text" onChange={handleInitialValue} value={count.minimum} />
                                </div>
                                <div>
                                    <label htmlFor="">Available Quantity</label>
                                    <input className='mb-2 p-3 border rounded-lg  w-full' type="text" value={products?.quantity} readOnly />
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

                            <input disabled={!products.minimum <= 20 ? false : true} className='w-full bg-purple-600 rounded-lg p-3 text-white font-bold uppercase' type="submit" value="Order" />
                        </form>
                        <button className='btn btn-link'><Link to='/dashboard/orders'>Go to Order List</Link></button>
                    </div>
                </div>
            </div>
            <div className='bg-accent rounded p-20'>
                <h2 className='text-2xl font-bold text-white text-center pb-5'>Edit Quantity</h2>
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