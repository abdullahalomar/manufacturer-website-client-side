import React from 'react';
import manufacturPhoto from '../../../images/offer/RGB-Ram-Transparent.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={manufacturPhoto} width={ 500}/>
    <div>
      <h1 class="text-5xl font-bold">Ram Manufacturer</h1>
      <p class="py-6">We manufacture all computer Rams.</p>
      <button class="btn btn-primary">Explore Ram</button>
    </div>
  </div>
</div>
    );
};

export default Banner;