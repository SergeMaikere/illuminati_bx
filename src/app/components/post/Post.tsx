"use client"
import React, { PropTypes, useEffect } from 'react';
import classNames from 'classnames'
import OupsNoContent from '../oupsNoContent/OupsNoContent';
import Menu from '../menu/Menu';
import CommentsArea from '../commentsArea/CommentsArea';
import CategoryPill from '../categoryPill/CategoryPill';
import EditorOptions from '../editorOptions/EditorOptions';
import { updatePostViews } from '../../utils/Posts';

const Post = ({post}) => {

    const markup = { __html: post?.body }

    useEffect(
        () => {
            const updateViews = async id => await updatePostViews(id)
            updateViews( post?.id ) 
        }, []
    )

    return (
        <div>
            <div className={classNames({hidden: post})}>
                <OupsNoContent />
            </div>
            <div className={classNames("p-3", {hidden: !post})}>
                <div className="flex gap-2">
                    <CategoryPill category={post?.catSlug} />
                    <EditorOptions id={post?.id} liked={post?.editorLike} />
                </div>
                <h1 className="text-3xl md:text-6xl font-serif mb-3">{post?.title}</h1>
                <div className="md:mt-10 lg:flex gap-2">
                    <div className="md:flex-1">
                        <img className="" src={post?.image} alt={post?.imgageAlt}/>
                    </div>
                    <div className="flex flex-col justify-around md:flex-1">
                        <div>
                            <div className="text-4xl font-mono">{` ${post?.subtitle}`}</div>
                        </div>
                        <div className="font-mono font-extralight">{post?.description}</div>
                        <div className="flex items-center gap-2 h-10 mt-5">
                            <img className="w-10 rounded-full" src={post?.user?.image} alt="author Profile picture"/>
                            <div className="font-bold">{post?.user?.name}</div>
                            <div className="text-sm">{new Date(post?.createdAt).toLocaleDateString()}</div>
                        </div>
                    </div>
                </div>
                <div className="md:mt-10 font-mono" dangerouslySetInnerHTML={markup}></div>
            </div>
        </div>
    );
};

export default Post;
