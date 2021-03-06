import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Navbar = () => {
    const {id} = useParams();
    let location = window.location.href.split('/')[window.location.href.split('/').length -1];
    const isURLlog = location === 'login' || location === 'register' || Boolean(location)
    
    return (
        <nav className={ isURLlog ? `w-full font-sans z-50 bg-white absolute` : `w-full font-sans z-50 bg-white`}>
            <div className="w-full">
                <header className="header h-12 md:h-16 flex items-center text-sm md:text-base">
                    <Link to="/" className="logo flex items-center text-grey-light hover:text-blue-500 hover:bg-grey-400 h-full px-4 md:px-5 no-underline">
                        <div className="logo-symbol text-orange">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                            </svg>
                        </div>
                        <div className="logo-type ml-2 tracking-wide">
                            <b>Artsy Lens Photography</b>
                        </div>
                    </Link>
                    <div className="nav-menu hidden sm:flex h-full">
                        <ul className="list-reset h-full flex">
                            <li className="h-full">
                                <a href="#feature" className="no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-blue-400 hover:bg-grey-darkest">Features</a>
                            </li>
                            <li className="h-full">
                                <a href="#services" className="no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-blue-400 hover:bg-grey-darkest">Services</a>
                            </li>
                            <li className="h-full">
                                <Link to="/" className="no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-blue-400 hover:bg-grey-darkest">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-login hidden sm:flex ml-auto h-full">
                        <Link to="/login" className="no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-blue-400 hover:bg-grey-darkest">Login</Link>
                        <Link to="/register" className="no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-blue-400 hover:bg-orange-dark">Register</Link>
                    </div>
                    <Link to="/" className="hamburger ml-auto flex sm:hidden no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-blue-400 hover:bg-grey-darkest"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                    </Link>
                </header>
            </div>
        </nav>
    );
};

export default Navbar;