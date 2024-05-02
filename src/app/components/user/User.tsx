"use client"
import React, { PropTypes, useEffect, useState } from 'react';
import { CiImageOn } from 'react-icons/ci';
import Button from '../button/Button';
import { voyeur } from '../../utils/Helper';
import { isSameString } from '../../utils/Validation';
import classNames from 'classnames'

const User = (props) => {

    const [ valid, setValid ] = useState(true)
    const [ pswd1, setPswd1 ] = useState('')
    const [ pswd2, setPswd2 ] = useState('')

    useEffect( () => setValid(isSameString(pswd1, pswd2)), [pswd2] )

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        props.handleSubmit(formData)
    }

    return (
        <div className='flex items-center justify-center gap-4'>
            <form onSubmit={e => handleSubmit(e)} className="flex flex-col w-10/12 gap-3 md:gap-6 md:w-2/3">
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
                    minLength="8" 
                    placeholder="Mot de passe béton"
                    required/>
                <div className={classNames("bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3", {hidden: valid})} role="alert">
                    <p className="font-bold">Informational message</p>
                    <p className="text-sm">Some additional text to explain said message.</p>
                </div>
                <input 
                    className="bg-transparent font-serif text-2xl md:text-4xl w-full px-6 pt-6 pb-3 border-b border-gray-400 focus:outline-gray-400" 
                    type="password"
                    value={pswd2}
                    onChange={e => setPswd2(e.target.value)}
                    minLength="8" 
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
