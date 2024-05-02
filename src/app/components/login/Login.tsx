"use client"
import React, { PropTypes, useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import { isLoggedIn } from '../../utils/Helper';
import Button from '../button/Button';

const Login = () => {

    const { data, status } = useSession()
    const [open, setOpen] = useState(true)
    const router = useRouter()
    console.log(data, status)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const cred = [ ...formData.entries() ].reduce(
            (user, pair) => {
                user[pair[0]] = pair[1]
                return user
            }, {}
        )
        await signIn('credentials', cred )
    }

    useEffect( () => { isLoggedIn(status) && router.push('/') }, [status] )
    
    return (
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
                    onClick={() => setOpen(!open)} 
                    className={`
                        hover:shadow-lg hover:border-b hover:border-sky-500 hover:bg-gray-100 hover:text-amber-400
                        text-3xl font-serif rounded py-3 px-12 text-sky-500 bg-amber-400
                    `}>Illuminati</button>
            </div>
            <form onSubmit={e => handleSubmit(e)} className={classNames('flex flex-col gap-3 mx-auto border-y border-gray-300 p-3', {hidden: open})}>
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
                        minLength="8"
                        placeholder="3p5731nD1dn7K1llH1m53lf"
                        required/>
                    <div className="text-center">
                        <Button type="submit" buttonText="Allé zou" />
                    </div>
                </div>
            </form>
        </div>
    
    );
};

export default Login;
