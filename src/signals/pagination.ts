import { signal } from '@preact/signals-react';


const page = signal<number>(0)

const dispatch = (action: {type: string} ): void => {
    if ( action.type === 'next' ) page.value = page.value + 1
    if ( action.type === 'prev' ) page.value = page.value - 1
}

export const usePage = () => ({page, dispatch})