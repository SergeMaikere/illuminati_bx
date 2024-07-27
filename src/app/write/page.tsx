import React from 'react';
import { redirect } from 'next/navigation'
import { formDataToObject, slugify } from '../utils/Helper';
import { Post, addPost } from '../utils/Posts';
import Article from '../components/article/Article';

const NewPost = async () => {
    
    const handleSubmit = async (formDatas: FormData): Promise<Post> => {
        "use server"
        const post: Partial<Post> = formDataToObject( formDatas ) 
        const res: Post = await addPost(post)
        redirect( `/${slugify(post.title)}` )
        return res
    }

    return (
        <div className="my-10 text-center md:text-left">
            <div className="text-4xl md:text-6xl font-serif py-6">Nouvel Article ?</div>
            <Article handleSubmit={handleSubmit} />
        </div>
    );
};

export default NewPost;
