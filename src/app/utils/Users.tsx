import { pick } from './Helper';
import { Post } from './Posts';
import { Comment } from './Comments';

export type User = {
  id: string;    
  name: string;
  email: string;    
  image: string;
  status: string;
  posts: Post[];
  comment: Comment[];
}

const myKeys = [ 'id', 'firstName', 'lastName', 'age', 'gender', 'email', 'username', 'password', 'birthDate', 'image' ]
 
const setUser = (user: any): User => pick(user, myKeys)

export const getUserById = async (id: number) => {
    const res = await fetch( `https://dummyjson.com/users/${id}` )
    if (!res.ok) throw new Error("Failed")
    const user = await res.json()
    return setUser( user )
}
    