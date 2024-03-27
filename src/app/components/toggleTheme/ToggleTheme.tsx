"use client"
import React, { PropTypes, useEffect, useState } from 'react';
import { FaSun, FaMoon  } from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const ToggleTheme = ({ className }) => {

    const {theme, setTheme} = useContext(ThemeContext)
    const [ sun, setSun ] = useState('hidden text-amber-500 w-3 h-3 md:w-4 md:h-4')
    const [ moon, setMoon ] = useState('text-amber-500 w-3 h-3 md:w-4 md:h-4')

    const ball: ReactElement = () => <div className=" w-3 h-3 md:w-4 md:h-4 bg-sky-700 rounded-full"></div>
    
    const toggleTheme = () => {
        setTheme(!theme)
        localStorage.setItem('theme', theme )
    }

    useEffect(
        () => {

            setSun(`${theme && 'hidden'} text-amber-500 w-3 h-3 md:w-4 md:h-4`)
            setMoon(`${!theme && 'hidden'} text-amber-500 w-3 h-3 md:w-4 md:h-4`)
            
        },[theme]
    )

    return (
        <div onClick={toggleTheme} className={`
            flex items-center justify-around
            rounded-2xl border-b border-gray-400 dark:border-gray-100 
            w-10 md:w-11 xl:w-12
        `}>
            <FaSun className={sun}/>
            <div className=" w-3 h-3 md:w-4 md:h-4 bg-sky-700 rounded-full"></div>
            <FaMoon className={moon}/>
        </div>
    );
};

export default ToggleTheme;

