import React, { PropTypes } from 'react';
import Link from 'next/link'

const Categories = ({ className }) => {
    return (
        <div className="mt-20 pb-24 border-b border-gray-300">
            <h1 className="text-4xl font-serif mb-8">Nos Catégories</h1>
            <div className="flex flex-wrap gap-4">
                <Link className="max-w-80" href="/blog?cat=hell">
                    <img className="mb-3" src="satan_mic.jpg" alt="demonic microphone"/>
                    <h3 className="p-3">
                        <div className="text-xl font-mono">Pendant ce Temps en Enfer</div>
                        <div className="border-t rounded border-gray-300"></div>
                        <div className="text-sm font-mono">Nouvelles exclusives de notre correspondant venu du 9ème cercle des Enfers</div>
                    </h3>
                </Link>
                <Link className="max-w-80" href="/blog?cat=cia">
                    <img className="mb-3" src="conspi_wall.jpg" alt="Conspiration wall"/>
                    <h3 className="p-3">
                        <div className="text-xl font-mono">Histoires Secrètes</div>
                        <div className="border-t rounded border-gray-300"></div>
                        <div className="text-sm font-mono">Ou mais qu'est-ce que la CIA a encore foutu</div>
                    </h3>
                </Link>
                <Link className="max-w-80" href="/blog?cat=science">
                    <img className="mb-3" src="old_scientist.jpg" alt="Scientist manipulating biohazard"/>
                    <h3 className="p-3">
                        <div className="text-xl font-mono">Les 5 Virus du dr Strauss</div>
                        <div className="border-t rounded border-gray-300"></div>
                        <div className="text-sm font-mono">Ou comment expérimenter illégalement mais humainement au 21ème siècle</div>
                    </h3>
                </Link>
                <Link className="max-w-80" href="/blog?cat=secret">
                    <img className="mb-3" src="secret_societies.jpg" alt="Group picture of cloacked figures"/>
                    <h3 className="p-3">
                        <div className="text-xl font-mono">Mode et sociétés secrètes</div>
                        <div className="border-t rounded border-gray-300"></div>
                        <div className="text-sm font-mono">Ou que mettre lors de votre prochaine orgie dans le sang</div>
                    </h3>
                </Link><Link className="max-w-80" href="/blog?cat=france">
                    <img className="mb-3" src="france.jpg" alt="Sombre french flag"/>
                    <h3 className="p-3">
                        <div className="text-xl font-mono">Illuminati France</div>
                        <div className="border-t rounded border-gray-300"></div>
                        <div className="text-sm font-mono">Où on se permet une remarque ou deux sur leur travail merdique, dans le respect</div>
                    </h3>
                </Link>
                <Link className="max-w-80" href="/blog?cat=reptilian">
                    <img className="mb-3" src="reptilian.jpg" alt="Reptilian in deep thoughts"/>
                    <h3 className="p-3">
                        <div className="text-xl font-mono">Les Conseils de Cyprien</div>
                        <div className="border-t rounded border-gray-300"></div>
                        <div className="text-sm font-mono">Ou demandez à un reptilien</div>
                    </h3>
                </Link>
            </div>
        </div>
    );
};

export default Categories;
