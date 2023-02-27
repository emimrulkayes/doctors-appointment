import React from 'react';
import chair from '../../../assets/images/chair.png';


const Banner = () => {
    return (
        <div>
            <div className="hero py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className=" w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-1/2'>
                        <h1 className="text-5xl text-black font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6 text-slate-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn btn-primary text-white">GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    ); 
};


export default Banner;