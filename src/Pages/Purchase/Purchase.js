import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams()
    const [production, setProductions] = useState({})

    useEffect(() => {
        fetch(`https://immense-earth-45924.herokuapp.com/production/${id}`)
            .then(res => res.json())
            .then(data => {
                setProductions(data)

            })
    }, [id])
    return (
        <div className='bg-white'>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={production.picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl text-accent font-bold">{production.name}</h1>
                        <p className="py-6 text-info">{production.description}</p>
                        <button className="btn btn-primary"> <Link to={`/userinfo/${id}`}>Purchase Now</Link> </button>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-96' alt="" />
            </div>
        </div>
    );
};

export default Purchase;