"use client"
import React, { PropTypes, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const ThemeProvider = ({ children }) => {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const [ myClass, setMyClass ] = useState('w-screen')

    useEffect(
        () => {
            setMyClass(`w-screen${ theme ? ' dark' : ''}`)

        },[theme]

    )

    return (
        <div className={myClass}>{children}</div>
    );
};


export default ThemeProvider;
