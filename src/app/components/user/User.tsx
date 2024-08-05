"use client"
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { CiImageOn } from 'react-icons/ci';
import { isSameString } from '../../utils/Validation';
import classNames from 'classnames'

type T = Record<'name' | 'email' | 'password' | 'password2', {value: string}> & {image: {files: File[]} | undefined}

const User = ( {handleSubmit}: {handleSubmit: Function} ) => {

    const [ valid, setValid ] = useState(true)
    const [ pswd1, setPswd1 ] = useState('')
    const [ pswd2, setPswd2 ] = useState('')
    const router = useRouter()

    useEffect( () => setValid(isSameString(pswd1, pswd2)), [pswd2] )

    const handleUserSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        const target =  e.target as typeof e.target & T
        const newUser = {
            name: target.name.value,
            email: target.email.value,
            password: target.password.value,
            image: target.image?.files[0]
        }
        console.log(newUser)
        handleSubmit(newUser) 
        router.push('/')

    }

    return (
        <div className='flex items-center justify-center gap-4'>
            <form onSubmit={e => handleUserSubmit(e)} className="flex flex-col w-10/12 gap-3 md:gap-6 md:w-2/3">
                <input 
                    className="bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    name="name"
                    type="text" 
                    placeholder="Ton petit nom..."
                    required/>
                <input 
                    className="bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    name="email"
                    type="email" 
                    placeholder="Ton email..."
                    required/>
                <input 
                    className="bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    name="password"
                    type="password"
                    value={pswd1}
                    onChange={e => setPswd1(e.target.value)}
                    minLength={8} 
                    placeholder="Mot de passe béton"
                    required/>

                <div className={classNames("bg-orange-100 border-t border-b border-orange-500 text-orange-700 px-4 py-3", {hidden: valid})} role="alert">
                    <p className="font-bold font-serif">N'oublie jamais</p>
                    <p className="text-sm font-mono">L'idée c'est que les 2 mots de passe soient identiques</p>
                </div>

                <input 
                    className="bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="password"
                    name="password2"
                    value={pswd2}
                    onChange={e => setPswd2(e.target.value)}
                    minLength={8} 
                    placeholder="Retour du Mot de Passe Béton"
                    required/>
                <input 
                    id="image"
                    className="hidden" 
                    name="image"
                    type="file" />
                <label className="flex items-center" htmlFor="image">
                    <div className="text-2xl md:text-4xl text-gray-400 font-serif px-6">Ta bouille sympa 👉</div>
                    <CiImageOn className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 hover:cursor-pointer"/>
                </label>
                <button 
                    className={`
                    font-mono text-2xl 
                    w-fit p-3 ml-6
                    border border-gray-900 hover:border-red-400 rounded
                    hover:scale-110 hover:text-red-800`} 
                    type="submit">C'est Parti!</button>
            </form>
            <div className="hidden md:block w-1/2 border border-gray-900 p-2 rounded">
                <img src="http://localhost:3000/soul_contract.jpg" alt="Soul contract form"/>
            </div>
        </div>
    );
};

export default User;
