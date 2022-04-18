import React from 'react';
import './Banner.css';
import Doctor from '../../images/doctor.jpg';

const Banner = () => {
    return (
        <div>
            <div className='banner row justify-content-evenly align-items-center'>
                <img className='col-12 col-lg-6 banner-top-image border border-3 border-light p-0 rounded' src={Doctor} alt="" />
                <div className='col-12 col-lg-6 banner-text bg-light p-3 rounded' style={{ '--bs-bg-opacity': '.7' }}>
                    <h3 className='titles text-center'>Don't hesitate to smile, just take care of your teeth!</h3>
                    <h1 className='text-center'>Dr. Fibonacci</h1>
                    <p className='titles fs-4 text-center'>"Treated 5000+ people. 2000+ major surgeries. Let's figure out what's stopping you to smile!"</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;