import React, { PropTypes } from 'react';
import Menu from '../components/menu/Menu';
import Button from '../components/button/Button';
import Comment from '../components/comment/Comment';
import { getPostById } from '../utils/Posts';
import { addComment, getCommentsByPostId } from '../utils/Comments';
import CommentsArea from '../components/commentsArea/CommentsArea';

const SinglePage = async (context) => {

    const post = await getPostById( context.params.slug )
    const comments = await getCommentsByPostId(post.id)

    const postComment = async () => {
        "use server"
        const comm = { 
            userId: post.userId,
            postId: post.id,
            body: value
        }
        const res = await addComment(comm)
        console.log(res)
    }

    return (
        <div className="p-3">
            <div className="mt-10 flex gap-2">
                <div className="flex-1">
                    <h1 className="text-6xl font-serif">{post.title}<span className="text-5xl text-gray-700">{` ${post.subtitle}`}</span></h1>
                    <div className="flex gap-2 h-10 mt-5">
                        <img className="rounded-full" src="./pr_strauss.png" alt={post.userData.imgSrc}/>
                        <div>
                            <div className="font-bold">{post.userData.username}</div>
                            <div className="text-sm">{post.date}</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="" src={post.imgSrc} alt={post.imgAlt}/>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div className="mt-10 col-span-2 p-3">
                    <div>
                        <p className="mb-2">{post.body}</p>
                        <p className="mb-2">{post.body}</p>
                        <p className="mb-2">{post.body}</p>
                    </div>
                    <CommentsArea comments={comments} handleSubmit={postComment}  />
                </div>
                <div className="col-span-1">
                    <Menu/>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
