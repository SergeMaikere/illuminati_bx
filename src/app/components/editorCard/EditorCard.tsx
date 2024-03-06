import React, { PropTypes } from 'react';
import Link from 'next/link'
import { getCategoryColor, getCategoryLogo } from '../../utils/Helper';

const EditorCard = (props) => {

    const textConfig = {
        enfer: 'text-red-400',
        france: 'text-blue-400',
        cyprien: 'text-lime-400',
        histoire: 'text-stone-400',
        mode: 'text-fuchsia-400',
        science: 'text-teal-400'
    }

    return (
        <Link 
            className={`
                md:grid md:grid-cols-5 items-center justify-items-center gap-2 
                border-b rounded border-gray-300 shadow-md
                p-2 mb-1 
            `} 
            href={`blog/${props.category.toLowerCase()}/${props.id}`}
        >
            <div className="hidden md:block col-span-2">
                <img className="" src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className="col-span-3">
                <div className="">
                    <img className="w-5 h-5 inline-block mx-1" src={getCategoryLogo(props.category.toLowerCase())} alt={props.imgAlt} />
                    <span className={`uppercase text-sm ${textConfig[props.category.toLowerCase()]}`}>{props.category}</span>
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
