import React from 'react';
import customer from '../../images/icons/icons8-customer-64.png';
import revenue from '../../images/icons/icons8-revenue-64.png';
import reviews from '../../images/icons/icons8-reviews-64.png';
import tools from '../../images/icons/icons8-tools-64.png';

const BusinessSummary = () => {
    return (
        
        <div className='mt-10 mx-48'>
            <h2 className='text-4xl text-center font-bold my-5'>Business Summery</h2>
            <div class="stats shadow gap-10">
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <img src={customer} alt="" />
    </div>
    <div class="stat-title">Served</div>
    <div class="stat-value">100+</div>
    <div class="stat-title">Customers</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
    <img src={revenue} alt="" />
    </div>
    <div class="stat-title"></div>
    <div class="stat-value">120M+</div>
    <div class="stat-title">Annual Revenue</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
    <img src={reviews} alt="" />
    </div>
    <div class="stat-title"></div>
    <div class="stat-value">33K+</div>
    <div class="stat-title">Reviews</div>
  </div>
  <div class="stat">
    <div class="stat-figure text-secondary">
    <img src={tools} alt="" />
    </div>
    <div class="stat-title"></div>
    <div class="stat-value">50+</div>
    <div class="stat-title">Tools</div>
  </div>
  
</div>
        </div>
    );
};

export default BusinessSummary;