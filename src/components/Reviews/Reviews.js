import React from 'react';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='grid grid-cols-3 gap-4 ml-20 mr-20'>
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;