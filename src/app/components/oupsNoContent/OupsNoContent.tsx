import React, { PropTypes } from 'react';
import { router } from 'next/navigation'

const   OupsNoContent = ({ className }) => {

    const backHome = () => router.push('http://localhost:3000/')
    const myApologies = () => router.push('http://localhost:3000/mes_excuses')

    return (
        <div className="lg:grid lg:grid-cols-5 gap-3 items-stretch mb-6 max-w-2xl p-3 border-b rounded border-gray-300 shadow-md">
            <img className="p-1 hidden lg:block object-cover col-span-2" src="britney-spears-oops.jpg" alt="Britney Spears in a red leather catsuit"/>
            <div className="lg:col-span-3">
                <h3 className="mb-2">
                    <span className="text-xl font-bold font-serif">Oups...ben du coup on a rien écrit.</span>
                    <span className="text-gray-600 font-mono">Faut dire quand même que Gégé l'a pas mis dans l'agenda</span>
                </h3>
                <p className="text-base text-light font-mono">Et vu que j'avais piscine en fait, pile au moment ou l'Interne va interiewer Baphomet, mais la grand maman à Didier elle se sent pas bien...voilà.</p>
                <div>
                    <Button handleClick={myApologies} buttonText="Read More"/>
                    <Button handleClick={backHome} buttonText="Accueil"/>
                </div>
            </div>
        </div>
    );
};

export default  OupsNoContent;
