import React, { PropTypes } from 'react';
import Link from 'next/Link'
import CategoryCard from '../categoryCard/CategoryCard';
import { getAllCategories } from '../../utils/Categories';

const Categories = ({ className }) => {
    return (
        <div className="mt-10 pb-12 border-b border-gray-300">
            <div className="text-4xl font-serif mb-8">Nos Catégories</div>
            <div className="flex flex-wrap gap-4">
                {
                    getAllCategories().map(
                        obj => <CategoryCard 
                            category={obj.category}
                            bgColor={obj.bgColor}
                            textColor={obj.textColor}
                            logoSrc={obj.logoSrc}
                            logoAlt={obj.logoAlt}
                            imgSrc={obj.imgSrc}
                            imgAlt={obj.imgAlt}
                            subtitle={obj.subtitle}
                            description={obj.description}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Categories;