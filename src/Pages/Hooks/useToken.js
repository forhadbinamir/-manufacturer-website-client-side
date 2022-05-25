import React, { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        // console.log('useToken user', user)
        const currentUser = { email: email }
        if (email) {
            console.log(email)
            fetch(`http://localhost:5001/user`, {
                method: 'POST',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setToken(data.jotToken)
                        localStorage.setItem("accessToken", data.jotToken)
                    }
                    console.log(data)
                })
        }

    }, [user])
    return [token]
};

export default useToken;