import React, { PropTypes } from 'react';
import { voyeur } from '../../utils/Helper';

const Comment = (props) => {
    return (
        <div className="p-3 mb-3">
            <div className="flex gap-3 h-16">
                <img src={props.comment.imgSrc} alt="Author's profile picture"/>
                <div>
                    <div className="flex gap-2 items-center">
                        <div className="font-bold text-lg">{props.comment.user.username}</div>
                        <div className="text-xs">{props.comment.date}</div>
                    </div>
                    <div className="font-mono text-lg">{props.comment.body}</div>
                </div>
            </div>
        </div>        
    );
};

export default Comment;
