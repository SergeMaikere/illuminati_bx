import type { NextApiResponse } from 'next'
import { getImgUrl, getLogoUrl } from './mediaHandler';
import { isString } from './Validation';
import { Post } from './Posts';
import { asyncPipe, voyeur } from './Helper';

export type Category = {
    id: string      
    slug: string      
    name: string      
    subtitle: string
    description: string
    logo: File | string
    logoAlt: string
    image: File | string
    imageAlt: string
    posts?: Post[]
}

type UpdatedCategory = Partial<Category>

type CategoryColors = { [key: string]: string }

export const BgCategoryColor: CategoryColors = {
    enfer: 'bg-red-600',
    france: 'bg-blue-600',
    cyprien: 'bg-lime-600',
    histoire: 'bg-stone-600',
    mode: 'bg-purple-600',
    science: 'bg-amber-600'
}

export const TextCategoryColor: CategoryColors = {
    enfer: 'text-red-600',
    france: 'text-blue-600',
    cyprien: 'text-lime-600',
    histoire: 'text-stone-600',
    mode: 'text-purple-600',
    science: 'text-orange-600'
}

const setCategoryPics = asyncPipe( getImgUrl, getLogoUrl )

export const getAllCategories = async (): Promise<Category[]> => {
    const res: Response = await fetch(
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
    return await res.json()
}

export const getCategory = async (cat: string | undefined): Promise<Category> => {
    if ( !cat ) throw new Error("No category selected")

    const res: Response = await fetch(
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
    return await res.json()
}

export const createCategory = async (category: Omit<Category, "id" | "posts"> | undefined): Promise<Category> => {
    if (!category) throw new Error("New category is undefined")

    const newCat = await setCategoryPics( category )
    const res: Response = await fetch(
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

export const updateCategory = async (category: UpdatedCategory, id: string): Promise<Category> => {
    if (!category) throw new Error("Update data is undefined")
        
    const newCat = await setCategoryPics( category )
    const res: Response = await fetch(
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

export const deleteCategory = async (catSlug: string): Promise<Category> => {
    if (!catSlug) throw new Error("Category to delete is not selected")

    const res: Response = await fetch(
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