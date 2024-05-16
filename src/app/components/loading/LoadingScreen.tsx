import React, { PropTypes } from 'react';

const LoadingScreen = ({ className }) => {
    return (
        <div className="flex justify-center items-center min-h-80">
            <span className={`
                h-12 w-12 box-border border border-gray-400 rounded-full inline-block relative animate-spin 
                after:box-border after:h-6 after:w-0.5 after:bg-red-600 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2
            `}></span>
        </div>
    );
};

export default LoadingScreen;