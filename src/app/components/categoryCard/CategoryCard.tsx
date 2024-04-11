import React, { PropTypes } from 'react';
import Link from 'next/Link'
import { getCategoryTextColor } from '../../utils/Helper';
import { TextCategoryColor } from '../../utils/Categories';

const CategoryCard = (props) => {

    return (
        <Link className="max-w-md" href={`http://localhost:3000/blog/${props.category.slug}`}>
            <img className="hidden sm:block mb-3" src={props.category.image} alt={props.category.imageAlt}/>
            <div className="p-3">
                <div className="flex gap-2 items-center">
                    <img className="sm:hidden w-9" src={props.category.logo} alt={props.category.logoAlt}/>
                    <div className={`uppercase text-xl sm:text-2xl font-serif ${TextCategoryColor[props.category.slug]}`}>{props.category.name}</div>
                </div>
                <div className="text-xl font-mono border-t rounded border-gray-300">{props.category.subtitle}</div>
                <div className="text-sm font-mono">{props.category.description}</div>
            </div>
        </Link>
        
    );
};

export default CategoryCard;
