import { getImgUrl, getLogoUrl } from './mediaHandler';
import { isString } from './Validation';

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

const setCategoryPics = async category => asyncPipe( getImgUrl, getLogoUrl )

const updateCatImgLogo = async category => {
    let newCat = { ...category }
    if ( !isString(category.image) ) newCat = await getImgUrl(category)
    if ( !isString(category.logo) ) newCat = await getLogoUrl(category)
    return newCat
}

export const getAllCategories = async (): Category[] => {
    const res = await fetch(
        'http://localhost:3000/api/categories?category=all', 
        {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET'
        }
    )
    if ( !res.ok ) throw new Error('Failed')
    return res.json()
}

export const getCategory = async (cat: string): Category => {
    const res = await fetch(
        `http://localhost:3000/api/categories?category=${cat}`, 
        {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET'
        }
    )
    if ( !res.ok ) throw new Error('Failed')
    return res.json()
}

export const createCategory = async category => {
    if (!category) return
    const newCat = await setCategoryPics( category )
    const res = await fetch(
        "http://localhost:3000/api/categories", 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newCat)
        }
    )
    if (!res.ok) throw new Error('Failed creating new category')
    return await res.json()
}

export const updateCategory = async (category, id) => {
    if (!category) return
    const newCat = await updateCatImgLogo( category )
    const res = await fetch(
        `http://localhost:3000/api/categories?category=${id}`, 
        {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newCat)
        }
    )
    if (!res.ok) throw new Error('Failed updating category')
    return await res.json()
}

export const deleteCategory = async catSlug => {
    if (!catSlug) return
    const res = await fetch(
        `http://localhost:3000/api/categories?category=${catSlug}`, 
        {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    if (!res.ok) throw new Error('Failed deleting category')
    return await res.json()
}