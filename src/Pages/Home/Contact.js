import React from 'react';
import { ImMobile } from "react-icons/im";
import { BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import bgcontact from '../../assets/capabilities/dots.png'
const Contact = () => {
    return (
        <div className="min-h-screen py-10">
            <div className="hero-content flex lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full basis-1/2 shadow-2xl bg-base-100">
                    <div className="card-body bg-white">
                        <div className="flex justify-evenly">
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered w-full mr-5" />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Company</span>
                                </label>
                                <input type="text" placeholder="Company" className="input input-bordered w-full " />
                            </div>
                        </div>
                        <div className="flex justify-evenly">
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered w-full mr-5" />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Phone" className="input input-bordered  w-full " />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button className="btn btn-primary w-96 mt-5">Submit</button>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${bgcontact})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundSize: 'right', }} className="text-center p-10 lg:text-left basis-1/2">
                    <h1 className="text-4xl font-bold text-accent">Call Us or Fill the Form</h1>
                    <div className='flex items-center py-5'>
                        <i className='text-accent mr-2'><ImMobile /></i>
                        <div>
                            <h4 className='text-accent font-bold'>+966 508912270</h4>
                            <p className="text-accent">Don’t hesitate to contact us</p>
                        </div>
                    </div>
                    <div className='flex items-center py-5'>
                        <i className='text-accent mr-2'><BsClock /></i>
                        <div>
                            <h4 className='text-accent font-bold'>Opining 9 : 00 AM to 4:45 PM</h4>
                            <p className="text-accent">Don’t hesitate to contact us</p>
                        </div>
                    </div>
                    <div className='flex items-center py-5'>
                        <i className='text-accent mr-2'><GoLocation /></i>
                        <div>
                            <h4 className='text-accent font-bold'>Factory address</h4>
                            <p className="text-accent">5022 Forest Avenue
                                New York
                                10013</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;