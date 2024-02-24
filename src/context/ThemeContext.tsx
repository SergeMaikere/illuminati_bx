"use client"

import { createContext, useState } from 'react';

export const ThemeContext: createContext = createContext()

const getFromLocalStorage = () => {
    if ( typeof window === 'undefined' ) return
    return localStorage.getItem('theme') || 'light'
}

export const ThemeContextProvider = ( {children} ): any => {
    const [ theme, setTheme ] = useState( getFromLocalStorage() )
    const toggleTheme = () => {
        setTheme( theme === 'light' ? 'dark' : 'light' )
        localStorage.setItem( 'theme', theme )
    }

    return <ThemeContext.Provider value={ {theme, toggleTheme} }>{children}</ThemeContext.Provider>
}