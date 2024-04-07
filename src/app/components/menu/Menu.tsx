import React, { PropTypes } from 'react';
import PopularCard from '../popularCard/PopularCard';
import CategoryPill from '../categoryPill/CategoryPill';
import EditorCard from '../editorCard/EditorCard';
import { getPopular } from '../../utils/getPopular';
import { getEditorChoice } from '../../utils/getEditorsChoice';
import { CATEGORIES } from '../../utils/Categories';

const Menu = ({ className }) => {
    return (
        <div className="mt-10 px-3">
            <div className="border-b border-gray-300 pb-12">
                <div className="font-serif mb-4">
                    <div className="text-3xl">Populaires</div>
                </div>
                <div>
                    {
                        getPopular().map(
                            obj => <PopularCard
                                key={obj.id}
                                date={obj.date}
                                category={obj.category}
                                logoSrc={obj.logoSrc}
                                logoAlt={obj.logoAlt}
                                logoColor={obj.logoColor}
                                author={obj.author}
                                title={obj.title}
                                subtitle={obj.subtitle}
                            />
                        )
                    }
                </div>
            </div>
            <div className="mt-10 border-b border-gray-300 pb-12">
                <div className="font-serif mb-4">
                    <div className="text-3xl">Catégories</div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map( (cat, i) => <CategoryPill key={i+1} category={cat} /> )}
                </div>
            </div>
            <div className="mt-10 pb-12">
                <div className="font-serif mb-4 text-3xl">Choix de l'éditeur</div>
                <div>
                    {
                        getEditorChoice().map( 
                            obj => <EditorCard 
                                key={obj.id}
                                date={obj.date}
                                category={obj.category}
                                logoSrc={obj.logoSrc}
                                logoAlt={obj.logoAlt}
                                logoColor={obj.logoColor}
                                author={obj.author}
                                title={obj.title}
                                subtitle={obj.subtitle}
                                imgSrc={obj.imgSrc}
                                imgAlt={obj.imgAlt}
                            /> 
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;
