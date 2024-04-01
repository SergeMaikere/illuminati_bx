import React, { PropTypes, useEffect, useState } from 'react';
import { isMoreThanNChar, isNotEmptyString, isString, validate } from '../utils/Validation';
import Article from '../components/article/Article';

const NewPost = ({ className }) => {
    
    const isInputValid = validate( isString, isNotEmptyString, isMoreThanNChar )
    const isNewPostValid = obj => Object.keys(obj).every( k => isInputValid(obj[k]) )

    const handleSubmit = async formDatas => {
        "use server"
        if (!isNewPostValid(formDatas)) return displayInvalidInput()
        const res = await addPost(formDatas)
        console.log(res)
    }

    return (
        <div className="my-10 text-center md:text-left">
            <div className="text-4xl md:text-6xl font-serif py-6">Nouvel Article</div>
            <Article hadleSubmit={handleSubmit} />
        </div>
    );
};

export default NewPost;
