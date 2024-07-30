"use client"
import React, { createContext, ReactNode, useState } from 'react';

type ThemeState = {
    theme: string
    setTheme(theme: string): void
}

type C = { children: ReactNode }

export const ThemeContext = createContext<ThemeState | null>(null)

const getFromLocalStorage = (): string => {
    if ( typeof window === 'undefined' ) return 'false'
    return localStorage.getItem('theme') || 'false'
}

export const ThemeContextProvider = ( {children}: C ) => {
    const [ theme, setTheme ] = useState( getFromLocalStorage() )
    return <ThemeContext.Provider value={ {theme, setTheme} }>{children}</ThemeContext.Provider>
}