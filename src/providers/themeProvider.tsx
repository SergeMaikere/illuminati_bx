"use client"
import React, { ReactNode, useState } from 'react';
import classNames from 'classnames'
import { ThemeContext } from '../context/ThemeContext';

type C = { children: ReactNode }

const getFromLocalStorage = (): string => {
    if ( typeof window === 'undefined' ) return 'false'
    return localStorage.getItem('theme') || 'false'
}

export const ThemeProvider = ( {children}: C ) => {
    const [ theme, setTheme ] = useState<string>( getFromLocalStorage() )
    
    return (
        <ThemeContext.Provider value={ { theme, setTheme } }>
            <div className={classNames('w-screen', {dark: theme === 'true'}) }>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
