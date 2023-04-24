import React from 'react';

const Review = ({review}) => {

    const {name, img, userReview, location} = review;

    return (
        <div className=" card card-side bg-base-100 shadow-xl border-blue-300 border-2 p-4 flex">
            <div className="card-body">
                <p> {userReview} </p>
                <div className="flex items-center content-start mt-4">
                    <figure className="w-24 mask mask-squircle">
                        <img src={img} alt='Profile' />
                    </figure>
                    <div className='ml-4 place-content-center'>
                        <h5 className='text-lg font-bold'>{name}</h5>
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;