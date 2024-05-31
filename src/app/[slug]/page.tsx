import React, { PropTypes } from 'react';
import { getPostBySlug } from '../utils/Posts';
import { addComment, getCommentsByPostId } from '../utils/Comments';
import Post from '../components/post/Post';
import CommentsArea from '../components/commentsArea/CommentsArea';
import Menu from '../components/menu/Menu';

const SinglePage = async (context) => {

    const post = await getPostBySlug( context.params.slug )
    const comments = await getCommentsByPostId(post?.id)

    // const comment = async () => {
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
            <Post post={post} />
            <div className="flex gap-3">
                <div className="w-2/3 bg-black">
                    {/*<CommentsArea comments={comments} />*/}
                </div>
                <div className="w-1/3"><Menu /></div>
            </div>
        </div>
    );
};

export default SinglePage;
