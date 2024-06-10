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


const setDate = (comment: any) => ( {...comment, date: faker.date.past().toLocaleDateString()} ) 

const setUserPP = async (comment: any) => {
    const user = await getUserById(comment.user.id)
    return { ...comment, imgSrc: user.image }
}

const setComment = asyncPipe( setDate, setUserPP )

const setComments = async (comments: any[]) => await Promise.all( comments.map(comment => setComment(comment)) )

const getAllComments = async (): any[] => {
    const res = await fetch('https://dummyjson.com/comments?limit=150')
    if ( !res.ok ) throw new Error('Failed')
    const allComms = await res.json()
    return  allComms.comments
}


export const getCommentsById = async (id: string): any[] => {
    const res = await fetch(`https://dummyjson.com/comments/${id}`)
    if ( !res.ok ) throw new Error('Failed')
    return await res.json()
}

export const getCommentsByPostId = async (postId: string): any[] => {
    return 'getCommentsByPostId'
}

export const addComment = async (comm: any) => {
    const res = await fetch(
        'https://dummyjson.com/comments/add',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                userId: comm.userId,
                body:JSON.stringify(comm.body)
            }
        }
    )
    return await res.json()
}
