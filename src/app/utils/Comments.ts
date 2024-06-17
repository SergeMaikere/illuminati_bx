import { faker } from '@faker-js/faker';
import { asyncPipe, asyncVoyeur, voyeur } from './Helper';
import { User, getUserById } from './Users';
import { Post } from './Posts';

export type Comment = {
    id: string;      
    createdAt: string;    
    body: string;
    post: Post;        
    user: User;
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
