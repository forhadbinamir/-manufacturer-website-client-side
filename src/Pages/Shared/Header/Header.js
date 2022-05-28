import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/manufacturer_logo.png'
import auth from '../../Firebase.init';
const Header = () => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
    }

    const menuItem = <>
        <li><Link className='hover:translate-x-2 duration-300' to='/home'>Home</Link></li>
        <li><Link className='hover:translate-x-2 duration-300' to='/blog'>Blogs</Link></li>
        <li><Link className='hover:translate-x-2 duration-300' to='/portfolio'>Portfolio</Link></li>
        {/* <li><Link className='hover:translate-x-2 duration-300' to='/contact'>Contact</Link></li> */}
        {
            user && <li><Link className='hover:translate-x-2 duration-300' to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user ? <button onClick={() => logOut()} className="btn btn-active btn-ghost">Sign Out</button> : <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div className="navbar sticky bg-primary text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItem
                        }

                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl w-32"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal  p-0">
                    {
                        menuItem
                    }
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label htmlFor="dashboard" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>
            </div>
        </div>
    );
};

export default Header;