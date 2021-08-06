import React from 'react';
import SingleService from './SingleService';
import { Skeleton } from 'antd';


export const services = [
    {
        title: 'Wedding Photography',
        image: "https://www.thestatesman.com/wp-content/uploads/2020/02/QT-O4-9.jpg",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        Price: "50$"
    },
    {
        title: 'Wedding Photography',
        image: "https://www.thestatesman.com/wp-content/uploads/2020/02/QT-O4-9.jpg",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        Price: "50$"
    },
    {
        title: 'Wedding Photography',
        image: "https://www.thestatesman.com/wp-content/uploads/2020/02/QT-O4-9.jpg",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        Price: "50$"
    },

]

const Service = () => {
    return (
        <div className="container">
            {
                services && false ?
                    services.map((service, index) => <SingleService key={index} service={service} />)
                        : <Skeleton active loading={true}/>
            }
        </div>
    );
};

export default Service;