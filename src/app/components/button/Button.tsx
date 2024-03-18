"use client"
import React, { PropTypes } from 'react';
import { useRouter } from 'next/navigation'

const Button = (props) => {
    const router = useRouter()
    const handleClick = () => router.push(props.id)
    return (
        <button type="button" className={`
            border-b 
            border-gray-500 
            rounded 
            p-2 mt-5
            hover:shadow-lg hover:text-red-500 hover:bg-black hover:text-lg
        `}
        onClick={handleClick}>{props.buttonText}</button>
    );
};

export default Button;
