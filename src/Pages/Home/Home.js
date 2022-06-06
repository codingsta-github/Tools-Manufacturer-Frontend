import React from 'react';
import Reviews from '../Reviews';
import Banner from './Banner';
import Tools from './Tools';
const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Reviews></Reviews>
            <Tools></Tools>
        </div>
    );
};

export default Home;