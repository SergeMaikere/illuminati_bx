import React, { PropTypes } from 'react';
import Link from 'next/Link'
import Button from '../button/Button';

const   OupsNoContent = ({ className }) => {

    return (
        <div className="lg:grid lg:grid-cols-5 gap-3 items-stretch mb-6 max-w-2xl p-3 border-b rounded border-gray-300 shadow-md">
            <div className="lg:col-span-3">
                <div className="mb-2">
                    <span className="text-4xl font-bold font-serif">Oups...aïe, Didier Aguain...</span>
                    <span className="text-3xl text-gray-600 font-serif"> l'a pas mis dans l'agenda...</span>
                </div>
                <p className="text-lg text-light font-mono">et vu que j'avais piscine en fait, pile au moment ou l'Interne doit interviewer Baphomet, tu vois, vla dis pas que la grand mère à Viviane elle se sent pas bien...du coup on a rien écrit.</p>
                <div className="flex justify-around">
                    <Link href="http://lolcalhost:3000/">
                        <Button buttonText="Accueil"/>
                    </Link>
                    <Link href="http://lolcalhost:3000/mes_excuses">
                        <Button buttonText="Encore plus d'excuses"/>
                    </Link>
                </div>
            </div>
            <img className="p-1 hidden lg:block object-cover col-span-2" src="/britney-spears-oops.jpg" alt="Britney Spears in a red leather catsuit"/>
        </div>
    );
};

export default  OupsNoContent;
