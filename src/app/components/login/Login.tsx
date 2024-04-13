"use client"
import React, { PropTypes, useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import { isLoading, isLoggedIn } from '../../utils/Helper';
import Button from '../button/Button';
import Loading from '../loading/Loading';

const Login = (props) => {

    const { data, status } = useSession()
    const [render, setRender] = useState(<Loading />)
    console.log(data, status)
    const router = useRouter()
    
    const login = (
        <div className="flex flex-col gap-6 justify-between my-24">
            <div className={`
                flex flex-col gap-3
                mx-auto
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
                    onClick={() => signIn('credentials')} 
                    className={`
                        hover:shadow-lg hover:border-b hover:border-sky-500 hover:bg-gray-100 hover:text-amber-400
                        text-3xl font-serif rounded py-3 px-12 text-sky-500 bg-amber-400
                    `}>Illuminati</button>
            </div>
            <form onSubmit={props.handleSubmit} className='flex flex-col gap-3 mx-auto border-y border-gray-300 p-3'>
                    <div>
                        <label className="font-serif pr-2" htmlFor="email">Votre email:</label>
                        <input 
                        className="bg-transparent font-serif text-lg px-3 pt-3 border-b border-gray-400 focus:outline-gray-400" 
                        id="email"
                        name="email" 
                        type="email" 
                        placeholder="g.soros@nwo.org"
                        required/>
                    </div>
                    <div>
                        <label className="font-serif pr-2" htmlFor="pswd">Votre mot de passe:</label>
                        <input 
                        className="bg-transparent font-serif text-lg px-3 pt-3 border-b border-gray-400 focus:outline-gray-400" 
                        id="pswd"
                        name="password" 
                        type="password" 
                        placeholder="3p5731nD1dn7K1llH1m53lf"
                        required/>
                    <div className="text-center">
                        <Button type="submit" buttonText="Allé zou" />
                    </div>
                </div>
            </form>
        </div>
    )

    return (
        isLoading(status) ? <Loading/> : ( isLoggedIn(status) ? router.push('/') : login )
    );
};

export default Login;
