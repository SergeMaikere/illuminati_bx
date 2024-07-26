import React, { useState } from 'react';
import Link from 'next/link'
import { BgCategoryColor } from '../../utils/Categories';

const CategoryPill = ({category}) => {

    return (
        <Link href={`http://localhost:3000/blog/${category}`}>
            <div className={`text-gray-200 font-serif px-3 py-2 uppercase rounded-2xl ${BgCategoryColor[category]}`}>
                {category}
            </div>
        </Link>
        
    );
};

export default CategoryPill;
