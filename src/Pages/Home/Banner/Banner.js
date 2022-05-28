import React from 'react';
import manufacturPhoto from '../../../images/800_3506070_5f0a3f321098ce8bc727bce55580b4647aa665ff.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={manufacturPhoto} />
    <div>
      <h1 class="text-5xl font-bold">Tech Tool Manufacturer</h1>
      <p class="py-6">We manufacture all computer tools.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;