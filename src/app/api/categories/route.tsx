import prisma from '../../utils/Connect';
import { Category } from '../../utils/Categories';
import { NextResponse } from 'next/server'

const getAllCategories = async (): Promise<NextResponse> => {
    try{
        const res = await prisma.category.findMany({})
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const getCategory = async (cat: string | null): Promise<NextResponse> => {
    try{
        const res = await prisma.category.findUnique(
            {
                where: {slug: cat},
                include: {posts: true}
            }
        )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const create = async (req: Request): Promise<NextResponse> => {
    const category = await req.json()
    try{
        const res = await prisma.category.create( {data: category} )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const update = async (req: Request): Promise<NextResponse> => {
    const { searchParams } = new URL(req.url)
    const category = await req.json()
    try{
        const res = await prisma.category.update(
            {
                where: {id: searchParams.get('category')},
                data: category
            }
        )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const deleteCategory = async (slug: string | null): Promise<NextResponse> => {
    try{
        const res = await prisma.category.delete( {where: {slug: slug}} )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

export const GET = async (req: Request): Promise<NextResponse> => {
    const {searchParams} = new URL(req.url)
    const category = searchParams.get('category')
    const res = category === 'all' ? await getAllCategories() : await getCategory(category) 
    return res
    
}

export const POST = async (req: Request) => await create( req )

export const PUT = async (req: Request) => await update( req )

export const DELETE = async (req: Request): Promise<NextResponse> => {
    const { searchParams } = new URL(req.url)
    return await deleteCategory( searchParams.get('category') ) 
}