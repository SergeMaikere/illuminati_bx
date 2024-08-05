import React, { ReactNode } from 'react';

type Props = {
    type: "submit" | "button" | "reset" | undefined
    handleClick?: Function
    children: ReactNode
}

const Button: React.FC<Props> = ( { type, children, handleClick} ) => {
    return (
        <button 
            type={type} 
            className={`
                border-b border-gray-500 rounded
                text-xl sm:text-lg font-bold font-mono
                p-2 sm:px-3 sm:pt-3 mt-3 md:mt-6
                hover:shadow-lg hover:text-sky-700 hover:bg-amber-500 hover:text-lg
            `}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
