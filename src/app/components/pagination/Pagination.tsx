"use client"
import React, { PropTypes, useContext } from 'react';
import Button from '../button/Button';
import { PaginationContext } from '../../../context/PaginationContext';

const Pagination = (props) => {

    const [ state, dispatch ] = useContext( PaginationContext )

    const handlePrev = () => state < 0 ? dispatch({type: "here"}) : dispatch({type: "prev"})
    const handleNext = () => state < props.length - 1 ? dispatch({type: "next"}) : dispatch({type: "here"})

    return (
        <div className="flex justify-between">
            <Button handleClick={handlePrev} buttonText="Précédente"/>
            <Button handleClick={handleNext} buttonText="Suivante"/>
        </div>
    );
};

export default Pagination;
