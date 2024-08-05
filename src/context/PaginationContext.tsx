import { createContext, Dispatch, useContext } from 'react'

type PageState = {
    page: number
    dispatch: Dispatch<{type: string}>
}

export const PaginationContext = createContext<PageState>( {page: 0, dispatch: () => {}} )

export const usePage = () => useContext(PaginationContext)
