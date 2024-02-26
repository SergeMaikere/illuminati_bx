"use client"

import { useState } from 'react';
import Link from 'next/link'
import { FaSquareFacebook, FaSquareXTwitter, FaSquareYoutube  } from "react-icons/fa6";
import AuthLinks from '../authLink/AuthLinks';
import ToggleTheme from '../toggleTheme/ToggleTheme';

const Navbar = ({ className }) => {

    const [ open, setOpen ] = useState( false )

    return (
        <div className={`flex items-center px-2 py-3 mb-2 border-b border-amber-500 h-16`}>

            {/*Hidden responsive theme button*/}
            <div className="sm:hidden block flex-1">
                <ToggleTheme/>
            </div>

            <div className="hidden md:flex flex-1">
                <Link href="/">
                    <img className="max-w-10" src="./facebook.png" alt="facebook link"/>
                </Link>
                <Link href="/">
                    <img className="max-w-10" src="./instagram.png" alt="instagram link"/>
                </Link>
                <Link href="/">
                    <img className="max-w-10 h-[40px]" src="./twitter.png" alt="twitter link"/>
                </Link>
            </div>

            <div className="flex items-center flex-1 gap-2">
                <span className="hidden md:block">Illuminati</span>
                <img className="w-[60px] h-[60px]" src="./illuminati_bx.png" alt="Illuminati Brussels logo" />
                <span className="hidden md:block">Bruxelles</span>
            </div>

            <div className="hidden sm:flex gap-2 flex-1">
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
