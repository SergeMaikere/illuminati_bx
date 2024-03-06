import React, { PropTypes } from 'react';
import Button from '../button/Button';

const Pagination = ({ className }) => {
    return (
        <div className="flex justify-between">
            <Button buttonText="Précédent"/>
            <Button buttonText="Suivant"/>
        </div>
    );
};

export default Pagination;
