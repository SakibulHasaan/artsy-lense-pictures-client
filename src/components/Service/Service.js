import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import { Skeleton } from 'antd';
import { fetchServices } from '../../actions/services';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        (async function () {
            let ser = await fetchServices()
            setServices(ser)
            console.table(ser);
        })();
    }, []);
    return (
        <div id="services" className="py-16 bg-gray-50">
            <div className="container mx-auto bg-gray-50 md:px-10">
                <h2 className="font-bold text-4xl text-center">Our Services</h2>
                <div className="grid grid-cols-12 gap-7 w-full pt-5 ">
                    {
                        services ?
                            services.map((service, index) => <div className="col-span-12 sm:col-span-6 md:col-span-4 "><SingleService key={index} service={service} /></div>)
                            : <Skeleton active loading={true} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;