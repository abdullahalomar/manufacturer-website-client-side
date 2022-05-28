import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Products from '../Products/Products';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;