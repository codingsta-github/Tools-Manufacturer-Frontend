import React from 'react';
import useReviews from '../Hooks/useReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews]=useReviews()
    return (
        <div className='max-w-screen-2xl mx-auto my-20'>
            <h1 className='font-bold lg:text-4xl md:text-2xl  text-xl px-10' >What people thinking about us</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
            {reviews.map(review=><Review review={review}></Review>)}
        </div>
        </div>
    );
};

export default Reviews;