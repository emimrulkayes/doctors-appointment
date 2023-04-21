import React from 'react';
import doctor from '../../../assets/images/doctor.png';

const MakeAppointment = () => {
    return (
        <section className='pb-20'>
            <div className="hero min-h-screen bg-slate-200	">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="lg:w-1/2 rounded-lg shadow-2xl" alt="img" />
                    <div className='lg:w-1/2'>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-5xl font-bold text-black">Make Appointment Today.</h1>
                        <p className="py-6 text-slate-500">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;