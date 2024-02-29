import React, { PropTypes } from 'react';

const Featured = ({ className }) => {
    return (
        <div className="mt-10 pb-24 border-b border-gray-300">
            <h1 className="mb-4 font-serif">
                <span className="font-bold text-4xl md:text-6xl">Les Illuminés de Bruxelles </span> 
                <span className="text-4xl md:text-6xl"> seraient en guet-à-pinte depuis 1830!</span>
            </h1>
            <div className="md:flex gap-8">
                <div className="flex-1">
                    <img src="illumines_de_bx.jpg" alt="Painting of victorians wine tasting" />
                </div>
                <div className="flex-1 pt-12">
                    <h2 className="font-mono mb-4">
                        <span className="text-3xl md:text-4xl font-bold">Rumeurs ou vérité ? </span>
                        <span className="text-2xl md:text-3xl">Père la Conspi vous dis tout...</span>
                    </h2>
                    <p className="font-mono text-base">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi voluptate, voluptates sunt odit rerum maxime explicabo natus nam dolor iusto ullam quia assumenda rem doloremque exercitationem dicta inventore. Quod.
                    </p>  
                    <button className="border border-gray-800 rounded p-2 mt-5">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
