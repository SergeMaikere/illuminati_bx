import React from 'react';
import { Post as MyPost, getPostBySlug } from '../../app/utils/Posts';
import { formDataToObject } from '../../app/utils/Helper';
import { Comment, addComment } from '../../app/utils/Comments';
import Post from '../../app/components/post/Post';
import CommentsArea from '../../app/components/commentsArea/CommentsArea';
import Menu from '../../app/components/menu/Menu';

type P = { params: {slug: string } }

const SinglePage: React.FC<P> = async ({params}) => {
    const post: MyPost = await getPostBySlug( params.slug )

    const add = async (formData: FormData): Promise<Comment> => {
        "use server"
        const comment: Partial<Comment> = formDataToObject(formData)
        return await addComment(comment)    
    }
    
    return (
        <div>
            <Post post={post} />
            <div className="flex gap-3">
                <div className="w-2/3">
                    <CommentsArea 
                        postSlug={post.slug}
                        comments={post.comments} 
                        handleSubmit={add} />
                </div>
                <div className="w-1/3"><Menu /></div>
            </div>
        </div>
    );
};

export default SinglePage;
