import React from 'react';
import { toast } from 'react-toastify';

const AddService = () => {
    const handleAddService = event => {
        event.preventDefault()
        const productName = event.target.productName.value
        const company = event.target.company.value
        const url = event.target.url.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value
        const minimum = event.target.minimum.value

        const addService = {
            name: productName,
            company: company,
            picture: url,
            price: price,
            quantity: quantity,
            minimum: minimum
        }
        fetch(`https://immense-earth-45924.herokuapp.com/production`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Product successfully added')
                    event.target.reset()
                }

            })
    }
    return (
        <div>
            <h2 className='text-center text-3xl p-5 font-bold'>add service</h2>
            <form onSubmit={handleAddService} className='w-[90%] lg:w-[50%] mx-auto p-20 bg-purple-300'>
                <input className='mb-2 w-full border rounded-lg p-2' type="text" placeholder='Product Name' name="productName" />
                <input className='mb-2 w-full border rounded-lg p-2' type="text" placeholder='Company' name="company" />
                <input className='mb-2 w-full border rounded-lg p-2' type="text" placeholder='Url' name='url' />
                <input className='mb-2 w-full border rounded-lg p-2' type="text" placeholder='price' name='price' />
                <input className='mb-2 w-full border rounded-lg p-2' type="text" placeholder='Quantity' name="quantity" />
                <input className='mb-2 w-full border rounded-lg p-2' type="text" placeholder='Minimum Quantity' name="minimum" />
                <input className='mb-2 w-full border font-bold bg-slate-400 rounded-lg p-2' type="submit" value='Add Product ' />
            </form>
        </div>
    );
};

export default AddService;