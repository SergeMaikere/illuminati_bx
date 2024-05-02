import React, { PropTypes } from 'react';
import CardList from '../../components/cardList/CardList';
import Menu from '../../components/menu/Menu';
import { getPostsByCategory } from '../../utils/Posts';
import { BgCategoryColor, getCategory } from '../../utils/Categories';
import { voyeur } from '../../utils/Helper';

const BlogPage = async (context) => {
    const cat = await getCategory( context.params.slug )
    const posts = await getPostsByCategory(cat.slug)

    return (
        <div>
            <div className="sm:relative">
                <h1 className={`
                    px-10 py-2 ${BgCategoryColor[cat.slug]}
                    text-5xl text-gray-100 uppercase font-serif text-center
                    sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
                `}>{cat.name}</h1>
                <img className=" hidden sm:block w-full" src={cat.imgSrc} alt={cat.imgAlt}/>
            </div>
            <div className="md:flex">
                <div className="flex-2"><CardList title="Dernièrement" cards={posts} /></div>
                <div className="flex-1"><Menu className="flex-1"/></div>
                
            </div>
        </div>
    );
};

export default BlogPage;
