import React, { PropTypes } from 'react';
import { getRecents } from '../utils/getRecents';
import CardList from '../components/cardList/CardList';
import Menu from '../components/menu/Menu';

const BlogPage = ({ className }) => {
    return (
        <div>
            <h1 className="text-5xl text-center font-serif">Category page</h1>
            <div className="md:flex">
                <div className="flex-2"><CardList title="Ma catégorie" cards={getRecents()} /></div>
                <div className="flex-1"><Menu className="flex-1"/></div>
                
            </div>
        </div>
    );
};

export default BlogPage;
