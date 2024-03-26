import React, { PropTypes } from 'react';
import Link from 'next/Link'
import Button from '../button/Button';
import { TextCategoryColor } from '../../utils/Categories';

const PostCard = (props) => {
    return (
        <div className="lg:grid lg:grid-cols-5 gap-3 items-stretch mb-6 max-w-2xl p-3 border-b rounded border-gray-300 shadow-md">
            <img className="p-1 hidden lg:block object-cover col-span-2" src={props.imgSrc} alt={props.imgAlt}/>
            <div className="lg:col-span-3">
                <div className="mb-1 font-mono">
                    <span>{props.date}</span>
                    <span className={`uppercase ${TextCategoryColor[props.category]}`}>{` ${props.category}`}</span>
                </div>
                <div className="mb-2">
                    <span className="text-xl font-bold font-serif">{props.title}</span>
                    <span className="text-gray-600 font-mono">{` ${props.subtitle}`}</span>
                </div>
                <p className="text-base text-light font-mono">{props.description}</p>
                <Link href={`http://localhost:3000/${props.id}`}>
                    <Button buttonText="Read More"/>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
