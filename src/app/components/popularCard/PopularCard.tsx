import React, { PropTypes } from 'react';
import Link from 'next/link'
import { getCategoryLogo } from '../../utils/Helper';

const PopularCard = (props) => {

    const textConfig = {
        enfer: 'text-red-600',
        france: 'text-blue-600',
        cyprien: 'text-lime-600',
        histoire: 'text-stone-600',
        mode: 'text-fuchsia-600',
        science: 'text-teal-600'
    }

    return (
        <div className="p-3 mb-1 border-b rounded border-gray-300 shadow-md">
            <Link href={`blog/${props.category.toLowerCase()}/${props.id}`}>
                <div>
                    <img className="w-6 h-6 inline-block mx-1" src={getCategoryLogo(props.category.toLowerCase())} alt="Category Logo" />
                    <span className={`uppercase text-sm font-mono ${textConfig[props.category.toLowerCase()]}`}>{props.category}</span>
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
