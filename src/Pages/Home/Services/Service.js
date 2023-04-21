import React from 'react';

const Service = ({service }) => {

    const  { img, title, description, bgClass } = service;

    return (
        <div className={`card shadow-xl ${bgClass}`}>
            <figure>
                <img src={img} className='w-60 pt-8' alt="Images" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p> {description} </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Service;