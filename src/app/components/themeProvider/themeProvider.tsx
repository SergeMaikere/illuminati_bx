"use client"
import React, { PropTypes, useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const ThemeProvider = ({ children }) => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={`w-screen${theme === 'dark' ? ' dark' : ''}`}>{children}</div>
    );
};


export default ThemeProvider;
