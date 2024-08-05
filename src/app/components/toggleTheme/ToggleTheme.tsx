"use client"
import React, { useEffect } from 'react';
import { FaSun, FaMoon  } from "react-icons/fa";
import { useTheme } from '../../../context/ThemeContext';
import classNames from 'classnames'

const ToggleTheme = () => {

    const {theme, setTheme} = useTheme()
    
    useEffect(
        () => {
            localStorage.setItem('theme', theme )
        },[theme]
    )

    return (
        <div 
        onClick={e => setTheme(theme === 'true' ? 'false' : 'true')} 
        className={`
            flex items-center justify-around
            rounded-2xl border-b border-gray-400 dark:border-gray-100 
            w-12 p-0.5
        `}>
            <FaSun className={classNames('text-amber-500 w-4 h-4', {hidden: theme === 'false'})}/>
            <div className=" w-4 h-4 bg-sky-700 rounded-full"></div>
            <FaMoon className={classNames('text-amber-500 w-4 h-4', {hidden: theme === 'true'})}/>
        </div>
    );
};

export default ToggleTheme;

