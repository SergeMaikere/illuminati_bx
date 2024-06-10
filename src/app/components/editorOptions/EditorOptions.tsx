"use client"
import React, { PropTypes, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import Button from '../button/Button';
import { CiEdit } from "react-icons/ci";
import { ImCheckmark, ImCheckmark2 } from "react-icons/im";
import classNames from 'classnames'
import { isEditor } from '../../utils/Helper';
import { updateEditorLike } from '../../utils/Posts';

const EditorOptions = ({id, liked}) => {
    const [ like, setLike ] = useState(liked)
    const { data, status } = useSession()
    const gotoEditPage = () => 'Go to edit page'

    useEffect( 
        () => {
            const updateLike = async (postId, edLike) => await updateEditorLike(postId, edLike)
            updateLike(id, like)
        }, [like] )

    return (
        <div className={ classNames("flex gap-3 justify-around items-center", {hidden: !isEditor(status, data)}) }>
            <button className=" flex gap-2 items-center hover:scale-110" type="button" onClick={e => gotoEditPage()}>
                J'édite!
                < CiEdit className="text-2xl" />
            </button>
            <button className=" flex gap-2 items-center hover:scale-110" type="button" onClick={e => setLike(!like)}>
                J'aime! 
                <ImCheckmark className={classNames({hidden: !like})}/>
                <ImCheckmark2 className={classNames({hidden: like})}/>
            </button>
        </div>
    );
};

export default EditorOptions;
