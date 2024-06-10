import React, { PropTypes, useEffect, useState } from 'react';
import { redirect } from 'next/navigation'
import { isMoreThanNChar, isNotEmptyString, isString, validate } from '../utils/Validation';
import Article from '../components/article/Article';
import { addPost } from '../utils/Posts';
import { formDataToObject, slugify } from '../utils/Helper';

const NewPost = ({ className }) => {
    
    const isInputValid = validate( isString, isNotEmptyString, isMoreThanNChar )
    const isNewPostValid = obj => Object.keys(obj).every( k => isInputValid(obj[k]) )

    const handleSubmit = async formDatas => {
        "use server"
        // if (!isNewPostValid(postDatas)) return displayInvalidInput()
        const post = formDataToObject( formDatas ) 
        const res = await addPost(post)
        redirect( `/${slugify(post.title)}` )
    }

    return (
        <div className="my-10 text-center md:text-left">
            <div className="text-4xl md:text-6xl font-serif py-6">Nouvel Article ?</div>
            <Article handleSubmit={handleSubmit} />
        </div>
    );
};

export default NewPost;
