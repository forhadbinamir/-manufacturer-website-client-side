import React from 'react';
import capabilities from '../../assets/capabilities/capabilities.jpg'
import signature from '../../assets/capabilities/John_McCain_Signature-150x86.png'
const Capabilities = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className='basis-1/2'>
                    <img src={capabilities} className="rounded-lg shadow-2xl" />
                </div>
                <div className='basis-1/2'>
                    <h1 className="text-5xl font-bold text-accent">Our Capabilities</h1>
                    <p className="text-info py-6">We Are Restocking as Quickly as Possible. Come Back 7/30 to Order, more of These Flavors Inspired by the Places You Call Home!</p>
                    <img src={signature} alt="" />
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;