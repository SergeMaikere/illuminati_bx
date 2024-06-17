import React, { PropTypes } from 'react';
import { voyeur } from '../../utils/Helper';

const Comment = ({comment}) => {
    return (
        <div className="p-3 mb-3">
            <div className="flex gap-3 h-16">
                <img src={comment?.user?.image} alt="Author's profile picture"/>
                <div>
                    <div className="flex gap-2 items-center">
                        <div className="font-bold text-lg">{comment?.user?.name}</div>
                        <div className="text-xs">{new Date(comment?.createdAt).toLocaleDateString()}</div>
                    </div>
                    <div className="font-mono text-lg">{comment?.body}</div>
                </div>
            </div>
        </div>        
    );
};

export default Comment;
