"use client"

import { createContext, useState } from 'react';

export const ThemeContext: createContext = createContext()

const getFromLocalStorage = () => {
    if ( typeof window === 'undefined' ) return
    return localStorage.getItem('theme') || false
}

export const ThemeContextProvider = ( {children} ): any => {
    const [ theme, setTheme ] = useState( getFromLocalStorage() )
    return <ThemeContext.Provider value={ {theme, setTheme} }>{children}</ThemeContext.Provider>
}