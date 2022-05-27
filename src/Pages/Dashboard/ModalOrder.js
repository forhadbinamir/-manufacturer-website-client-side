import React from 'react';
import { Link } from 'react-router-dom';

const ModalOrder = ({ supplier, handleDeleteOrder, index }) => {
    const { productName, price, myOrder, paid, _id } = supplier
    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>{productName}</td>
                <td>{price}</td>
                <td>{myOrder}</td>
                <td>{(price && !paid) && <button className='btn btn-xs bg-yellow-500'> <Link to={`/dashboard/payment/${_id}`}>Pay</Link></button>}
                    {(price && paid) && <button className='btn btn-xs bg-green-500'>Paid</button>}</td>
                <td><label htmlFor="my-modal-6" className="btn btn-xs">Delete!</label></td>
            </tr>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{productName}</h3>
                    <p className="py-4">Are You sure You want to delete your order</p>
                    <p className="py-4">Your order Price is : {price}</p>
                    {
                        <div className="modal-action">
                            <label onClick={() => handleDeleteOrder(supplier._id)} htmlFor="my-modal-6" className="btn modal-button btn-sm">Yeh</label>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default ModalOrder;