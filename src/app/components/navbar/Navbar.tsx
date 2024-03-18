"use client"

import { useState } from 'react';
import Link from 'next/Link'
import { FaSquareFacebook, FaSquareXTwitter, FaSquareYoutube  } from "react-icons/fa6";
import AuthLinks from '../authLink/AuthLinks';
import ToggleTheme from '../toggleTheme/ToggleTheme';

const Navbar = ({ className }) => {

    const [ open, setOpen ] = useState( false )

    return (
        <div className="flex items-center px-2 py-3 mb-2 border-b border-gray-300 h-24 font-serif">

            {/*Hidden responsive theme button*/}
            <div className="sm:hidden block flex-1">
                <ToggleTheme/>
            </div>

            <div className="hidden md:flex md:gap-4 flex-1">
                <Link href="/">
                    <img className="h-10" src="/facebook.png" alt="facebook link"/>
                </Link>
                <Link href="/">
                    <img className="h-10" src="/instagram.png" alt="instagram link"/>
                </Link>
                <Link href="/">
                    <img className="h-10" src="/twitter.png" alt="twitter link"/>
                </Link>
                <Link href="/">
                    <img className="h-10" src="/onlyfans.png" alt="onlyfans link"/>
                </Link>
            </div>

            <div className="flex items-center flex-1 gap-1 text-xl">
                <span className="hidden md:block text-sky-700">Illuminati</span>
                <img className="h-20" src="/illuminati_bx.png" alt="Illuminati Brussels logo" />
                <span className="hidden md:block text-amber-500">Bruxelles</span>
            </div>

            <div className="hidden sm:flex gap-4 flex-1">
                <ToggleTheme className="hidden sm:block"/>
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
                <AuthLinks/>
            </div>

            {/*Responsive Button*/}
            <div onClick={() => setOpen(!open)} className={`
                flex flex-col justify-around sm:hidden border p-1
                dark:border-gray-100 border-gray-900
            `}>
                <div className="border dark:border-gray-100 border-gray-900 mb-0.5 w-4"></div>
                <div className="border dark:border-gray-100 border-gray-900 mb-0.5 w-4"></div>
                <div className="border dark:border-gray-100 border-gray-900 w-4"></div>
            </div>

            {/*Responsive Menu*/}
            <div className={`
                ${!open ? 'hidden' : 'flex'} flex-col justify-around
                top-[3rem] left-0 w-screen h-[calc(100%-3rem)] absolute
                bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-2xl text-center 
            `}>
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
                <AuthLinks/>
            </div>

        </div>
    );
};

export default Navbar;
