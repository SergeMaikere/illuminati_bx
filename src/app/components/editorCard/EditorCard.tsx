import React from 'react';
import Link from 'next/link'
import { TextCategoryColor } from '../../utils/Categories';

const EditorCard = ({post}) => {

    return (
        <Link 
            className={`
                md:grid md:grid-cols-5 items-center justify-items-center gap-2 
                border-b rounded border-gray-300 shadow-md
                p-2 mb-2 
            `} 
            href={`/${post?.slug}`}
        >
            <div className="hidden md:block col-span-2">
                <img className="object-cover" src={post?.image} alt={post?.imageAlt} />
            </div>
            <div className="col-span-3">
                <div className="">
                    <img className="w-5 h-5 inline-block mx-1" src={post.cat.logo} alt={post.cat.logoAlt} />
                    <span className={`uppercase text-sm ${TextCategoryColor[post?.catSlug]}`}>{post?.catSlug}</span>
                </div>
                <div className="text-sm font-extrabold font-mono py-2">{post?.title}</div>
                <div className="flex gap-4 font-serif text-sm row-span-1">
                    <div className="font-extrabold text-xs">{post?.user.name}</div>
                    <div className="font-extralight text-xs">{new Date(post?.createdAt).toLocaleDateString()}</div>
                </div>
            </div>
        </Link>
    );
};

export default EditorCard;
