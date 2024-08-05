import { User } from './Users';
import { Post } from './Posts';

export type Comment = {
    id: string      
    createdAt: Date | string | number 
    body: string
    postSlug: string
    post: Post
    userEmail: string       
    user: Partial<User>
}


export const addComment = async (comment: any) => {
    const res = await fetch(
        'http://localhost:3000/api/comments?action=add',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( comment )
        }
    )
    return await res.json()
}
