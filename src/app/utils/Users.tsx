import { Post } from './Posts';
import { Comment } from './Comments';

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

export const login = async (cred: any) => {
    const res = await fetch(
        'http://localhost:3000/api/user?login=true',
        {
            method: 'GET',
            body: JSON.stringify(credentials),
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            }
        }
    )
    if (!res.ok) return null
    return res.json()           
}

export const getUser = async (email: string): User => {
    const res = await fetch(
        "http://localhost:3000/api/user?login=false", 
        {
            method: 'GET', 
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
    const res = await fetch(
        "http://localhost:3000/api/user", 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        }
    )
    if (!res.ok) throw new Error('SignIn Failed')
    return res.json()
}   