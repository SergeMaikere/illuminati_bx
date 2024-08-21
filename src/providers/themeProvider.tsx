"use client"
import React, { ReactNode } from 'react';
import classNames from 'classnames'
import { ThemeContext } from '../context/ThemeContext';
import { signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';


type C = { children: ReactNode }

const getFromLocalStorage = (): string => {
    if ( typeof window === 'undefined' ) return 'false'
    return localStorage.getItem('theme') || 'false'
}

const theme = signal<string>( getFromLocalStorage() )

export const ThemeProvider = ( {children}: C ) => {
    useSignals()
    return (
        <ThemeContext.Provider value={ {theme} }>
            <div className={classNames('w-screen', {dark: theme.value === 'true'}) }>
                {children}
            </div>
        </ThemeContext.Provider>
    )   
}

export default ThemeProvider;
