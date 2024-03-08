import React, { PropTypes } from 'react';
import PopularCard from '../popularCard/PopularCard';
import CategoryPill from '../categoryPill/CategoryPill';
import EditorCard from '../editorCard/EditorCard';
import { getPopular } from '../../utils/getPopular';
import { getAllCategories } from '../../utils/Helper';
import { getEditorChoice } from '../../utils/getEditorsChoice';

const Menu = ({ className }) => {
    return (
        <div className="mt-10 px-3">
            <div className="border-b border-gray-300 pb-12">
                <h3 className="font-serif mb-4">
                    <div className="text-3xl">Populaires</div>
                </h3>
                <div>
                    {
                        getPopular().map(
                            obj => <PopularCard
                                id={obj.id}
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
                <h3 className="font-serif mb-4">
                    <div className="text-3xl">Catégories</div>
                </h3>
                <div className="flex flex-wrap gap-2">
                    {getAllCategories().map( cat => <CategoryPill category={cat} /> )}
                </div>
            </div>
            <div className="mt-10 pb-12">
                <h3 className="font-serif mb-4 text-3xl">Choix de l'éditeur</h3>
                <div>
                    {
                        getEditorChoice().map( 
                            obj => <EditorCard 
                                id={obj.id}
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
