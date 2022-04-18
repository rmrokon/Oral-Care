import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import './SingleReview.css';

const SingleReview = ({ picture, name, rating, review }) => {
    return (
        <div className='col-12 col-lg-3 my-3 p-2 mx-3 border rounded-1 shadow-sm'>
            <div>
                <img className='border rounded' src={picture} alt="" />
                <p className='fs-3 fw-bold'>{name}</p>
            </div>
            <p className='d-flex align-items-center'><span className='fs-5'>Rating: {rating}</span><StarIcon className='star-icon text-warning'></StarIcon></p>
            <p className='fs-5'>{review}</p>
        </div>
    );
};

export default SingleReview;