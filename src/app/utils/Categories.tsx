import myJSON from './Categories.json'
import { curry, pipe, voyeur } from './Helper';

type Category = {
    id: number;
    category: string;
    logoSrc: string;
    logoAlt: string;
    imgSrc: string;
    imgAlt: string;
    subtitle: string;
    description: string;
}

export const BgCategoryColor = {
    enfer: 'bg-red-600',
    france: 'bg-blue-600',
    cyprien: 'bg-lime-600',
    histoire: 'bg-stone-600',
    mode: 'bg-purple-600',
    science: 'bg-amber-600'
}

export const TextCategoryColor = {
    enfer: 'text-red-600',
    france: 'text-blue-600',
    cyprien: 'text-lime-600',
    histoire: 'text-stone-600',
    mode: 'text-purple-600',
    science: 'text-orange-600'
}

export const getAllCategories = (): Category[] => JSON.parse(JSON.stringify(myJSON)).data

export const getCategory = category => getAllCategories().find( obj => obj.category.toLowerCase() === category.toLowerCase() )

