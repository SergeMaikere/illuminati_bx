'use client'

import { createContext, useContext, useReducer } from 'react'

const initialState: number = 0

const reducer = (state, action ): number => {
    if ( action.type === 'next' ) return state + 1
    if ( action.type === 'prev' ) return state - 1
    return state
}

export const PaginationContext = createContext(null)

export const PaginationProvider = ( {children} ) => {
    return (
        <PaginationContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </PaginationContext.Provider>
    )
}