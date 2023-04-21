import React from 'react';
import Service from './Service';
import dental from '../../../assets/images/dental.png';
import cavity from '../../../assets/images/cavity.png';
import theeth from '../../../assets/images/theeth.png';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            title: 'Dental Veneers!',
            description: 'Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile.',
            img: dental,
            bgClass: 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
        {
            id: 2,
            title: 'Cosmetic Fillings!',
            description: 'Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile.',
            img: cavity,
            bgClass: 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
        {
            id: 3,
            title: 'Dental Bonding!',
            description: 'Dental bonding is a technique used to correct imperfections with your teeth to give you a better-looking smile.',
            img: theeth,
            bgClass: 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
    ]

    return (

        <div className=' container mx-auto pt-10 pb-20 '>
            <h2 className='text-4xl font-bold text-center mb-8 text-green-500'>Our Services</h2>
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <Service
                        key = {service.id}
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;