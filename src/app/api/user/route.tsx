import { NextResponse } from 'next/server'
import { User } from '../../utils/Users';
import { URL } from 'url';
import { except } from '../../utils/Helper';

type NewUser = {
    name: string;
    email: string;    
    image: string;
}

const create = async (req) => {
    const user = await req.json()
    try {
        const res = await prisma.user.create( {data: user, select: {name: true, email: true, image: true,}} )
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}

const getUserByEmail = async (req) => {
    try {
        const { email } = await req.json()
        const user = await prisma.user.findUnique( {where: {email: email}} )
        return new NextResponse( JSON.stringify(user, {status: 200}) )
    } 
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}

const getUserById = async (req) => {
    try {
        const { userId } = await req.json()
        const user = await prisma.user.findUnique( {where: {id: userId}} )
        const sanitizedUser = except(user, ['password'])
        return new NextResponse( JSON.stringify(sanitizedUser, {status: 200}) )
    } 
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}


export const POST = async (req) => {
    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action')

    if ( action === 'create' ) return await create(req)
    if ( action === 'user' ) return await getUserByEmail(req)
    if ( action === 'userId' ) return await getUserById(req)
}

