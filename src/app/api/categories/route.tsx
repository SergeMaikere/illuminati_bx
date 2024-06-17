import prisma from '../../utils/Connect';
import { Category } from '../../utils/Categories';
import { NextResponse } from 'next/server'
import { voyeur } from '../../utils/Helper';

const getAllCategories = async (): Category[] => await prisma.category.findMany({})

const getCategory = async (cat: string): Category => {
    return await prisma.category.findUnique(
        {
            where: {slug: cat},
            include: {posts: true}
        }
    )
}

export const GET = async (req): any => {
    const {searchParams} = new URL(req.url)
    const category = searchParams.get('category')
    try {
        const res = category === 'all' ? await getAllCategories() : await getCategory(category) 
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}