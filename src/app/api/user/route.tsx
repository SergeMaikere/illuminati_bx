import { NextResponse } from 'next/server'
import { User } from '../../utils/Users';
import { URL } from 'url';
import bcrypt from 'bcrypt'

type NewUser = {
    name: string;
    email: string;    
    image: string;
}

const saltRounds = 10

const hash = async (pswd: string): string => {
    return await bcrypt.hash( pswd, saltRounds, (err, hash) => hash )
}

const comparePasswords = async (pswd: string, hash: string): boolean => {
    return await bcrypt.compare( pswd, hash, (err, result) => result )
}

const login = async (req) => {
    const { email, password } = JSON.parse(req.body)

    const user = await getUser(email)
    if (!user) return new NextResponse( JSON.stringify({message: 'User not found'}, {status: 401}) )

    const valid = await comparePasswords(password, user.password)
    if (!valid) return new NextResponse( JSON.stringify({message: 'Incorrect password'}), {status: 401} )

    return new NextResponse( JSON.stringify(user, {status: 200}) )
}

const getUser = async (req) => {
    try {
        const { email } = JSON.parse(req.body)
        const user = await prisma.user.findUnique( {where: {email: email}} )
        return new NextResponse( JSON.stringify(user, {status: 200} )
    } 
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}

export const GET = async (req) => {
    const {searchParams} = new URL(req.url)
    const login = searchParams.get('login')
    return login === 'true' ? login(req) : getUser(req)
}

export const POST = async (req) => {
    try {
        const user: NewUser = JSON.parse(req.body)
        const hash = hash(user.password)
        const res: User = await prisma.user.create( {data: {...user, password: hash}} )
        return new NextResponse( JSON.stringify(res, {status: 200}) )
    }
    catch (err) {
        return new NextResponse( JSON.stringify(err, {status: 500}) )
    }
}