import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Cards />
            <Services />
            <MakeAppointment />
            <Testimonial />
        </div>
    );
};

export default Home;