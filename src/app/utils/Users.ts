import { Post } from './Posts';
import { Comment } from './Comments';
import bcrypt from 'bcrypt'
import { app } from './firebase';
import { asyncPipe } from './Helper';
import { getImgUrl } from './mediaHandler';

export type User = {
  id: string;    
  name: string;
  email: string;    
  image: string;
  password: string;
  status: string;
  posts: Post[];
  comment: Comment[];
}

const saltRounds = 10

const hash = async (pswd: string): string => await bcrypt.hash( pswd, saltRounds)

const setPswd = async (user: any): any => {
    const hashed = await hash(user.password)
    return { ...user, password: hashed }
}

const comparePasswords = async (pswd, hash) => ( !pswd || !hash ) ? false : await bcrypt.compare( pswd, hash )

const setUser = asyncPipe( setPswd, getImgUrl )

export const login = async cred => {
    let user = null
    const { email, password } = cred
    user = await getUserByEmail(email)
    const valid = await comparePasswords(password, user?.password)
    return (!user || !valid) ? null : user
}

export const getUserById = async userId => {
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

export const getUserByEmail = async email => {
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
 
export const addUser =  async (user: any) => {
    const newUser = await setUser(user)
    console.log('addUser =>', newUser)
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