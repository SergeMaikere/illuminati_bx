import { NextResponse } from 'next/server'
import { URL } from 'url'
import prisma from '../../utils/Connect';

const create = async (req: Request): Promise<NextResponse> => {
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
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

export const POST = async req => {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')

    if ( action === 'add' ) return await create(req)
}