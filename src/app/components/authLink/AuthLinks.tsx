"use client"
import Link from 'next/Link'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react';
import { isAdmin, isLoggedIn } from '../../utils/Helper';

const AuthLinks = ({ className }) => {

    const { data, status } = useSession()

    return (
        isLoggedIn(status) ? <>{isAdmin(status, data) && <Link href="/write">Write</Link>}<button type="button" onClick={signOut}>Logout</button></> : <Link href="/login">Login</Link>
    );
};

export default AuthLinks;
