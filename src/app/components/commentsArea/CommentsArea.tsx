"use client"
import React, { useState } from 'react';
import { useSession } from 'next-auth/react'
import Comment from '../comment/Comment';
import Button from '../button/Button';
import { asyncPipe, getFormDataByObject, isLoggedIn } from '../../utils/Helper';
import { Comment as MyComm } from '../../utils/Comments';

type P = {
    postSlug: string
    comments: MyComm[]
    handleSubmit: Function
}

type E = { body: {value: string} }

const CommentsArea: React.FC<P> = ({postSlug, comments, handleSubmit}) => {

    const [ myComments, setMyComments ] = useState(comments)
    const { data, status } = useSession()

    const updateView = (comment: MyComm) => setMyComments( prev => [...prev, comment] )
    
    const commentHandler = asyncPipe( getFormDataByObject, handleSubmit, updateView )

    const handleClick = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        if ( !isLoggedIn(status) ) return alert("Il faut se connecter l'ami.e")

        const target = e.target as typeof e.target & E

        const comment = {
            body: target.body.value,
            userEmail: data?.user?.email,
            postSlug: postSlug
        }

        await commentHandler( comment )

        target.body.value = ''
    }

    return (
        <div className="mt-10">
            <div className="text-3xl">Commentaires</div>

            <form onSubmit={e => handleClick(e)} className="flex gap-5 py-4">
                <input 
                    className={`w-full px-2 border-b border-gray-400 focus:outline-gray-400`} 
                    type="text" 
                    placeholder="C'est une bonne position ça, complotiste ?"
                    name="body"
                    required />
                <Button children="Poster" type="submit" />
            </form>

            <div className="mt-10">
                { myComments?.map(comm => <Comment key={comm?.id} comment={comm}/>) }
            </div>
        </div>
    );
};

export default CommentsArea;
