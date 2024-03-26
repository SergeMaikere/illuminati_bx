import React, { PropTypes } from 'react';
import Button from '../button/Button';

const Featured = ({ className }) => {
    return (
        <div className="mt-10 pb-12 sm:pb-24 border-b border-gray-300">
            <div className="mb-4 font-serif">
                <span className="font-bold text-4xl md:text-6xl">Les Illuminés de Bruxelles </span> 
                <span className="text-4xl md:text-6xl"> seraient en guet-à-pinte depuis 1830!</span>
            </div>
            <div className="md:flex gap-8">
                <div className="flex-1">
                    <img src="illumines_de_bx.jpg" alt="Painting of victorians wine tasting" />
                </div>
                <div className="flex-1 pt-12">
                    <div className="font-mono mb-4">
                        <span className="text-3xl md:text-4xl font-bold">Rumeurs ou vérité ? </span>
                        <span className="text-2xl md:text-3xl">Père la Conspi vous dis tout...</span>
                    </div>
                    <p className="font-mono text-base">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi voluptate, voluptates sunt odit rerum maxime explicabo natus nam dolor iusto ullam quia assumenda rem doloremque exercitationem dicta inventore. Quod.
                    </p>  
                    <Button buttonText="Read More" />
                </div>
            </div>
        </div>
    );
};

export default Featured;
