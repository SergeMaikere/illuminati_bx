import { signal } from '@preact/signals-react';

const getFromLocalStorage = (): string => {
    if ( typeof window === 'undefined' ) return 'false'
    return localStorage.getItem('theme') || 'false'
}

export const theme = signal<string>( getFromLocalStorage() )

