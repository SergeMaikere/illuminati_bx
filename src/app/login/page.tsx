import React, { PropTypes } from 'react';
import { signIn } from 'next-auth/react'
import Login from '../components/login/Login';

const LoginPage = () => {

    return (
        <Login />        
    );
};

export default LoginPage;
