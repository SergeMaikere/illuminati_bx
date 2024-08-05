"use client"
import { PaginationContext } from '../context/PaginationContext';
import { ReactNode, useReducer } from 'react';

type C = { children: ReactNode }

const reducer = (state: number, action: {type: string} ): number => {
    if ( action.type === 'next' ) return state + 1
    if ( action.type === 'prev' ) return state - 1
    return state
}

const PaginationProvider = ( {children}: C ) => {

    const initialState = 0

    const [ page, dispatch ] = useReducer(reducer, initialState)

    return (
        <PaginationContext.Provider value={ {page, dispatch} }>
            {children}
        </PaginationContext.Provider>
    )
}

export default PaginationProvider