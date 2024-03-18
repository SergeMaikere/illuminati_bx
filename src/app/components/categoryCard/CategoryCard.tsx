import React, { PropTypes } from 'react';
import Link from 'next/Link'
import { getCategoryTextColor } from '../../utils/Helper';
import { TextCategoryColor } from '../../utils/Categories';

const CategoryCard = (props) => {

    return (
        <Link className="flex h-40 max-w-md" href={`http://localhost:3000/blog/${props.category.toLowerCase()}`}>
            <img className="hidden sm:block mb-3" src={props.logoSrc} alt={props.logoAlt}/>
            <div className="p-3">
                <div className="flex gap-2 items-center">
                    <img className="sm:hidden w-9" src={props.logoSrc} alt={props.logoAlt}/>
                    <h4 className={`uppercase text-xl sm:text-2xl font-serif ${TextCategoryColor[props.category.toLowerCase()]}`}>{props.category}</h4>
                </div>
                <div className="text-xl font-mono border-t rounded border-gray-300">{props.subtitle}</div>
                <div className="text-sm font-mono">{props.description}</div>
            </div>
        </Link>
        
    );
};

export default CategoryCard;
