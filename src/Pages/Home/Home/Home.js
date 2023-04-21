import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div>
            <Banner />
            <Cards />
            <Services />
            <MakeAppointment />
        </div>
    );
};

export default Home;