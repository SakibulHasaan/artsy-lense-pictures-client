import React from 'react';
import SingleFeaturedWork from './SingleFeaturedWork';

const Features = [
    {
        title: 'Pan Pacific Shonargaon Hotel',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, labore.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/14/f9/37/f8/lobby-lounge.jpg',
    },
    {
        title: 'Street Child Campaign',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, labore.',
        image: 'https://cdn1.matadornetwork.com/blogs/1/2008/07/Group-of-smiling-children-in-rural-India-560x420.jpg',
    },

    {
        title: "S & R Wedding",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, labore.',
        image: 'https://www.specialevents.com/sites/specialevents.com/files/Indian_Wedding_Hands_2019_0.jpg',
    }
]

const FeaturedWorks = () => {
    return (
        <div id="feature" className="bg-white mb-2 py-16">
            <div className="container ">
                <div className="p-2">
                    <h1 className="text-black font-bold text-4xl text-center">Featured Work</h1>
                    <p className="text-black text-lg text-bold text-center tracking-widest"> WORK TO TAKE A LOOK AT </p>
                    <hr />
                </div>
                <div className="grid grid-cols-12 gap-5 pt-5 w-full">
                    {
                        Features.map((feature, index) => <div className="col-span-12 md:col-span-4 ="><SingleFeaturedWork feature={feature} /></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedWorks;