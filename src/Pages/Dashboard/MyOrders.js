import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Hooks/Firebase.init';
const MyOrders = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [mySuppliers, setMySuppliers] = useState([])
    useEffect(() => {
        const email = user.email
        const getMySuppliers = async () => {
            const url = `http://localhost:5001/myorder?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMySuppliers(data)
            }
            catch (error) {
                toast(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getMySuppliers()
    }, [user])
    return (
        <div className='container overflow-x-auto'>
            <h2 className='text-center m-3'>Your Order Suppliers list : {mySuppliers.length}</h2>
            <table className='m-5'>
                <thead>
                    <tr>
                        <th>Lenth</th>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Supplier Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mySuppliers.map(supplier => <tr key={supplier._id}>
                            <td>{mySuppliers.indexOf(supplier) + 1}</td>
                            <td>{supplier._id}</td>
                            <td>{supplier.email}</td>
                            <td>{supplier.supplierName}</td>
                            <td>{supplier.price}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;