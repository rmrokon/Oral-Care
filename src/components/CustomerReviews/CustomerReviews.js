import React from 'react';
import useReviews from '../../Utilities/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './CustomerReviews.css';

const CustomerReviews = () => {
    const reviews = useReviews();
    return (
        <div className='container-fluid my-5 p-3'>
            <h3 className='titles text-center fs-1'>Previous Customer Reviews</h3>
            <div className='row justify-content-center'>
                {
                    reviews.map(review => <SingleReview key={review._id} {...review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;