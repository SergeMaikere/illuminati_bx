import React, { PropTypes } from 'react';
import Menu from '../components/menu/Menu';
import Button from '../components/button/Button';
import Comment from '../components/comment/Comment';
import { getPostById } from '../utils/Posts';
import { addComment, getCommentsByPostId } from '../utils/Comments';

const SinglePage = async (context) => {

    const post = await getPostById( context.params.slug )
    const comments = await getCommentsByPostId(post.id)
    const postComment = async () => {
        "use server"
        const formData = new FormData(e.currentTarget)
        const res = await addComment(postId, userId, formData)
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
                    <div className="mt-10">
                        <h4 className="text-3xl">Commentaires</h4>

                        <div className="flex gap-5 py-4">
                            <input className="w-full px-2 border-b border-gray-400 focus:outline-gray-400" name="post" type="text" placeholder="C'est une bonne position ça, complotiste ?" />
                            <Button handleClick={postComment}  buttonText="Poster" type="button" />
                        </div>

                        <div className="mt-10">
                            { comments.map(comm => <Comment key={comm.id} comment={comm}/>) }
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <Menu/>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
