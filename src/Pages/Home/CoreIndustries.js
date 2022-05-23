import React from 'react';
import industries1 from '../../assets/indeustriel/circular-saw.png'
import industries2 from '../../assets/indeustriel/metalworking.png'
import industries3 from '../../assets/indeustriel/bridge-saw.png'
const CoreIndustries = () => {
    return (
        <div className='p-5'>
            <h2 className='text-center text-4xl font-bold text-accent p-5'>Industries We Serve</h2>
            <p className='text-center p-5 text-2xl lg:w-[50%] md:w-[80%] sm:w-[100%] mx-auto text-info'>Manufacturer’s high end manufacturing services are a
                perfect complement to today’s high tech industries.</p>


            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-10">
                <div className="text-center">
                    <img className='w-[100px] mx-auto' src={industries1} alt="" />
                    <h2 className='text-2xl text-accent font-bold'>WoodWorking</h2>
                    <p className='w-[80%] mx-auto text-info p-5'>Whether you’re managing around-the-clock production or working on a project...</p>
                    <button className='btn btn-outline btn-primary btn-sm'>Learn more</button>
                </div>
                <div className='text-center'>
                    <img className='w-[100px] mx-auto' src={industries2} alt="" />
                    <h2 className='text-2xl text-accent font-bold'>Metalworking</h2>
                    <p className='w-[80%] mx-auto text-info p-5'>From our versatile ironworkers to our easily-programmable plasma tables services...</p>
                    <button className='btn btn-outline btn-primary btn-sm'>Learn more</button>
                </div>
                <div className='text-center'>
                    <img className='w-[100px] mx-auto' src={industries3} alt="" />
                    <h2 className='text-2xl text-accent font-bold'>Stone Cutting</h2>
                    <p className='w-[80%] mx-auto text-info p-5'>We build machines that set the industry standard for precision and durability...</p>
                    <button className='btn btn-outline btn-primary btn-sm'>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default CoreIndustries;