import React, { PropTypes } from 'react';
import Link from 'next/Link'
import Button from '../button/Button';
import { TextCategoryColor } from '../../utils/Categories';

const PostCard = ({post}) => {
    return (
        <div className="lg:grid lg:grid-cols-5 gap-3 items-stretch mb-6 max-w-2xl p-3 border-b rounded border-gray-300 shadow-md">
            <img className="p-1 hidden lg:block object-cover col-span-2" src={post?.image} alt={post?.imageAlt}/>
            <div className="lg:col-span-3">
                <div className="mb-1 font-mono">
                    <span>{new Date(post?.createdAt).toLocaleDateString()}</span>
                    <span className={`uppercase ${TextCategoryColor[post?.catSlug]}`}>{` ${post?.catSlug}`}</span>
                </div>
                <div className="mb-2">
                    <span className="text-xl font-bold font-serif">{post?.title}</span>
                    <span className="text-gray-600 font-mono">{` ${post?.subtitle}`}</span>
                </div>
                <p className="text-base text-light font-mono">{post?.description}</p>
                <Link href={`http://localhost:3000/${post?.slug}`}>
                    <Button children="Read More"/>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
