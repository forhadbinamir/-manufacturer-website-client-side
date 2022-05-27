import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../Firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-3xl text-center font-bold text-primary p-3'>Dashboard Panel</h2>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-white text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='hover:translate-x-2 duration-300'><Link to='/dashboard'>Portfolio </Link></li>
                        <li className='hover:translate-x-2 duration-300'>{admin && <Link to='/dashboard/manageuser'>Manage Users </Link>}</li>
                        <li className='hover:translate-x-2 duration-300'>{admin && <Link to='/dashboard/allorders'>All Orders </Link>}</li>
                        <li className='hover:translate-x-2 duration-300'><Link to='/dashboard/orders'>My Orders </Link></li>
                        <li className='hover:translate-x-2 duration-300'><Link to='/dashboard/reviews'>My Reviews </Link></li>

                        <li className='hover:translate-x-2 duration-300'><Link to='/dashboard/addservice'>Add Service </Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;