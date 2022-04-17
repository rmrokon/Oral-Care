import React from 'react';
import './SingleService.css';

const SingleService = ({ picture, cost, title, description }) => {
    return (
        <div className='col-12 col-lg-3 border mx-5 mb-3 bg-light rounded'>
            <div className='mt-3'>
                <img className='img-fluid rounded border' src={picture} alt="" />
                <h3>{title}</h3>
                <p className='fs-3'>${cost}</p>
                <button className='book-now-btn fs-5'>Book Appoinment</button>
            </div>
            <p className='fs-5'>{description}</p>
        </div>
    );
};

export default SingleService;