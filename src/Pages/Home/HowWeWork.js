import React, { useState } from 'react';

const HowWeWork = () => {
    const [work, setWork] = useState([])

    const weWork = [
        {
            _id: 1,
            title: '01 Request',
            description: 'Indicate what kind of machine you are intested in'
        },
        {
            _id: 2,
            title: '02 Development',
            description: 'You can give us a personal manager to make your application'
        },
        {
            _id: 3,
            title: '03 Installation',
            description: 'We install the machine with 1 year warranty period'
        }
    ]
    return (
        <div className='bg-white p-10'>
            <h1 className=" p-5 text-5xl font-bold text-accent text-center">How we Work</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5'>
                {
                    weWork.map(pd => {

                        return (
                            <div className='shadow-lg p-5 rounded-lg'
                                key={pd._id}
                            >
                                <h2 className='text-accent text-2xl font-bold'>{pd.title}</h2>
                                <p>{pd.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default HowWeWork;