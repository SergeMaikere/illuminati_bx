"use client"
import React, { PropTypes, useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import classNames from 'classnames'

const ThemeProvider = ({ children }) => {

    const { theme } = useContext(ThemeContext)
    const [ myClass, setMyClass ] = useState('w-screen')

    return (
        <div className={classNames('w-screen', {dark: theme}) }>{children}</div>
    );
};


export default ThemeProvider;
