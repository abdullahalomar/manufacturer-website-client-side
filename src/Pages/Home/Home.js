import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;