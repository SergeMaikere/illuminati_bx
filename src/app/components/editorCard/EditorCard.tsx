import React, { PropTypes } from 'react';
import Link from 'next/Link'
import { getCategoryColor, getCategoryLogo } from '../../utils/Helper';
import { TextCategoryColor } from '../../utils/Categories';

const EditorCard = (props) => {

    return (
        <Link 
            className={`
                md:grid md:grid-cols-5 items-center justify-items-center gap-2 
                border-b rounded border-gray-300 shadow-md
                p-2 mb-2 
            `} 
            href={`blog/${props.category.toLowerCase()}/${props.id}`}
        >
            <div className="hidden md:block col-span-2">
                <img className="object-cover" src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className="col-span-3">
                <div className="">
                    <img className="w-5 h-5 inline-block mx-1" src={props.logoSrc} alt={props.logoAlt} />
                    <span className={`uppercase text-sm ${TextCategoryColor[props.category.toLowerCase()]}`}>{props.category}</span>
                </div>
                <div className="text-sm font-extrabold font-mono py-2">{props.title}</div>
                <div className="flex gap-4 font-serif text-sm row-span-1">
                    <div className="font-extrabold text-xs">{props.author}</div>
                    <div className="font-extralight text-xs">{props.date}</div>
                </div>
            </div>
        </Link>
    );
};

export default EditorCard;
