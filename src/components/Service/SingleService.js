import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    return (
        <div className="p-8 shadow bg-white">
            <div className="h-48">
                <img className="object-cover w-full h-full" src={service.image} alt="" />
            </div>

            <div className="mt-3 py-2">
                <h3 className="font-semibold text-2xl mb-2 ">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
                <p className="text-lg font-semibold">{service.price}</p>
            </div>

            <div className="mt-5">
            <Link to={`/checkout/${service._id}`}>
                    <button className="bg-transparent hover:bg-blue-400 text-blue-600 font-semibold hover:text-white  py-2 px-5 border border-blue-500 hover:border-transparent rounded-xs">
                    Book Now
                </button>
                </Link>
                <Link to={`/view/${service._id}`}>
                    <button className="bg-transparent hover:bg-blue-400 ml-3 text-blue-600 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded-xs">
                        View More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SingleService;