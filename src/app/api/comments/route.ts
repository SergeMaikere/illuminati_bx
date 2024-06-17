import { NextResponse } from 'next/server'
import { URL } from 'url'

const create = async req => {
    const comment = await req.json()
    try{
        const res = await prisma.comment.create( 
            {
                data: comment,
                include: {
                    user: {
                        select: {
                            name: true,
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

    if ( action === 'add' ) return await create(req)
}