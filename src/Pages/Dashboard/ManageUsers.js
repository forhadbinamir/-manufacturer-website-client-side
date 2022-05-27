import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
    const [productions, setProductions] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5001/production`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setProductions(data)
            })
    }, [])

    return (
        <div>
            <h2 className='text-center text-3xl p-5 font-bold'>Only Admin Access Here</h2>
            <table className='border'>
                <thead className="">

                    <tr className="border">
                        <th>S.No</th>
                        <th>image</th>
                        <th>Brand</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        productions.map((product, index) => <tr
                            key={product._id}
                            className=""
                        >
                            <td>{index + 1}</td>
                            <td><img className='w-16 mx-auto rounded-lg' src={product?.picture} alt="" /></td>
                            <td>{product?.name}</td>

                            <td>{product?.company}</td>
                            <td>{product?.price}</td>
                            <td><button className='btn btn-sm bg-green-500 text-black hover:text-white'>Edit</button></td>
                            <td><button className='btn btn-sm bg-warning text-black hover:text-white'>Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;