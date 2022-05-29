import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <div class="card mx-48 mt-5 bg-base-100 shadow-xl ">
  <div class="card-body">
    <h2 class="card-title text-2xl">Abdullah Al Omar</h2>
    <p>abdullahalomar048@gmail.com</p>
    <p className='text-2xl'>Diploma in Engineering</p>
    <p>Computer technology</p>
    <div class="card-actions justify-end">

    <a className='btn btn-primary' href="https://abdullahalomar.github.io/bhandaria/">First Website</a>
    <a className='btn btn-primary' href="https://abdullahalomar.github.io/bhandaria/">Second Website</a>
    <a className='btn btn-primary' href="https://abdullahalomar.github.io/bhandaria/">Third Website</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Portfolio;