"use client"
import React, { PropTypes, useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { isLoading, isLoggedIn } from '../utils/Helper';
import Loading from '../components/loading/Loading';

const LoginPage = ({ className }) => {

    const login = (
        <div className={`
            flex flex-col gap-3
            mx-auto my-24
            w-fit p-6 md:py-6 md:px-24 rounded border-y border-gray-400
        `}>
            <button 
                type="button" 
                onClick={() => signIn("facebook")}
                className={`
                    hover:shadow-lg hover:border-b hover:border-[#4267B2] hover:bg-gray-100 hover:text-[#4267B2]
                    text-3xl font-serif rounded py-3 px-12 text-gray-100 bg-[#4267B2]
                `}>Facebook</button>
            <button 
                type="button" 
                onClick={() => signIn("github")}
                className={`
                    hover:shadow-lg hover:border-b hover:border-black hover:bg-gray-100 hover:text-black text-3xl
                    font-serif rounded py-3 px-12 text-gray-100 bg-black
                `}>GitHub</button>
            <button 
                type="button" 
                onClick={() => signIn("google")}
                className={`
                    hover:shadow-lg hover:border-b hover:border-[#DB4437] hover:bg-gray-100 hover:text-[#DB4437]
                    text-3xl font-serif rounded py-3 px-12 text-gray-100 bg-[#DB4437]
                `}>Google</button>
            <button 
                type="button" 
                className={`
                    hover:shadow-lg hover:border-b hover:border-sky-500 hover:bg-gray-100 hover:text-amber-400
                    text-3xl font-serif rounded py-3 px-12 text-sky-500 bg-amber-400
                `}>Illuminati</button>
        </div>
    )
    const { data, status } = useSession()
    const [render, setRender] = useState(login)
    console.log(data, status)
    const router = useRouter()
    
    useEffect(
        () => {
            if ( isLoading(status) ) setRender(<Loading/>)
            if ( isLoggedIn(status) ) router.push('/')
            if ( !isLoggedIn(status) ) setRender(login)
        }, [status]
    )

    return (render);
};

export default LoginPage;
