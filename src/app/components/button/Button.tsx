import React, { PropTypes } from 'react';

const Button = (props) => {
    return (
        <button type={props.type} className={`
            border-b border-gray-500 rounded
            text-lg sm:text-base
            p-2 sm:px-3 sm:pt-3 mt-3 md:mt-6
            hover:shadow-lg hover:text-sky-700 hover:bg-amber-500 hover:text-lg
        `}
        onClick={props.handleClick}>{props.buttonText}</button>
    );
};

export default Button;
