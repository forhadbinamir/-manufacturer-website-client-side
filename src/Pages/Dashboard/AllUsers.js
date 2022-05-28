import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = ({ user, index, refetch }) => {
    const { email, role, _id } = user
    const makeAdmin = () => {
        fetch(`https://immense-earth-45924.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })

    }
    const handleDeleteUser = (id) => {
        fetch(`https://immense-earth-45924.herokuapp.com/user/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast('Field to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    refetch()
                    toast.success('Success fully mede an admin')
                }
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td><img className='w-16 mx-auto rounded-lg' src={user?.picture} alt="" /></td>
            <td>{user?.email}</td>


            <td>{
                role ? <button onClick={makeAdmin} className="btn btn-xs bg-green-500">Admin</button>
                    :
                    <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
            }</td>

            <td><button onClick={() => handleDeleteUser(_id)} className='btn btn-sm bg-warning text-black hover:text-white'>Delete</button></td>
        </tr>
    );
};

export default AllUsers;