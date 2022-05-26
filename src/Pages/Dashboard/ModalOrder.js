import React from 'react';
import { Link } from 'react-router-dom';

const ModalOrder = ({ supplier, handleDeleteOrder, index }) => {
    const { productName, price, myOrder, _id } = supplier
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{productName}</td>
                <td>{price}</td>
                <td>{myOrder}</td>
                <td><button className='btn btn-xs bg-green-500'> <Link to={`/dashboard/payment/${_id}`}>Pay</Link> </button></td>
                <td><label for="my-modal-6" class="btn btn-xs">Delete!</label></td>
            </tr>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{productName}</h3>
                    <p class="py-4">Are You sure You want to delete your order</p>
                    <p class="py-4">Your order Price is : {price}</p>
                    {
                        <div class="modal-action">
                            <label onClick={() => handleDeleteOrder(supplier._id)} for="my-modal-6" className="btn modal-button btn-sm">Yeh</label>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default ModalOrder;