import React, { PropTypes } from 'react';

const NoYouCannot = () => {
    return (
        <div className="md:flex gap-3">
            <div className="md:w-1/3">
                <img src="/chancla.jpg" alt="Perfect flip flop throw from angry mom"/>
            </div>
            <div className="p-3 flex-1 flex flex-col gap-5 justify-around">
                <div className="text-7xl font-serif">Non tu peux pas !</div>
                <div className="text-lg font-mono">
                    Seul l'initié peut prétendre prendre part à la <span className="font-bold">noble mission</span> qu'est 
                    celle d'<span className="font-bold">Officier de Propagande et de Contrôle de la Plèbe de la 9ème Chambre du Nouvel Ordre</span> (ça veut dire journaliste).
                    Cependant, pour nous rejoindre dans la grande aventure qu'est la <span className="font-bold">DOMINATION TOTALE</span>, il te suffit de
                    volontairement faire pleurer un bébé et nous te contacterons dans la semaine! 😊
                </div>
                <div className="font-mono text-lg">Allé bisous</div>
            </div>
        </div>
    );
};

export default NoYouCannot;
