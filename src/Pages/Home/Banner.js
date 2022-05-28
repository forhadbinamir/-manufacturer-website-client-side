import React from 'react';
import bgbanner from '../../assets/banner/slide.jpg'
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bgbanner})`, backgroundSize: "80", backgroundPosition: 'right' }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="" />
                <div>
                    <h1 className="text-5xl w-[80%] font-bold text-accent">Expert Technical Support
                        High-Performance Machines
                        Profitable Solutions</h1>
                    <p className="text-info py-6">Custom Solutions to Suit Your Need</p>
                    <button className="btn btn-primary">Get a Quote</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;