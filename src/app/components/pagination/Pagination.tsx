"use client"
import React, { useContext } from 'react';
import Button from '../button/Button';
import { usePage } from '../../../context/PaginationContext';

type L = { length: number }

const Pagination: React.FC<L> = ({length}) => {

    const { page, dispatch } = usePage()

    const handlePrev = () => page <= 0 ? dispatch({type: "here"}) : dispatch({type: "prev"})
    const handleNext = () => page < length - 1 ? dispatch({type: "next"}) : dispatch({type: "here"})

    return (
        <div className="flex justify-between">
            <Button type="button" handleClick={handlePrev} children="Précédente"/>
            <Button type="button" handleClick={handleNext} children="Suivante"/>
        </div>
    );
};

export default Pagination;
