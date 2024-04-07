import React, { PropTypes } from 'react';
import Link from 'next/Link'
import { getCategoryLogo } from '../../utils/Helper';
import { TextCategoryColor } from '../../utils/Categories';

const PopularCard = (props) => {

    return (
        <div className="p-3 mb-1 border-b rounded border-gray-300 shadow-md">
            <Link href={`blog/${props.category.toLowerCase()}/${props.id}`}>
                <div>
                    <img className="w-6 h-6 inline-block mx-1" src={props.logoSrc} alt={props.logoAlt} />
                    <span className={`uppercase text-sm font-mono ${TextCategoryColor[props.category.toLowerCase()]}`}>{props.category}</span>
                </div>
                <div className="py-3">
                    <span className="font-bold font-serif">{props.title}</span>
                    <span className="text-gray-600 text-base font-mono">{` ${props.subtitle}`}</span>
                </div>
                <div className="flex gap-4 font-serif text-xs ">
                    <div className="font-extrabold">{props.author}</div>
                    <div className="font-extralight">{props.date}</div>
                </div>
            </Link>
        </div>
    );
};

export default PopularCard;
