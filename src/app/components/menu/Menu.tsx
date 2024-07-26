import React, { PropTypes } from 'react';
import PopularCard from '../popularCard/PopularCard';
import CategoryPill from '../categoryPill/CategoryPill';
import EditorCard from '../editorCard/EditorCard';
import { getAllCategories } from '../../utils/Categories';
import { getEditorChoice, getPopularPosts } from '../../utils/Posts';

const Menu: React.FC = async () => {
    const categories = await getAllCategories()
    const popular = await getPopularPosts()
    const editorChoice = await getEditorChoice()

    return (
        <div className="mt-10 px-3">
            <div className="border-b border-gray-300 pb-12">
                <div className="font-serif mb-4">
                    <div className="text-3xl">Populaires</div>
                </div>
                <div>
                    { popular.map(post => <PopularCard key={post.id} post={post} />) }
                </div>
            </div>
            <div className="mt-10 border-b border-gray-300 pb-12">
                <div className="font-serif mb-4">
                    <div className="text-3xl">Catégories</div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map( (cat, i) => <CategoryPill key={cat.id} category={cat.slug} /> )}
                </div>
            </div>
            <div className="mt-10 pb-12">
                <div className="font-serif mb-4 text-3xl">Choix de l'éditeur</div>
                <div>{ editorChoice.map(post => <EditorCard key={post?.id} post={post} />) }</div>
            </div>
        </div>
    );
};

export default Menu;
