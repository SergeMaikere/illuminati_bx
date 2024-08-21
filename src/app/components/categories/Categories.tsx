import React from 'react';
import CategoryCard from '../categoryCard/CategoryCard';
import { Category } from '../../../utils/Categories';

const Categories = ({categories}: {categories: Category[]}) => {
    return (
        <div className="mt-10 pb-12 border-b border-gray-300">
            <div className="text-4xl font-serif mb-8">Nos Catégories</div>
            <div className="flex flex-wrap gap-4">
                {
                    categories?.map(
                        obj => <CategoryCard key={obj.id} category={obj} />
                    )
                }
            </div>
        </div>
    );
};

export default Categories;