import { Post } from './Posts';
import { Comment } from './Comments';
import bcrypt from 'bcrypt'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { app } from './firebase';
import { asyncPipe, except, voyeur } from './Helper';

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

const storageCloud = async (file) => {
    const storage =  getStorage(app)
    const storageRef = ref(storage, `images/${new Date().getTime()}${file.name}`)
    const snapshot = await uploadBytes(storageRef, file)
    return await getDownloadURL(snapshot.ref)
}

const setPswd = async (user: any): any => {
    const hashed = await hash(user.password)
    return { ...user, password: hashed }
}

const getImgUrl = async (user: any): any => {
    if (user.image.name === 'undefined') return { ...user, image: process.env.DEFAULT_PP }
    const url = await storageCloud(user.image)
    return { ...user, image: url }
}

const setUser = asyncPipe( setPswd, getImgUrl )

export const login = async cred => {
    let user = null
    const { email, password } = cred
    user = await getUser(email)
    const valid = await comparePasswords(password, user.password)
    return (!user || !valid) ? null : except(user, ['password', 'id'])
}

export const comparePasswords = async (pswd: string, hash: string): boolean => await bcrypt.compare( pswd, hash )

export const getUserById = async id => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if ( !res.ok ) throw new Error('Failed user fetch')
    return res.json()
    
}

export const getUser = async (email)=> {
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
    return res.json()
}
 
export const addUser =  async (user: any) => {
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
    return res.json()
}   