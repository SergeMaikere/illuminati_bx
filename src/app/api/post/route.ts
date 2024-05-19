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
    console.log('POST : ', slug)
    try {
        const res = await prisma.post.findUnique( {where: {slug: slug}} )
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}

export const POST = async (req) => {
    console.log('POST => ')
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')
    if ( action === 'create' ) return await create(req)
    if ( action === 'slug' ) return await getPostBySlug(req)
}

