import { Category } from '../../utils/Categories';
import prisma from '../../utils/Connect';
import { NextResponse } from 'next/server'

export const GET = async (): Category[] => {
    try {
        const categories = await prisma.category.findMany({})
        return new NextResponse( JSON.stringify(categories, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}