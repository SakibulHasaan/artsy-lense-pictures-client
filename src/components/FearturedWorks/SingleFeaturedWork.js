import React from 'react';

const SingleFeaturedWork = ({ feature }) => {
    return (
        <div className="w-full px-8 pt-8 shadow bg-gray-50 h-full">
            <div className="h-2/3 overflow-hidden">
                <img className=" object-cover w-full h-full transition duration-1000 transform hover:scale-125" src={feature.image} alt="" />
            </div>
            <div className="w-full mt-3 ">
                <h2 className="font-semibold text-2xl mb-2">{feature.title}</h2>
                <p>{feature.description}</p>
            </div>
        </div>
    );
};

export default SingleFeaturedWork;