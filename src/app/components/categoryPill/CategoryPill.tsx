import React from 'react';
import Link from 'next/link'
import { BgCategoryColor, Category } from '../../../utils/Categories';

const CategoryPill = ({categorySlug}: {categorySlug: string}) => {

    return (
        <Link href={`http://localhost:3000/blog/${categorySlug}`}>
            <div className={`text-gray-200 font-serif px-3 py-2 uppercase rounded-2xl ${BgCategoryColor[categorySlug]}`}>
                {categorySlug}
            </div>
        </Link>
        
    );
};

export default CategoryPill;
