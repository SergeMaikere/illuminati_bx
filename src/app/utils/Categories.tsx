import myJSON from './Categories.json'
import { curry, pipe, voyeur } from './Helper';

type Category = {
    category: string;
    color: string;
    bgColor: string;
    textColor: string;
    logoSrc: string;
    logoAlt: string;
    imgSrc: string;
    imgAlt: string;
    subtitle: string;
    description: string;
}

const getRawCategories = (): Category[] => JSON.parse(JSON.stringify(myJSON)).data
const setCategoriesBg = (categories: Category[]): Category[] => categories.map( category => ({...category, bgColor: `bg-${category.color}-400`}) )
const setCategoriesText = (categories: Category[]): Category[] => categories.map( category => ({...category, textColor: `text-${category.color}-400`}) )


export const getAllCategories = (): Category[] => pipe( setCategoriesBg, setCategoriesText )( getRawCategories())

const getRawCategory = category => getRawCategories().find( obj => obj.category.toLowerCase() === category.toLowerCase() )

const setCategoryBg = (category: Category): Category => ({...category, bgColor: `bg-${category.color}-400`})
const setCategoryText = (category: Category): Category => ({...category, textColor: `text-${category.color}-400`})

export const getCategory = (category): Category => pipe( getRawCategory, setCategoryBg, setCategoryText )( category )