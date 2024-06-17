import React, { PropTypes } from 'react';
import { getPostBySlug } from '../utils/Posts';
import { formDataToObject } from '../utils/Helper';
import { addComment } from '../utils/Comments';
import Post from '../components/post/Post';
import CommentsArea from '../components/commentsArea/CommentsArea';
import Menu from '../components/menu/Menu';

const SinglePage = async (context) => {

    const post = await getPostBySlug( context.params.slug )

    const add = async formData => {
        "use server"
        const comment = formDataToObject(formData)
        return await addComment(comment)
        
    }
    
    return (
        <div>
            <Post post={post} />
            <div className="flex gap-3">
                <div className="w-2/3">
                    <CommentsArea 
                        postSlug={post?.slug}
                        userEmail={post?.userEmail}
                        comments={post?.comments} 
                        handleSubmit={add} />
                </div>
                <div className="w-1/3"><Menu /></div>
            </div>
        </div>
    );
};

export default SinglePage;
