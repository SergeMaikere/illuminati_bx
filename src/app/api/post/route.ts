import { NextResponse } from 'next/server'
import { URL } from 'url';


const create = async (req) => {
    const post = await req.json()
    try {
        const res = await prisma.post.create( {data: post} )
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}

const getPostBySlug = async slug => {
    try {
        const res = await prisma.post.findUnique( 
            {
                where: {slug: slug}, 
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
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}

const updateViews = async req => {
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
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}

const updateEditorLike = async req => {
    const { id, like } = await req.json()
    try {
        const res = await prisma.post.update( 
            {
                where: {id: id}, 
                data:{editorLike: like}
            } 
        )
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}

const updatePost = async req => {
    const { post } = await req.json()
    try {
        const res = await prisma.post.update( 
            {
                where: {id: post.id}, 
                data: post
            } 
        )
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}


export const GET = async req => {
    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug')
    return await getPostBySlug(slug)
}

export const POST = async req => {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')
    if ( action === 'create' ) return await create(req)
    if ( action === 'slug' ) return await getPostBySlug(req)
    if ( action === 'views' ) return await updateViews(req)
}

export const PUT = async req => {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')
    if ( action === 'views' ) return await updateViews(req)
    if ( action === 'post' ) return await updatePost(req)
    if ( action === 'like' ) return await updateEditorLike(req)
}

export const DELETE = async req => {
    const id = await req.json()
    try {
        const res = await prisma.post.delete( {where: {id: id}} )
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}
