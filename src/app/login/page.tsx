import React, { PropTypes } from 'react';
import { signIn } from 'next-auth/react'
import Login from '../components/login/Login';

const LoginPage = ({ className }) => {

    const handleSubmit = async e => {
        "use server"
        e.preventDefault()
        const  formData = new FormData(e.target)
        const res = await signIn(
            'credentials', 
            {
                redirect: false,
                email: formData.email,
                password: formData.password
            }
        )
        console.log(res)
    }

    return (
        <Login handleSubmit={handleSubmit} />        
    );
};

export default LoginPage;
