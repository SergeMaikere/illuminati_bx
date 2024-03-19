"use client"
import React, { PropTypes } from 'react';

const Button = (props) => {
    return (
        <button type="button" className={`
            border-b 
            border-gray-500 
            rounded 
            p-2 mt-5
            hover:shadow-lg hover:text-sky-700 hover:bg-amber-500 hover:text-lg
        `}
        onClick={props.handleClick}>{props.buttonText}</button>
    );
};

export default Button;
