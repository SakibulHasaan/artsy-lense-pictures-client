import React from 'react';

const SingleService = ({service}) => {
    return (
        <div>
            <div>
                <img src={service.image} alt="" />
            </div>

            <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p>{service.price}</p>
            </div>

            <div>
                <button>View More</button>
                <button>Buy Now</button>
            </div>
        </div>
    );
};

export default SingleService;