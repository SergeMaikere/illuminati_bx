"use client"

import React, { PropTypes, useState } from 'react';
import Comment from '../comment/Comment';
import Button from '../button/Button';

const CommentsArea = (props) => {

    const [ value, setValue ] = useState('')

    return (
        <div className="mt-10">
            <div className="text-3xl">Commentaires</div>

            <div className="flex gap-5 py-4">
                <input 
                className={` w-full px-2 border-b border-gray-400 focus:outline-gray-400 `} 
                name="post" 
                type="text" 
                placeholder="C'est une bonne position ça, complotiste ?"
                value={value}
                onChange={setValue} />
                <Button handleClick={props.handleSubmit} buttonText="Poster" type="button" />
            </div>

            <div className="mt-10">
                { props.comments.map(comm => <Comment key={comm.id} comment={comm}/>) }
            </div>
        </div>
    );
};

export default CommentsArea;
