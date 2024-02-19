import React, { PropTypes } from 'react';
import Pagination from '../pagination/Pagination';

const CardList = ({ className }) => {
    return (
        <div className="bg-green-500 flex-auto">
            <h1>CardList</h1>
            <Pagination/>
        </div>
    );
};

export default CardList;
