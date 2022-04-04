import React from 'react';

const Review = (props) => {
    const {name, review, rating, pic} = props.review;
    return (
        <div className='mt-6 border-2 border-red-200 p-20'>
            <div className='ml-40'>
            <img className='w-24' src={pic} alt="" />
            </div>
            <div className='mt-16'>
            <p>Name: {name}</p>
            <p>Review: {review}</p>
            <p>Rating: {rating}/5</p>
            </div>
        </div>
    );
};

export default Review;