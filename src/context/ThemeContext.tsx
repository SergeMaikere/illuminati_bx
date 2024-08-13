"use client"
import { Signal } from '@preact/signals-react';
import { createContext, ReactNode, useContext } from 'react';

type ThemeState = { theme: Signal<string> }

type C = { children: ReactNode }

export const ThemeContext = createContext<ThemeState>( {theme: new Signal('false')} )
export const useTheme = () => useContext(ThemeContext)
