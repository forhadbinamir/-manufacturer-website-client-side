import React from 'react';
import './Footer.css'
import cardimg from '../../../assets/capabilities/281644779_738130303860356_5154331157412675420_n.png'
import { FiArrowRight } from "react-icons/fi";
import { RiFacebookFill } from "react-icons/ri";
import { RiGoogleFill } from "react-icons/ri";
import { GrYoutube } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {

    return (
        <div>
            <div className='p-10 bg-white grid lg:grid-cols-[1fr_200px_200px_200px] md:grid-cols-[1fr_1fr] sm:grid-cols-[1fr] gap-4'>
                <div>
                    <h1 className='text-accent font-bold text-1xl py-5'>Copyright © {new Date().getFullYear()} MANUFACTURER
                        ALL RIGHTS RESERVED</h1>
                    <p className='text-accent'>Manufacturer <span className='text-info'>– Factory,Industrial,</span></p>
                    <p className='text-info'>
                        Manufacturing <span className='text-accent'>By Forhad Bin Amir</span> </p>
                    <div className='flex justify-start list-none mt-8 text-2xl'>
                        <li><a className='mr-10 hover:text-accent' href="home"><RiFacebookFill /></a></li>
                        <li><a className='mr-10 hover:text-accent' href="home"><RiGoogleFill /></a></li>
                        <li><a className='mr-10 hover:text-accent' href="home"><GrYoutube /></a></li>
                        <li><a className='mr-10 hover:text-accent' href="home"><FiInstagram /></a></li>
                    </div>
                    <img src={cardimg} alt="" />
                </div>
                <div className='text-accent'>
                    <h3 className='text-accent font-bold text-2xl py-5'>Company</h3>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">Home</a></li>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">Our Factories</a></li>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">About Us</a></li>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">Products</a></li>
                </div>

                <div className='text-accent'>
                    <h3 className='text-accent font-bold text-2xl py-5'>Production</h3>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">Home</a></li>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">Our Factories</a></li>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">About Us</a></li>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">Products</a></li>
                </div>

                <div className='text-accent'>
                    <h3 className='text-accent font-bold text-2xl py-5'>Contact Us</h3>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">Home</a></li>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">Our Factories</a></li>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">About Us</a></li>
                    <li className='flex items-center hover:translate-x-2 duration-300 mb-2'><FiArrowRight className='mr-1 right-array' /><a href="home">Products</a></li>
                </div>
            </div>
        </div >
    );
};

export default Footer;