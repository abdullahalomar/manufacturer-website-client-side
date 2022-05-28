import React from 'react';
import Products from '../Products/Products';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;