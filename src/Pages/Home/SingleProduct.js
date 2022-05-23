import React from 'react';

const SingleProduct = ({ product }) => {
    const { name, price, quantity, picture } = product
    return (
        <div className='rounded-lg'>
            <img className='rounded-lg' src={picture} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{quantity}</p>
        </div>
    );
};

export default SingleProduct;