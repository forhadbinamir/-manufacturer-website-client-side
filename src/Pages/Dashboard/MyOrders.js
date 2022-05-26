import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../Firebase.init";
import ModalOrder from "./ModalOrder";
import './MyOrder.css'
const MyOrders = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        const email = user.email
        const url = `http://localhost:5001/myorder?email=${email}`
        try {
            fetch(url, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setMyOrders(data)
                })
        }
        catch (error) {
            toast(error.message)
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth)
                navigate('/login')
            }
        }

    }, [user])
    const handleDeleteOrder = id => {


        fetch(`http://localhost:5001/myorder/${id}`, {
            method: "DELETE",
            headers: {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success("Your order delete successfully")
                    const remaining = myOrders.filter(order => order._id !== id)
                    setMyOrders(remaining)
                }
            })
    }
    return (
        <>
            <h2 className='text-center m-3 font-bold '>Your Order list : {myOrders.length}</h2>
            <div className='overflow-x-auto'>

                <table className='border w-full'>
                    <thead className="">
                        <tr className="border">
                            <th>Lenth</th>
                            <th>Supplier Name</th>
                            <th>Price</th>
                            <th>My Order</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {
                        myOrders.map((supplier, index) => <ModalOrder
                            key={supplier._id}
                            supplier={supplier}
                            index={index}
                            handleDeleteOrder={handleDeleteOrder}
                        ></ModalOrder>

                        )
                    }

                </table>


            </div>
        </>
    );
};

export default MyOrders;