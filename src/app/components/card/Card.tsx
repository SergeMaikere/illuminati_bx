import React, { PropTypes } from 'react';
import Button from '../button/Button';

const Card = (props) => {
    return (
        <div className="grid grid-cols-2 gap-3 items-stretch mb-4 max-w-2xl py-4 border-b rounded border-gray-400 shadow-md">
            <img className={`p-1 hidden ${props.imgSrc ? 'md:block' : ''}`} src={props.imgSrc} alt={props.imgAlt}/>
            <div>
                <div className="mb-1 font-mono">
                    <san>{props.date}</san>
                    <span className="text-red-400 uppercase">{` ${props.category}`}</span>
                </div>
                <h3 className="mb-2 font-serif">
                    <div className="text-2xl">{props.title}</div>
                    <div className="text-sm text-light italic">{`${props.subtitle}`}</div>
                </h3>
                <p className="text-base text-light font-mono">{props.description}</p>
                <Button buttonText="Read More"/>
            </div>
        </div>
    );
};

export default Card;
