import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary text-white bg-gradient-to-r from-violet-500 to-fuchsia-500"> {children} </button> 
    );
};

export default PrimaryButton;