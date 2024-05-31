"use client"
import React, { PropTypes, useEffect, useState } from 'react';
import Button from '../button/Button';
import { CiEdit } from "react-icons/ci";
import { ImCheckmark, ImCheckmark2 } from "react-icons/im";
import classNames from 'classnames'

const EditorOptions = ({liked, updateLike}) => {
    const [ like, setLike ] = useState(liked)
    
    const gotoEditPage = () => 'Go to edit page'

    useEffect(
        () => {
            updateLike(like)
        },[like]
    )

    return (
        <div className="flex gap-3 justify-around items-center">
            <button type="button" onClick={e => gotoEditPage()}>
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
