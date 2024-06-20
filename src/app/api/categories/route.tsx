import prisma from '../../utils/Connect';
import { Category } from '../../utils/Categories';
import { NextResponse } from 'next/server'

const getAllCategories = async (): Category[] => await prisma.category.findMany({})

const getCategory = async (cat: string): Category => {
    return await prisma.category.findUnique(
        {
            where: {slug: cat},
            include: {posts: true}
        }
    )
}

const create = async req => {
    const category = await req.json()
    try{
        const res = await prisma.category.create( {data: category} )
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}

const update = async req => {
    const { searchParams } = new URL(req.url)
    const category = await req.json()
    try{
        const res = await prisma.category.update(
            {
                where: {id: searchParams.get('category')},
                data: category
            }
        )
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}

const deleteCategory = async (slug) => {
    try{
        const res = await prisma.category.delete( {where: {slug: slug}} )
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
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

export const POST = async req => await create( req )

export const PUT = async req => await update( req )

export const DELETE = async req => {
    const { searchParams } = new URL(req.url)
    return await deleteCategory( searchParams.get('category') ) 
}