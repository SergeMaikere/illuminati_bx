import React, { PropTypes } from 'react';
import Link from 'next/Link'

const Footer = ({ className }) => {
    return (
        <div className="lg:flex gap-2 py-10 px-2 border-t border-gray-300">
            <div className="flex gap-2 flex-2">
                <img className="hidden lg:block h-44" src="/illuminati_bx.png" alt="illuminati Bruxelles Logo"/>
                <div>
                    <div className="font-serif text-2xl">
                        <span className="text-sky-700">Illuminati</span>
                        <span className="text-amber-500"> Bruxelles</span>     
                    </div>
                    <div className="text-base font-mono py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex laudantium facere blanditiis accusamus architecto autem rerum perferendis exercitationem odit, doloremque accusantium vitae veritatis, magni iste, ad nobis excepturi nulla!</div>
                    <div className="hidden md:flex flex gap-4">
                        <Link href="/">
                            <img className="h-8" src="/facebook.png" alt="facebook Logo"/>
                        </Link>
                        <Link href="/">
                            <img className="h-8" src="/instagram.png" alt="instagram Logo"/>
                        </Link>
                        <Link href="/">
                            <img className="h-8" src="/twitter.png" alt="twitter Logo"/>
                        </Link>
                        <Link href="/">
                            <img className="h-8" src="/onlyfans.png" alt="onlyfans Logo"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 flex-1">
                <div className="flex flex-col justify-between text-base">
                    <div className="text-xl font-serif">Liens</div>
                    <Link className="block" href="/">Home</Link>
                    <Link className="block" href="/blog">Blog</Link>
                    <Link className="block" href="/about">About</Link>
                    <Link className="block" href="/contact">Contact</Link>
                </div>
                <div className="flex flex-col justify-between text-sm">
                    <div className="text-xl font-serif">Tags</div>
                    <Link className="block" href="/blog/mode">Mode</Link>
                    <Link className="block" href="/blog/science">Science</Link>
                    <Link className="block" href="/blog/enfer">Enfer</Link>
                    <Link className="block" href="/blog/cyprien">Cyprien</Link>
                    <Link className="block" href="/blog/histoire">Histoire</Link>
                    <Link className="block" href="/blog/france">France</Link>
                </div>
                <div className="flex flex-col justify-between text-base">
                    <div className="text-xl font-serif">Social</div>
                    <Link className="block" href="https://www.facebook.com">Facebook</Link>
                    <Link className="block" href="https://www.twitter.com">Twitter</Link>
                    <Link className="block" href="https://www.instagram.com">Instagram</Link>
                    <Link className="block" href="https://www.onlyfans.com">OnlyFSans</Link>
                </div>
                <div className="hidden">
                    Photo by <a href="https://unsplash.com/@dariuszsankowski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dariusz Sankowski</a> on <a href="https://unsplash.com/photos/flat-ray-photography-of-book-pencil-camera-and-with-lens-3OiYMgDKJ6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
