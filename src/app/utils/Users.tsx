import { pick } from './Helper';

type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
}

const myKeys = [ 'id', 'firstName', 'lastName', 'age', 'gender', 'email', 'username', 'password', 'birthDate', 'image' ]
 
const setUser = (user: any): User => pick(user, myKeys)

export const getUserById = async (id: number) => {
    const res = await fetch( `https://dummyjson.com/users/${id}` )
    if (!res.ok) throw new Error("Failed")
    const user = await res.json()
    return setUser( user )
}
    