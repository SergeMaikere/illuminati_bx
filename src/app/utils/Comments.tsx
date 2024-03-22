import { faker } from '@faker-js/faker';
import { asyncPipe, asyncVoyeur, voyeur } from './Helper';
import { getUserById } from './Users';

type Comment = {"id":1,
    body: string;
    postId: string;
    date: string;
    user: {
        id: string;
        username: string;
        imgSrc: string;
    }
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
    const comments = await getAllComments()
    const postComms = comments.filter( comm => comm.postId === postId )
    return await setComments(postComms)
}

export const addComment = async (postId, userId, data) => {
    const res = await fetch(
        'https://dummyjson.com/comments/add',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                postId: post.id,
                userId: post.userId,
                body:JSON.stringify(formData)
            }
        }
    )
    return await res.json()
}
