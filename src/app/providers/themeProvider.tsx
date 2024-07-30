"use client"
import React, { ReactNode, useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import classNames from 'classnames'

type C = { children: ReactNode }

const ThemeProvider: React.FC<C> = ({ children }) => {

    const { theme } = useContext(ThemeContext)
    const [ myClass, setMyClass ] = useState('w-screen')

    return (
        <div className={classNames('w-screen', {dark: theme === 'true'}) }>{children}</div>
    );
};


export default ThemeProvider;
