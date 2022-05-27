import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Hooks/Loading';
import AllUsers from './AllUsers';

const ManageUsers = () => {
    const navigate = useNavigate()
    const { data: users, isLoading, refetch } = useQuery('user', () => fetch(`http://localhost:5001/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                navigate('/login')
            }
            return res.json()
        })
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-center text-3xl p-5 font-bold'>Only Admin Access Here</h2>
            <table className='border'>
                <thead className="">

                    <tr className="border">
                        <th>S.No</th>
                        <th>image</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((user, index) => <AllUsers
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                        >
                        </AllUsers>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;