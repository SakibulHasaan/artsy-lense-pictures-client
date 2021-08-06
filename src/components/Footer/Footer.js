import React from 'react';

const Footer = () => {
    return (
        <div style={{backgroundColor: "#1f2937"}} className="flex flex-col justify-center items-center text-white  py-5">
            <div className="w-full md:w-1/4 md:mb-5 p-2">
                <ul className="flex justify-around text-xl md:text-lg w-72 mx-auto">
                    <li><a href="/about">About</a></li>
                    <li><a href="/about">Blog</a></li>
                    <li><a href="/about">Career</a></li>
                    <li><a href="/about">Partners</a></li>
                </ul>
            </div>
            <div className="w-full md:w-1/4 mt-2">
                <ul className="flex justify-around text-sm md:text-xl w-64 mx-auto">
                    <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="/"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="w-full md:w-1/4 text-lg md:text-sm text-center mt-2 px-2 pt-2">
                <p>&copy; {new Date().getFullYear} Artsy Lens Photography. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;