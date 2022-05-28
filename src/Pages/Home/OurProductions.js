import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';

const OurProductions = () => {

    const [productions, setProductions] = useState([])
    useEffect(() => {
        fetch('https://immense-earth-45924.herokuapp.com/production')
            .then(res => res.json())
            .then(data => {
                setProductions(data)
            })
    }, [])
    const productionsSlice = productions.slice(0, 6)
    return (
        <div className='py-10'>
            <h2 className='text-center text-4xl font-bold text-accent p-5'>Our Production</h2>
            <p className='text-center p-5 text-2xl lg:w-[50%] md:w-[80%] sm:w-[100%] mx-auto text-info'>The manufacture of industrial equipment requires a vast knowledge base of
                processes and understanding of fundamental concepts.</p>
            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-6 sm:grid-cols-12 gap-10 px-10 py-5'>
                    {
                        productionsSlice.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurProductions;