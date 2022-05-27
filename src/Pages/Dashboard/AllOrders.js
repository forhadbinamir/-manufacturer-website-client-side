import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/allorder', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl p-5 font-bold'>All Orders only access for admin</h2>
            <table className='border'>
                <thead className="">

                    <tr className="border">
                        <th>S.No</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allOrders.map((user, index) => {
                            return (
                                <tr
                                    key={user._id}
                                    user={user}
                                    index={index}

                                >
                                    <td>{index + 1}</td>
                                    <td>{user._id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.productName}</td>
                                    <td>{user.price}</td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    );
};

export default AllOrders;