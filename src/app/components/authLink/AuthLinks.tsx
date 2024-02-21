"use client"
import Link from 'next/Link'
import { useState } from 'react';

const AuthLinks = ({ className }) => {

    let [auth, setAuth] = useState(false)

    return (
        auth ? <><Link href="/write">Write</Link><span>Logout</span></> : <Link href="/login">Login</Link>
    );
};

export default AuthLinks;
