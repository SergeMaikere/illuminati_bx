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

const getPostBySlug = async (req) => {
    const { slug } = await req.json()
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

const getPostsByCategory = async req => {
    const category = await req.json()
    try{
        const res = prisma.post.findMany( 
            {
                where: {catslug: category},
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

export const POST = async req => {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')
    if ( action === 'create' ) return await create(req)
    if ( action === 'slug' ) return await getPostBySlug(req)
    if ( action === 'views' ) return await updateViews(req)
    if ( action === 'category' ) return await getPostsByCategory(req)
}

