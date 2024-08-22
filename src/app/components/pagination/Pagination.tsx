"use client"
import Button from '../button/Button';
import { useSignals } from '@preact/signals-react/runtime';
import { usePage } from '../../../signals/pagination';

type L = { length: number }

const Pagination = ({length}: L) => {
    useSignals()
    
    const { page, dispatch } = usePage()

    const handlePrev = () => page.value <= 0 ? dispatch({type: "here"}) : dispatch({type: "prev"})
    const handleNext = () => page.value < length - 1 ? dispatch({type: "next"}) : dispatch({type: "here"})

    return (
        <div className="flex justify-between">
            <Button type="button" handleClick={handlePrev} children="Précédente"/>
            <Button type="button" handleClick={handleNext} children="Suivante"/>
        </div>
    );
};

export default Pagination;
