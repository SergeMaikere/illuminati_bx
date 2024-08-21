import prisma from '../../../utils/Connect';
import { NextResponse } from 'next/server'
import { URL } from 'url';
import { addMonths } from '../../../utils/Helper';

const create = async (req: Request): Promise<NextResponse> => {
    const post = await req.json()
    try {
        const res = await prisma.post.create( {data: post} )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const getPostBySlug = async (slug: string): Promise<NextResponse> => {
    try {
        const res = await prisma.post.findUnique( 
            {
                where: {slug: slug}, 
                include: {
                    comments: {
                        include: { 
                            user: {
                                select: {
                                    name: true,
                                    email: true,
                                    image: true
                                }
                            } 
                        }
                    },
                    user: {
                            select: {
                            name: true,
                            email: true,
                            image: true
                        }
                    }
                }
            } 
        )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const getPostRecent = async (): Promise<NextResponse> => {
    try {
        const res = await prisma.post.findMany( 
            {
                where: {
                    createdAt: { gte: addMonths( new Date(), -4 ) }
                }, 
                include: {
                    user: {
                            select: {
                            name: true,
                            email: true,
                            image: true
                        }
                    }
                }
            } 
        )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const getPopularPosts = async (): Promise<NextResponse> => {
    try {
        const res = await prisma.post.findMany(
            {
                orderBy: {views: 'desc'},
                take: 3,
                include: {
                    user: { select: {name: true} },
                    cat: { 
                        select: {
                            logo: true,
                            logoAlt: true
                        }
                    }
                }
            } 
        )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const getEditorChoice = async (): Promise<NextResponse> => {
    try {
        const res = await prisma.post.findMany(
            {
                where: {editorLike: true},
                include: {
                    user: { select: {name: true} },
                    cat: { 
                        select: {
                            logo: true,
                            logoAlt: true
                        }
                    }
                }
            } 
        )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const updateViews = async (req: Request): Promise<NextResponse> => {
    const { id } = await req.json()
    try {
        const res = await prisma.post.update( 
            {
                where: {id: id}, 
                data:{ 
                    views: {increment: 1}
                }
            } 
        )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const updateEditorLike = async (req: Request): Promise<NextResponse> => {
    const { id, like } = await req.json()
    try {
        const res = await prisma.post.update( 
            {
                where: {id: id}, 
                data:{editorLike: like}
            } 
        )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const updatePost = async (req: Request): Promise<NextResponse> => {
    const { post } = await req.json()
    try {
        const res = await prisma.post.update( 
            {
                where: {id: post.id}, 
                data: post
            } 
        )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug')
    const action = searchParams.get('action')
    if ( slug ) return await getPostBySlug(slug)
    if ( action === 'recent' ) return await getPostRecent()
    if ( action === 'popular' ) return await getPopularPosts()
    if ( action === 'editor' ) return await getEditorChoice()
}

export const POST = async (req: Request) =>  await create(req)

export const PUT = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')
    if ( action === 'views' ) return await updateViews(req)
    if ( action === 'post' ) return await updatePost(req)
    if ( action === 'like' ) return await updateEditorLike(req)
}

export const DELETE = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('postId')
    try {
        const res = await prisma.post.delete( {where: {id: id as string | undefined}} )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

