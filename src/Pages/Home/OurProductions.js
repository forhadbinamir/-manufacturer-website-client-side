import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';

const OurProductions = () => {

    const [productions, setProductions] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/production')
            .then(res => res.json())
            .then(data => {
                setProductions(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-center text-4xl font-bold text-accent p-5'>Our Production</h2>
            <p className='text-center p-5 text-2xl lg:w-[50%] md:w-[80%] sm:w-[100%] mx-auto text-info'>The manufacture of industrial equipment requires a vast knowledge base of
                processes and understanding of fundamental concepts.</p>


            <div>
                <h1>Production {productions.length}</h1>


                <div className='grid grid-cols-3 gap-10'>
                    {
                        productions.map(product => <SingleProduct
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