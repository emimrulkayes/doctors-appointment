import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, selectedDate, setTreatment}) => {
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot, 
            email,
            phone,
        }
        setTreatment(null);

        console.log(booking);
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className="form-control w-full mt-3">
                        <input name='date' type="text" disabled value={date}  className="h-12 px-4 rounded-md w-full mt-2 bg-slate-400" />
                        <select name='slot' className="select select-bordered w-full mt-2">
                            {
                                slots.map((slot, i) => <option 
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder='Your name ...' className="input input-bordered w-full mt-2 text-slate-700" required />
                        <input name='email' type="email" placeholder='Your email ...' className="input input-bordered w-full mt-2 text-slate-700" required />
                        <input name='phone' type="text" placeholder='Phone number ...' className="input input-bordered w-full mt-2 text-slate-700" required />
                        <br />
                        <input type="submit" value="Submit" className="btn text-white w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;