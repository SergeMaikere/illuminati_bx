import React, { PropTypes, useState } from 'react';
import Link from 'next/link'
import { BgCategoryColor } from '../../utils/Categories';

const CategoryPill = (props) => {

    return (
        <Link href={`blog/${props.category}`}>
            <div className={`text-gray-200 font-serif px-3 py-2 uppercase rounded-2xl ${BgCategoryColor[props.category.toLowerCase()]}`}>
                {props.category}
            </div>
        </Link>
        
    );
};

export default CategoryPill;
