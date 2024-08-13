import React from 'react';
import { Post as MyPost, getEditorChoice, getPopularPosts, getPostBySlug } from '../../utils/Posts';
import { Comment, addComment } from '../../utils/Comments';
import { formDataToObject } from '../../utils/Helper';
import Post from '../components/post/Post';
import CommentsArea from '../components/commentsArea/CommentsArea';
import Menu from '../components/menu/Menu';
import { getAllCategories } from '../../utils/Categories';

type P = { params: {slug: string } }

const SinglePage: React.FC<P> = async ({params}) => {
    const post = await getPostBySlug( params.slug )
    const popular = await getPopularPosts()
    const categories = await getAllCategories()
    const editor = await getEditorChoice()

    const add = async (formData: FormData): Promise<Comment> => {
        "use server"
        const comment: Partial<Comment> = formDataToObject(formData)
        return await addComment(comment)    
    }
    
    return (
        <div>
            <Post post={post} />
            <div className="md:flex gap-3">
                <div className="w-2/3">
                    <CommentsArea 
                        postSlug={post.slug}
                        comments={post.comments} 
                        handleSubmit={add} />
                </div>
                <div className="md:w-1/3"><Menu popular={popular} categories={categories} editor={editor} /></div>
            </div>
        </div>
    );
};

export default SinglePage;
