import React from 'react';
import { Carousel } from 'antd';


const contentStyle = {
    height: '300px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
};

const Header = () => {

    return (
        <div className="w-full">
            <Carousel autoplay>

                <div>
                    <div className="flex flex-col md:flex-row justify-between w-full h-96 md:h-72 lg:h-96 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">

                        <div className="w-full flex flex-col justify-center items-center md:w-1/2 h-72 md:h-full">
                            <h1 className="text-white text-2xl md:text-4xl text-bold">We are Creative</h1>
                            <p className="text-white text-lg md:text-2xl p-2">Give us a chance--  you will be amazed</p>
                        </div>

                        <div className="w-full md:w-1/2 md:h-full">
                            <img className="object-contain w-full" src="https://www.keeeper.com/wp-content/uploads/2019/05/Headerbild-Kidsparty-1200x800.jpg" alt="" />
                        </div>

                    </div>
                </div>

                <div>
                    <div className="flex flex-col md:flex-row justify-between w-full h-96 md:h-72 lg:h-96 bg-blue-400">

                        <div className="w-full flex flex-col justify-center items-center md:w-1/2 h-72 md:h-full bg-gradient-to-r from-green-400 to-blue-500">
                            <h1 className="text-white text-2xl md:text-4xl text-bold">We are Skilled</h1>
                            <p className="text-white text-lg md:text-2xl p-2">We provide services that our clients praise</p>
                        </div>

                        <div className="w-full md:w-1/2 md:h-full">
                            <img className="object-contain w-full" src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        </div>

                    </div>
                </div>
                
                <div>
                    <div className="flex flex-col md:flex-row justify-between w-full h-96 md:h-72 lg:h-96 bg-blue-400">

                        <div className="w-full flex flex-col justify-center items-center md:w-1/2 h-72 md:h-full bg-gradient-to-r from-red-500">
                            <h1 className="text-white text-2xl md:text-4xl text-bold">We are Professional</h1>
                            <p className="text-white text-lg md:text-2xl p-2">We provide services that our clients prase</p>
                        </div>

                        <div className="w-full md:w-1/2 md:h-full">
                            <img className="object-contain w-full" src="https://www.achievers.com/blog/wp-content/uploads/2019/11/11_05_19.jpg" alt="" />
                        </div>

                    </div>
                </div>

                {/* <div>
                    <div className="flex flex-col md:flex-row justify-between w-full h-96 md:h-72 lg:h-96 bg-blue-400">

                        <div className="w-full md:w-1/2 h-48 md:h-full">
                            <h1 className="text-white">We are Loving</h1>
                        </div>

                        <div className="w-full md:w-1/2 md:h-full">
                            <img className="object-contain w-full" src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        </div>

                    </div>
                </div> */}

                {/* <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div> */}

            </Carousel>
        </div>
    );
};

export default Header;