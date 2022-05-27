
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyPortfolio = () => {

    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5001/profile`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProfiles(data)

            })
    }, [profiles])
    const handleUserInfo = (e) => {
        e.preventDefault()
        if (!e.target.value === "") {
            return
        } else {
            const name = e.target.name.value
            const education = e.target.education.value
            const url = e.target.url.value
            const phone = e.target.phone.value
            console.log(name, education, url, phone)


            fetch('http://localhost:5001/profile', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ name: name, education: education, url: url, phone: phone })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        toast('Your information saved successfully')
                        e.target.value.reset()
                    }
                })
        }


    }
    return (
        <div>
            <form onSubmit={handleUserInfo} className='text-center p-2'>
                <input className='border p-2 mr-1' type="text" name="name" placeholder='Name' />
                <input className='border p-2 mr-1' type="text" name="education" placeholder='Education' />
                <input className='border p-2 mr-1' type="text" name="url" placeholder='Profile url' />
                <input className='border p-2 mr-1' type="text" name="phone" placeholder='Phone' />
                <input className='border p-2 mr-1 font-bold' type="submit" value='Submit' />
            </form>
            <table className='border w-full'>
                <thead className="">
                    <tr className="border">
                        <th>Name</th>
                        <th>Education</th>
                        <th>Url</th>
                        <th>Phone</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        profiles.map(profile => <tr>
                            <td>{profile?.name}</td>
                            <td>{profile?.education}</td>
                            <td>{profile?.url}</td>
                            <td>{profile?.phone}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div >
    );
};

export default MyPortfolio;