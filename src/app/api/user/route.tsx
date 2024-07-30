import prisma from '../../utils/Connect';
import { NextResponse } from 'next/server'
import { User } from '../../utils/Users';
import { URL } from 'url';
import { except } from '../../utils/Helper';


const create = async (req: Request): Promise<NextResponse> => {
    const user = await req.json()
    try {
        const res = await prisma.user.create( {data: user, select: {name: true, email: true, image: true,}} )
        return new NextResponse( JSON.stringify(res) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const getUserByEmail = async (req: Request): Promise<NextResponse> => {
    try {
        const { email } = await req.json()
        const user = await prisma.user.findUnique( {where: {email: email}} )
        return new NextResponse( JSON.stringify(user) )
    } 
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}

const getUserById = async (req: Request): Promise<NextResponse> => {
    try {
        const { userId } = await req.json()
        const user = await prisma.user.findUnique( {where: {id: userId}} )
        const sanitizedUser = except(user, ['password'])
        return new NextResponse( JSON.stringify(sanitizedUser) )
    } 
    catch (err) {
        return new NextResponse( JSON.stringify(err) )
    }
}


export const POST = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')

    if ( action === 'create' ) return await create(req)
    if ( action === 'user' ) return await getUserByEmail(req)
    if ( action === 'userId' ) return await getUserById(req)
}

