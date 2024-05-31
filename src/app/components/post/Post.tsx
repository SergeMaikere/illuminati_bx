"use client"
import React, { PropTypes, useEffect } from 'react';
import classNames from 'classnames'
import OupsNoContent from '../oupsNoContent/OupsNoContent';
import Menu from '../menu/Menu';
import CommentsArea from '../commentsArea/CommentsArea';

const Post = ({post}) => {

    useEffect(
        () => {
            const updateViews = async id => {
                if (!id) return
                const res = await fetch(
                    "http://localhost:3000/api/post?action=views", 
                    {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({id})
                    }
                )
                if (!res.ok) throw new Error('Failed updating post')
                return await res.json()
            }
            updateViews( post?.id ) 
        }, []
    )


    return (
        <div>
            <div className={classNames({hidden: post})}>
                <OupsNoContent />
            </div>
            <div className={classNames("p-3", {hidden: !post})}>
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
                <div className="md:mt-10 font-mono">{post?.body}</div>
            </div>
        </div>
    );
};

export default Post;
