import React from 'react';
import SingleService from './SingleService';
import { Skeleton } from 'antd';


export const services = [
    {
        title: 'Wedding Photography',
        image: "https://www.thestatesman.com/wp-content/uploads/2020/02/QT-O4-9.jpg",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        price: "50$"
    },
    {
        title: 'Wedding Photography',
        image: "https://www.thestatesman.com/wp-content/uploads/2020/02/QT-O4-9.jpg",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        price: "50$"
    },
    {
        title: 'Wedding Photography',
        image: "https://www.thestatesman.com/wp-content/uploads/2020/02/QT-O4-9.jpg",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        price: "50$"
    },
    {
        title: 'Wedding Photography',
        image: "https://www.thestatesman.com/wp-content/uploads/2020/02/QT-O4-9.jpg",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        price: "50$"
    },
    {
        title: 'Wedding Photography',
        image: "https://www.thestatesman.com/wp-content/uploads/2020/02/QT-O4-9.jpg",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        price: "50$"
    },

]

const Service = () => {
    return (
        <div className="container py-16">
            <h2 className="font-bold text-4xl text-center">Our Services</h2>
            <div className="grid grid-cols-12 gap-7 w-full pt-5 bg-gray-50">
                {
                    services ?
                        services.map((service, index) => <div className="col-span-12 sm:col-span-6 md:col-span-4 "><SingleService key={index} service={service} /></div>)
                        : <Skeleton active loading={true} />
                }
            </div>
        </div>
    );
};

export default Service;