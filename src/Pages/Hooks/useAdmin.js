import React, { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState('')

    useEffect(() => {
        const email = user?.email
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setAdmin(data.admin)
                })
        }
    }, [user])
    return [admin]
};

export default useAdmin;