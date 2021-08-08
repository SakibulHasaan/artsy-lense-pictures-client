import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{backgroundColor: "#1f2937"}} className="flex flex-col justify-center items-center text-white  py-5">
            <div className="w-full md:w-1/4 md:mb-5 p-2">
                <ul className="flex justify-around text-xl md:text-lg w-72 mx-auto">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/about">Blog</Link></li>
                    <li><Link to="/about">Career</Link></li>
                    <li><Link to="/about">Partners</Link></li>
                </ul>
            </div>
            <div className="w-full md:w-1/4 mt-2">
                <ul className="flex justify-around text-sm md:text-xl w-64 mx-auto">
                    <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li><Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                    <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                    <li><Link to="/"><i className="fa fa-github" aria-hidden="true"></i></Link></li>
                </ul>
            </div>
            <div className="w-full md:w-1/4 text-lg md:text-sm text-center mt-2 px-2 pt-2">
                <p>&copy; {new Date().getFullYear()} Artsy Lens Photography. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;