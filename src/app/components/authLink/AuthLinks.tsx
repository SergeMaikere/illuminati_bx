"use client"
import Link from 'next/Link'
import { useSession, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { isAdmin, isLoggedIn, voyeur } from '../../utils/Helper';

const AuthLinks = ({ className }) => {

    const { data, status } = useSession()
    const [ open, setOpen ] = useState(false)
    const [ menuClass, setMenuClass ] = useState('hidden')

    const loggedIn = (
        <div className="">
            { isAdmin(status, data) && <Link href="/write">Write</Link> } 
            <img 
            className="absolute top-7 right-24 rounded-full max-h-10 ml-3 cursor-pointer hover:scale-125 translate-y-"
            onClick={() => setOpen(!open)} 
            src={data?.user?.image} 
            alt="Profile picture" />
            <div className={menuClass}>
                <div className="rounded border-b border-gray-300 mb-2">{data?.user?.name}</div>
                <Link className="font-mono hover:text-amber-400" href="/user/id">Profile</Link>
                <div className="cursor-pointer font-mono hover:text-amber-400" onClick={signOut}>Logout</div>
            </div>
        </div>
    )

    useEffect(
        () => {
            setMenuClass(`${open ? '' : 'hidden'} flex flex-col gap-1 absolute rounded mt-1 p-2 bg-gray-800 text-gray-200 translate-y-1/4 -translate-x-1/4`)
        },[open]
    )

    return (
        isLoggedIn(status) ? loggedIn : <Link href="/login">Login</Link>
    );
};

export default AuthLinks;
