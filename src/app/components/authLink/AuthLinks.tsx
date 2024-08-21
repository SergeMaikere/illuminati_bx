"use client"
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react';
import { isAdmin, isLoggedIn, isWriter } from '../../../utils/Helper';
import classNames from 'classnames'
import { signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';

const open = signal<boolean>(false)
const isLogged = signal<boolean>(false)

const AuthLinks = () => {
    useSignals()

    const { data, status } = useSession()

    useEffect( 
        () => {
            isLogged.value = isLoggedIn(status)
        }, [status] 
    )

    return (
        <div>
            <div className={classNames({hidden: isLogged.value === false})}>
                <img 
                    className="rounded-full max-h-10 ml-3 cursor-pointer hover:scale-125"
                    onClick={() => open.value = !open.value} 
                    src={data?.user?.image!} 
                    alt="Profile picture" />
                <div 
                    className={
                        classNames(
                            `flex flex-col gap-1 absolute rounded 
                            mt-1 p-2 min-w-40 bg-gray-800 text-gray-200 
                            translate-y-1/4 -translate-x-1/4`, 
                            {hidden: open.value === false}
                        )
                    }
                    onClick={() => open.value = !open.value}
                >
                    <div className="pl-2 rounded border-b border-gray-300 mb-2">{data?.user?.name}</div>
                    <Link className="pl-2 font-mono hover:text-amber-400" href={`/user/${data?.user?.id}`}>Profile</Link>
                    { isAdmin(status, data) &&  <Link className="pl-2 cursor-pointer font-mono hover:text-amber-400" href="/settings">Settings</Link> }
                    { isWriter(status, data) && <Link className="pl-2 cursor-pointer font-mono hover:text-amber-400" href="/write">Write</Link> }
                    <div className="pl-2 cursor-pointer font-mono hover:text-amber-400" onClick={signOut}>Logout</div>
                </div>
            </div>
            <div className={classNames("flex gap-3", {hidden: isLogged.value === true})}>
                <Link href="/signup">Sign-Up</Link>
                <Link href="/login">Login</Link>
            </div>
        </div>
    );
};

export default AuthLinks;
