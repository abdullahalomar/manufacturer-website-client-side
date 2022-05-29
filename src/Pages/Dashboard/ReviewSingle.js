import React from 'react';
import ReactStars from "react-rating-stars-component";

const ReviewSingle = (props) => {
    const { name, comment, review } = props.review;
    return (
        
      
        <div class="w-52 p-4 text-gray-800 bg-white rounded-lg shadow">
<div class="mb-2">
  <div class="h-3 text-3xl text-left text-indigo-600">“</div>
  <p class="px-4 text-center text-gray-600">
            { comment}
  </p>
  <div class="h-3 text-3xl text-right text-indigo-600">”</div>
  <div class="text-center">
            <h5 class="font-bold text-indigo-600">{ name}</h5>
            <div class="rating">
      
      <ReactStars count={5} value={review}
    size={24} edit=""
    activeColor="#ffd700"/>,
        </div>
  </div>
</div>
</div>

        
    );
};

export default ReviewSingle;