"use client"
import React, { PropTypes } from 'react';
import { FaSun, FaMoon  } from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const ToggleTheme = ({ className }) => {

    const {theme, setTheme} = useContext(ThemeContext) 
    const ball: ReactElement = () => <div className=" w-3 h-3 md:w-4 md:h-4 bg-sky-700 rounded-full"></div>
    const toggleTheme = () => {
        setTheme(!theme)
        localStorage.setItem('theme', theme )
    }
    return (
        <div onClick={toggleTheme} className={`
            flex items-center justify-around
            rounded-md border border-gray-800 dark:border-gray-100 
            w-10 md:w-11 xl:w-12
        `}>
            {!theme ? ball() : <FaSun className="text-amber-500 w-3 h-3 md:w-4 md:h-4"/>}
            {!theme ? <FaMoon className="text-amber-500 w-3 h-3 md:w-4 md:h-4"/> : ball()}
        </div>
    );
};

export default ToggleTheme;

