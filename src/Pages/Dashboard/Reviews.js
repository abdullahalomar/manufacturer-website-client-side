import React, { useEffect, useState } from 'react';

import ReviewSingle from './ReviewSingle';
import Review from './ReviewSingle';


const Reviews = () => {
    const [reviews, setReviews] = useState([]); 
        
    useEffect(() => {
        fetch('https://pure-spire-01471.herokuapp.com/reviews')
        .then(response => response.json())
        .then(json => setReviews(json))
    },[])
    return (
        <div>
            <h2 className='text-3xl text-center  my-10'>Our Customer Reviews</h2>
            <div className='flex justify-evenly' >
            {
                reviews.map(review => <ReviewSingle
                    key={review._id}
                    review={review}
                ></ReviewSingle>)
            }
            </div>
           
        </div>
    );
};

export default Reviews;