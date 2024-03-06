import React, { PropTypes } from 'react';

const Button = (props) => {
    return (
        <button className={`
            border-b 
            border-gray-500 
            rounded 
            p-2 mt-5
            hover:shadow-lg hover:text-red-500 hover:bg-black hover:text-lg
        `}>{props.buttonText}</button>
    );
};

export default Button;
