import { Post } from './Posts';
import { Comment } from './Comments';
import bcrypt from 'bcrypt'
import { app } from './firebase';
import { asyncPipe } from './Helper';
import { getImgUrl } from './mediaHandler';

export type User = {
  id: string    
  name: string
  email: string  
  emailVerified: Date  
  image: string | null
  password: string
  role: 'USER' | 'WRITER' | 'EDITOR' | 'ADMIN'
  posts: Post[]
  comment: Comment[]
}

export type Credentials = {
    email: string
    password: string
}

const saltRounds = 10

const hash = async (pswd: string): Promise<string> => await bcrypt.hash( pswd, saltRounds)

const setPswd = async (user: Partial<User>): Promise<Partial<User>> => {
    const hashed = await hash(user.password!)
    return { ...user, password: hashed }
}

const comparePasswords = async (pswd: string, hash: string): Promise<boolean> => ( !pswd || !hash ) ? false : await bcrypt.compare( pswd, hash )

const setUser = asyncPipe( setPswd, getImgUrl )

export const login = async (cred: Credentials): Promise<Partial<User> | null> => {
    let user = null
    const { email, password } = cred
    user = await getUserByEmail(email)
    const valid = await comparePasswords(password, user.password!)
    return (!user || !valid) ? null : user
}

export const getUserById = async (userId: string): Promise<Partial<User>> => {
    const res = await fetch(
        `http://localhost:3000/api/user?action=userId`,
        {
            method: 'POST',
            body: JSON.stringify( {userId} ),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    if (!res.ok) throw new Error('User not found')
    return await res.json()
}

export const getUserByEmail = async (email: string): Promise<Partial<User>> => {
    const res = await fetch(
        "http://localhost:3000/api/user?action=user", 
        {
            method: 'POST', 
            body: JSON.stringify( {email} ),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    if (!res.ok) throw new Error('User not found')
    return await res.json()
}
 
export const addUser =  async (user: Partial<User>): Promise<Partial<User>> => {
    const newUser = await setUser(user)
    const res = await fetch(
        "http://localhost:3000/api/user?action=create", 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newUser)
        }
    )
    if (!res.ok) throw new Error('SignIn Failed')
    return await res.json()
}   