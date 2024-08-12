import React from 'react';
import Link from 'next/link'
import { Category, TextCategoryColor } from '../../../utils/Categories';

const CategoryCard = ({category}: {category: Category}) => {

    return (
        <Link className="max-w-md" href={`http://localhost:3000/blog/${category.slug}`}>
            <img className="hidden sm:block mb-3" src={category.image} alt={category.imageAlt}/>
            <div className="p-3">
                <div className="flex gap-2 items-center">
                    <img className="sm:hidden w-9" src={category.logo} alt={category.logoAlt}/>
                    <div className={`uppercase text-xl sm:text-2xl font-serif ${TextCategoryColor[category.slug]}`}>{category.name}</div>
                </div>
                <div className="text-xl font-mono border-t rounded border-gray-300">{category.subtitle}</div>
                <div className="text-sm font-mono">{category.description}</div>
            </div>
        </Link>
        
    );
};

export default CategoryCard;
