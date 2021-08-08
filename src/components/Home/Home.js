import React from 'react';
import FeaturedWorks from '../FearturedWorks/FeaturedWorks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className="w-full">
            <Header/>
            <Service/>
            <FeaturedWorks/>
            <Footer/>
        </div>
    );
};

export default Home;