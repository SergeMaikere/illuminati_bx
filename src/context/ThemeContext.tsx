"use client"
import { createContext, ReactNode, useContext } from 'react';

type ThemeState = {
    theme: string
    setTheme(theme: string): void
}

type C = { children: ReactNode }

export const ThemeContext = createContext<ThemeState>( 
    {
        theme: 'false',
        setTheme: () => {}
    } 
)

export const useTheme = () => useContext(ThemeContext)
