import React, { PropTypes } from 'react';

const LoginPage = ({ className }) => {
    return (
        <div className={`
            flex flex-col gap-3
            mx-auto my-24
            w-fit p-6 md:py-6 md:px-24 rounded border-y border-gray-400
        `}>
            <button 
                type="button" 
                className={`
                    hover:shadow-lg hover:border-b hover:border-[#4267B2] hover:bg-gray-100 hover:text-[#4267B2]
                    text-3xl font-serif rounded py-3 px-12 text-gray-100 bg-[#4267B2]
                `}>Facebook</button>
            <button 
                type="button" 
                className={`
                    hover:shadow-lg hover:border-b hover:border-black hover:bg-gray-100 hover:text-black text-3xl
                    font-serif rounded py-3 px-12 text-gray-100 bg-black
                `}>GitHub</button>
            <button 
                type="button" 
                className={`
                    hover:shadow-lg hover:border-b hover:border-[#DB4437] hover:bg-gray-100 hover:text-[#DB4437]
                    text-3xl font-serif rounded py-3 px-12 text-gray-100 bg-[#DB4437]
                `}>Google</button>
            <button 
                type="button" 
                className={`
                    hover:shadow-lg hover:border-b hover:border-sky-500 hover:bg-gray-100 hover:text-amber-400
                    text-3xl font-serif rounded py-3 px-12 text-sky-500 bg-amber-400
                `}>Illuminati</button>
        </div>
    );
};

export default LoginPage;
