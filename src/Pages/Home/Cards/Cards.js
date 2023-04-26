import React from 'react';
import Card from './Card';
import time from '../../../assets/icons/time.png';
import location from '../../../assets/icons/location.png';
import dial from '../../../assets/icons/dial.png';

const Cards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 8.00am to 4.00pm everyday.',
            icon: time,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 8.00am to 4.00pm everyday.',
            icon: location,
            bgClass: 'bg-gradient-to-r from-violet-500 to-fuchsia-500'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 8.00am to 4.00pm everyday.',
            icon: dial,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
    ]

    return (
        
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 py-20 container mx-auto lg:grid-cols-3'>
            {
                cardData.map(card => <Card
                    key = { card.id }
                    card = { card }
                ></Card>)
            }
        </div>
    );
};

export default Cards;