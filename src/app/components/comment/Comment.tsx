import React, { PropTypes } from 'react';

const Comment = (props) => {
    return (
        <div className="p-3 mb-3">
            <div className="flex h-16">
                <img src={props.user.imgSrc} alt={props.user.imgAlt}/>
                <div>
                    <div className="font-bold">{`${props.user.userName} ${props.user.lastName}`}</div>
                    <div className="text-sm">{props.date}</div>
                </div>
            </div>
            <div className="font-mono text-base">{props.msg}</div>
        </div>        
    );
};

export default Comment;
