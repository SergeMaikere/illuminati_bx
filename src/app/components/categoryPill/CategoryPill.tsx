import React, { PropTypes, useState } from 'react';
import Link from 'next/link'

const CategoryPill = (props) => {

    const bgConfig = {
        enfer: 'bg-red-400',
        france: 'bg-blue-400',
        cyprien: 'bg-lime-400',
        histoire: 'bg-stone-400',
        mode: 'bg-fuchsia-400',
        science: 'bg-teal-400'
    }

    return (
        <Link href={`blog/${props.category}`}>
            <div className={`text-gray-200 font-serif px-3 py-2 uppercase rounded-2xl ${bgConfig[props.category]}`}>
                {props.category}
            </div>
        </Link>
        
    );
};

export default CategoryPill;
