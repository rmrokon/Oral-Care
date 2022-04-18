import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({ picture, cost, title, description }) => {
    const navigate = useNavigate();
    const handleNavigateToCheckOut = () => {
        navigate('/checkout');
    }
    return (
        <div className='grow col-12 col-lg-3 border mx-5 mb-3 bg-light rounded-1 shadow-lg'>
            <div className='mt-2'>
                <img className='img-fluid rounded border' src={picture} alt="" />
                <h3>{title}</h3>
                <p className='fs-3'>${cost}</p>
                <button onClick={handleNavigateToCheckOut} className='book-now-btn fs-5'>Book Appoinment</button>
            </div>
            <p className='fs-5'>{description}</p>
        </div>
    );
};

export default SingleService;