import React, { PropTypes } from 'react';
import Link from 'next/Link'
import CategoryCard from '../categoryCard/CategoryCard';

const Categories = (props) => {
    return (
        <div className="mt-10 pb-12 border-b border-gray-300">
            <div className="text-4xl font-serif mb-8">Nos Catégories</div>
            <div className="flex flex-wrap gap-4">
                {
                    props.categories.map(
                        obj => <CategoryCard key={obj.id} category={obj} />
                    )
                }
            </div>
        </div>
    );
};

export default Categories;