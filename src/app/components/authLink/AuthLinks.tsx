"use client"
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { isAdmin, isLoggedIn, isWriter } from '../../utils/Helper';
import classNames from 'classnames'

const AuthLinks = () => {

    const { data, status } = useSession()
    const [ open, setOpen ] = useState(false)
    const [ isLogged, setIsLogged ] = useState(false)

    useEffect(
        () => {
            setIsLogged(isLoggedIn(status))
        }, [status]
    )

    return (
        <div>
            <div className={classNames({hidden: !isLogged})}>
                <img 
                    className="rounded-full max-h-10 ml-3 cursor-pointer hover:scale-125"
                    onClick={() => setOpen(!open)} 
                    src={data?.user?.image} 
                    alt="Profile picture" />
                <div 
                    className={
                        classNames('flex flex-col gap-1 absolute rounded mt-1 p-2 min-w-40 bg-gray-800 text-gray-200 translate-y-1/4 -translate-x-1/4', {hidden: !open})
                    }
                    onClick={() => setOpen(!open)}
                >
                    <div className="pl-2 rounded border-b border-gray-300 mb-2">{data?.user?.name}</div>
                    <Link className="pl-2 font-mono hover:text-amber-400" href={`/user/${data?.user?.id}`}>Profile</Link>
                    { isAdmin(status, data) &&  <Link className="pl-2 cursor-pointer font-mono hover:text-amber-400" href="/settings">Settings</Link> }
                    { isWriter(status, data) && <Link className="pl-2 cursor-pointer font-mono hover:text-amber-400" href="/write">Write</Link> }
                    <div className="pl-2 cursor-pointer font-mono hover:text-amber-400" onClick={signOut}>Logout</div>
                </div>
            </div>
            <div className={classNames("flex gap-3", {hidden: isLogged})}>
                <Link href="/signup">Sign-Up</Link>
                <Link href="/login">Login</Link>
            </div>
        </div>
    );
};

export default AuthLinks;
