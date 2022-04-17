import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center'>
            <div className='banner-text bg-light p-3 rounded' style={{ '--bs-bg-opacity': '.7' }}>
                <h3 className='text-center'>You need to take care of your smile!</h3>
                <h1 className='text-center'>Dr. Fibonacci</h1>
            </div>
        </div>
    );
};

export default Banner;