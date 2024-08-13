import React from 'react';
import PopularCard from '../popularCard/PopularCard';
import CategoryPill from '../categoryPill/CategoryPill';
import EditorCard from '../editorCard/EditorCard';
import { Category } from '../../../utils/Categories';
import { Post } from '../../../utils/Posts';

type M = Record<'popular' | 'editor', Partial<Post[]>> & {categories: Category[]}

const Menu = async ({popular, categories, editor}: M) => {
    // const categories = await getAllCategories()
    // const popular = await getPopularPosts()
    // const editorChoice = await getEditorChoice()

    return (
        <div className="mt-10 px-3">
            <div className="border-b border-gray-300 pb-12">
                <div className="font-serif mb-4">
                    <div className="text-3xl">Populaires</div>
                </div>
                <div>
                    { popular?.map(post => <PopularCard key={post.id} post={post} />) }
                </div>
            </div>
            <div className="mt-10 border-b border-gray-300 pb-12">
                <div className="font-serif mb-4">
                    <div className="text-3xl">Catégories</div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories?.map( (cat) => <CategoryPill key={cat.id} categorySlug={cat.slug} /> )}
                </div>
            </div>
            <div className="mt-10 pb-12">
                <div className="font-serif mb-4 text-3xl">Choix de l'éditeur</div>
                <div>{ editor?.map(post => <EditorCard key={post?.id} post={post} />) }</div>
            </div>
        </div>
    );
};

export default Menu;
