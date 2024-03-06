import React, { PropTypes } from 'react';
import Button from '../button/Button';

const RecentCard = (props) => {

    const textConfig = {
        enfer: 'text-red-400',
        france: 'text-blue-400',
        cyprien: 'text-lime-400',
        histoire: 'text-stone-400',
        mode: 'text-fuchsia-400',
        science: 'text-teal-400'
    }

    return (
        <div className="lg:grid lg:grid-cols-5 gap-3 items-stretch mb-6 max-w-2xl p-3 border-b rounded border-gray-300 shadow-md">
            <img className="p-1 hidden lg:block object-cover col-span-2" src={props.imgSrc} alt={props.imgAlt}/>
            <div className="lg:col-span-3">
                <div className="mb-1 font-mono">
                    <san>{props.date}</san>
                    <span className={`text-red-400 uppercase ${textConfig[props.category.toLowerCase()]}`}>{` ${props.category}`}</span>
                </div>
                <h3 className="mb-2">
                    <span className="text-xl font-bold font-serif">{props.title}</span>
                    <span className="text-gray-600 font-mono">{` ${props.subtitle}`}</span>
                </h3>
                <p className="text-base text-light font-mono">{props.description}</p>
                <Button buttonText="Read More"/>
            </div>
        </div>
    );
};

export default RecentCard;
