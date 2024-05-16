"use client"
import React, { PropTypes, useEffect } from 'react';
import { FaSun, FaMoon  } from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import classNames from 'classnames'

const ToggleTheme = () => {

    const {theme, setTheme} = useContext(ThemeContext)
    
    useEffect(
        () => {
            localStorage.setItem('theme', theme )
        },[theme]
    )

    return (
        <div 
        onClick={e => setTheme(!theme)} 
        className={`
            flex items-center justify-around
            rounded-2xl border-b border-gray-400 dark:border-gray-100 
            w-12 p-0.5
        `}>
            <FaSun className={classNames('text-amber-500 w-4 h-4', {hidden: theme})}/>
            <div className=" w-4 h-4 bg-sky-700 rounded-full"></div>
            <FaMoon className={classNames('text-amber-500 w-4 h-4', {hidden: !theme})}/>
        </div>
    );
};

export default ToggleTheme;

