import React from 'react';
import { BgCategoryColor, Category, getCategory } from '../../utils/Categories';
import CardList from '../../components/cardList/CardList';
import Menu from '../../components/menu/Menu';

type P = { params: {slug: string} }

const BlogPage: React.FC<P> = async ({params}) => {
    const cat: Category = await getCategory( params.slug )
    const posts = cat?.posts

    return (
        <div>
            <div className="sm:relative">
                <h1 className={`
                    px-10 py-2 ${BgCategoryColor[cat.slug]}
                    text-5xl text-gray-100 uppercase font-serif text-center
                    sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
                `}>{cat.name}</h1>
                <img className=" hidden sm:block w-full" src={cat.image as string} alt={cat.imageAlt}/>
            </div>
            <div className="md:flex">
                <div className="flex-2"><CardList title="Dernièrement" cards={posts} /></div>
                <div className="flex-1"><Menu/></div>
                
            </div>
        </div>
    );
};

export default BlogPage;
