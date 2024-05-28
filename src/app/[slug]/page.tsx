import React, { PropTypes } from 'react';
import Menu from '../components/menu/Menu';
import Button from '../components/button/Button';
import Comment from '../components/comment/Comment';
import { getPostBySlug, updatePostViews } from '../utils/Posts';
import { addComment, getCommentsByPostId } from '../utils/Comments';
import CommentsArea from '../components/commentsArea/CommentsArea';
import OupsNoContent from '../components/oupsNoContent/OupsNoContent';
import classNames from 'classnames'

const SinglePage = async (context) => {

    const post = await getPostBySlug( context.params.slug )
    const views = await updatePostViews(post.id)
    console.log({views})
    // const comments = await getCommentsByPostId(post.id)

    // const postComment = async () => {
    //     "use server"
    //     const comm = { 
    //         userId: post.userId,
    //         postId: post.id,
    //         body: value
    //     }
    //     const res = await addComment(comm)
    //     console.log(res)
    // }

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
                <div className="md:grid md:grid-cols-3">
                    <div className="md:mt-10 md:col-span-2 p-3">
                        <p className="font-mono">{post?.body}</p>
                        {/*<CommentsArea comments={comments} handleSubmit={postComment}  />*/}
                    </div>
                    <div className="md:col-span-1">
                        <Menu/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
