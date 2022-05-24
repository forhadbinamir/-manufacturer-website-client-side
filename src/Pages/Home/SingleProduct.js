import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleProduct.css'
const SingleProduct = ({ product }) => {
    const navigate = useNavigate()

    const handleOrderNow = (id) => {
        navigate(`/purchase/${id}`)
    }
    const { name, price, quantity, picture, _id } = product
    return (
        <div id="hover-apply" className='relative w-[420px] h-[250px]'>
            <div className='rounded-lg w-full relative '>
                <img className='w-full rounded-lg h-[250px]' src={picture} alt="" />
                <div className='absolute top-[50%] left-[50%] text-white '>
                </div>
            </div>
            <div id="hover-effect" className='rounded-lg w-full h-full absolute top-0 let-0 bg-black hidden opacity-60'>
                <div className='absolute top-[30%] left-[30%] font-bold text-2xl'>
                    <h2 className='text-white'>Co. : {name}</h2>
                    <p className='text-white'>Price: ${price}</p>
                    <p className='text-white'>Quantity: {quantity}</p>
                    <button onClick={() => handleOrderNow(_id)} className='btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;