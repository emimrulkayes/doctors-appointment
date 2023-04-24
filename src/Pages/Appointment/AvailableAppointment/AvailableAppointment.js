import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]) 

    useEffect(() => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    }, [])

    let footer = <p>Please select a day.</p>;
    if (selectedDate) {
        footer = <p>You have selected date: {format(selectedDate, 'PP')}.</p>
    }
    
    return (
        <div className='my-20 container mx-auto '>
             <p className='text-lg text-primary font-bold text-center '>{footer}</p>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-10 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                    ></AppointmentOption>)
                }
             </div>
        </div>
    );
};

export default AvailableAppointment;