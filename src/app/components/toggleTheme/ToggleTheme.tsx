"use client"
import React, { PropTypes } from 'react';
import { FaSun, FaMoon  } from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const ToggleTheme = ({ className }) => {

    const {theme, toggleTheme} = useContext(ThemeContext) 
    const ball: ReactElement = <div className="w-4 h-4 bg-black dark:bg-white rounded-full"></div>
    return (
        <div onClick={toggleTheme} className="flex justify-between p-1 rounded border-b-2 border-b-gray-800 dark:border-b-gray-100 w-11">
            {theme === 'dark' ? ball : <FaSun className="text-yellow-600"/>}
            {theme === 'dark' ? <FaMoon className="text-yellow-600"/> : ball}
        </div>
    );
};

export default ToggleTheme;

