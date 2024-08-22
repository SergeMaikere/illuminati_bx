"use client"
import React from 'react';
import { FaSun, FaMoon  } from "react-icons/fa";
import classNames from 'classnames'
import { effect } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { theme } from '../../../signals/theme';

const ToggleTheme = () => {
    useSignals()
    
    effect( 
        () => {
            if ( typeof window === 'undefined' ) return
            localStorage.setItem('theme', theme.value)
        }
    )

    const changeTheme = () => {
        console.log('theme', theme.value)
        theme.value = theme.value === 'true' ? 'false' : 'true'
    }

    return (
        <div 
            onClick={changeTheme} 
            className={`
                flex items-center justify-around
                rounded-2xl border-b border-gray-400 dark:border-gray-100 
                w-12 p-0.5 cursor-pointer`
            }
        >   
            <FaSun className={classNames('text-amber-500 w-4 h-4', {hidden: theme.value === 'false'})}/>
            <div className=" w-4 h-4 bg-sky-700 rounded-full"></div>
            <FaMoon className={classNames('text-amber-500 w-4 h-4', {hidden: theme.value === 'true'})}/>
        </div>
    );
};

export default ToggleTheme;

