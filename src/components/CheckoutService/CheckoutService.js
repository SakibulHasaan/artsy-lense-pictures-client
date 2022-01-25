import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchServices } from '../../actions/services';
const CheckoutService = () => {
    // @ts-ignore
    const { id } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        (async function () {
            let ser = await fetchServices()
            setServices(ser)
            console.table(ser);
        })();
    }, []);
    const { title, description, price, image, _id } = services.find(s => s._id == id);
    return (
        <div className="container">
            <div className="flex flex-col mx-auto">
                <div className="w-full md:w-1/2 h-48 md:h-96">
                    <img className="object-cover w-full h-full" src={image} alt={title} />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-bold text-2xl">{title}</h1>
                    <p className="text-semibold text-lg">{price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="bg-transparent hover:bg-blue-400 text-blue-600 font-semibold hover:text-white  py-2 px-5 border border-blue-500 hover:border-transparent rounded-xs">
                            Buy Now
                        </button>
                    </Link>
                    <p>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque iure sequi reprehenderit suscipit explicabo impedit sit nam. Optio, facere dignissimos. Beatae qui debitis saepe cupiditate corrupti impedit tempora laborum labore, molestiae recusandae aliquid totam nulla assumenda asperiores quidem ducimus, ullam in voluptatibus! Laudantium delectus corporis similique, beatae laboriosam rerum.</p>
                </div>

            </div>
        </div>
    );
};

export default CheckoutService;