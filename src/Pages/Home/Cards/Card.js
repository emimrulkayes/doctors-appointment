import React from 'react';


const Card = ({card}) => {
    const {name, description, icon, bgClass } = card;
    return (
        <div>
            <div className={`card card-side bg-base-100 shadow-xl border-blue-300 border-2 p-4 flex ${bgClass}`}>
                <figure>
                    <img src={icon} className='w-12' alt="Icon"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p> {description} </p>
                </div>
            </div>
        </div>
    );
};

export default Card;