import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-3xl text-center font-bold text-primary'>Dashboard Panel</h2>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>Manage Users </Link></li>
                        <li><Link to='/dashboard/myorders'>My Orders </Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;