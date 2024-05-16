"use client"
import { useState } from 'react';
import Link from 'next/Link'
import { FaSquareFacebook, FaSquareXTwitter, FaSquareYoutube  } from "react-icons/fa6";
import AuthLinks from '../authLink/AuthLinks';
import ToggleTheme from '../toggleTheme/ToggleTheme';
import classNames from 'classnames'

const Navbar = ({ className }) => {

    const [ open, setOpen ] = useState( false )

    return (
        <div className="flex items-center justify-between px-2 py-3 mb-2 border-b border-gray-300 h-24 font-serif w-ful">

            {/*Hidden responsive theme button*/}
            <div className="sm:hidden block ml-3">
                <ToggleTheme/>
            </div>

            <div className="hidden md:flex md:gap-4">
                <Link href="/">
                    <img className="h-8 lg:h-9" src="/facebook.png" alt="facebook link"/>
                </Link>
                <Link href="/">
                    <img className="h-8 lg:h-9" src="/instagram.png" alt="instagram link"/>
                </Link>
                <Link href="/">
                    <img className="h-8 lg:h-9" src="/twitter.png" alt="twitter link"/>
                </Link>
                <Link href="/">
                    <img className="h-8 lg:h-9" src="/onlyfans.png" alt="onlyfans link"/>
                </Link>
            </div>

            <div className="flex items-center gap-1 text-xl">
                <span className="hidden lg:block text-sky-700">Illuminati</span>
                <img className="h-20" src="/illuminati_bx.png" alt="Illuminati Brussels logo" />
                <span className="hidden lg:block text-amber-500">Bruxelles</span>
            </div>

            <div className="hidden sm:flex">
                <ToggleTheme className="hidden sm:block"/>
            </div>

            
            <div className="hidden sm:flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
            </div>
            
            <AuthLinks/>

            {/*Responsive Button*/}
            <div onClick={() => setOpen(!open)} className={`
                flex flex-col justify-around items-center sm:hidden
                border p-1 mr-3 rounded w-8 h-8
                dark:border-gray-100 border-gray-900
            `}>
                <div className="border dark:border-gray-100 border-gray-900 mb-0.5 w-4"></div>
                <div className="border dark:border-gray-100 border-gray-900 mb-0.5 w-4"></div>
                <div className="border dark:border-gray-100 border-gray-900 w-4"></div>
            </div>

            {/*Responsive Menu*/}
            <div className={classNames(`
                            flex flex-col justify-around
                            top-[3rem] left-0 w-screen h-[calc(100%-3rem)] absolute
                            bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-2xl text-center 
                        `, {hidden: !open})}>
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
                <AuthLinks/>
            </div>

        </div>
    );
};

export default Navbar;
