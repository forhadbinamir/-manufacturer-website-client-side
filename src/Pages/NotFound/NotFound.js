import React from 'react';
import notFound from '../../assets/404img/404.png'
const NotFound = () => {
    return (
        <div>
            <img className='w-full' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;