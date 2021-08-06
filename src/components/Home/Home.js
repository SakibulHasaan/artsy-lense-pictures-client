import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className="w-full">
            <Navbar />
            <Header/>
            <Service/>
            <Footer/>
        </div>
    );
};

export default Home;