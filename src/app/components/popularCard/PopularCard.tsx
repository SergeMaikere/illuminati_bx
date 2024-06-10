import React, { PropTypes } from 'react';
import Link from 'next/Link'
import { getCategoryLogo } from '../../utils/Helper';
import { TextCategoryColor } from '../../utils/Categories';

const PopularCard = ({post}) => {

    return (
        <div className="p-3 mb-1 border-b rounded border-gray-300 shadow-md">
            <Link href={`blog/${post.catSlug}/${post.slug}`}>
                <div>
                    <img className="w-6 h-6 inline-block mx-1" src={post.cat.logo} alt={post.cat.logoAlt} />
                    <span className={`uppercase text-sm font-mono ${TextCategoryColor[post.catSlug]}`}>{post.catSlug}</span>
                </div>
                <div className="py-3">
                    <span className="font-bold font-serif">{post.title}</span>
                    <span className="text-gray-600 text-base font-mono">{` ${post.subtitle}`}</span>
                </div>
                <div className="flex gap-4 font-serif text-xs ">
                    <div className="font-extrabold">{post.user.name}</div>
                    <div className="font-extralight">{new Date(post.createdAt).toLocaleDateString()}</div>
                </div>
            </Link>
        </div>
    );
};

export default PopularCard;
