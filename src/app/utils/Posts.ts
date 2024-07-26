import { asyncPipe, slugify } from './Helper'
import { getImgUrl } from './mediaHandler';
import { Category } from './Categories';
import { User } from './Users';

export type Post = {
    id: string      
    createdAt: string    
    slug: string      
    title: string     
    subtitle: string
    description: string
    body: string
    image: string
    imageAlt: string
    catSlug: string
    cat: Category
    userEmail: string
    user: User    
    views: number     
    editorLike: boolean 
    comments: Comment[]
}



const setTitleSlug = (post: Partial<Post>): Partial<Post> => ( {...post, slug: slugify(post.title)} )
    
const setNewPost = asyncPipe( getImgUrl, setTitleSlug )

export const updatePostViews = async (id: string | undefined): Promise<Post> => {
    if (!id) throw new Error('Wrong request')
    const res = await fetch(
        "http://localhost:3000/api/post?action=views", 
        {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({id})
        }
    )
    if (!res.ok) throw new Error('Failed updating post')
    return await res.json()
}

export const updateEditorLike = async (id: string, like: boolean): Promise<Post> => {
    const res = await fetch(
        "http://localhost:3000/api/post?action=like", 
        {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({id, like})
        }
    )
    if (!res.ok) throw new Error('Failed updating post')
    return await res.json()
}

export const updatePost = async (post: Partial<Post>): Promise<Post> => {
    const res = await fetch(
        "http://localhost:3000/api/post?action=post", 
        {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(post)
        }
    )
    if (!res.ok) throw new Error('Failed updating post')
    return await res.json()
}

export const getPostBySlug = async ( slug: string ): Promise<Post> => {
    if (!slug) throw new Error('Wrong request')
    const res = await fetch(
        `http://localhost:3000/api/post?slug=${slug}`, 
        {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    if (!res.ok) throw new Error('Failed finding post')
    return await res.json()
}

export const getRecentPosts = async (): Promise<Post[]> => {
    const res = await fetch(
        "http://localhost:3000/api/post?action=recent", 
        {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }
    )
    if (!res.ok) throw new Error('Failed retrieving posts')
    return await res.json()
}

export const getPopularPosts = async (): Promise<Post[]> => {
    const res = await fetch(
        "http://localhost:3000/api/post?action=popular", 
        {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    if (!res.ok) throw new Error('Failed retrieving posts')
    return await res.json()
}

export const getEditorChoice = async (): Promise<Post[]> => {
    const res = await fetch(
        "http://localhost:3000/api/post?action=editor", 
        {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    if (!res.ok) throw new Error('Failed retrieving posts')
    return await res.json()
}

export const addPost = async (post: Partial<Post>): Promise<Post> => {
    if (!post) throw new Error('Wrong request')
    const newPost = await setNewPost( post )
    const res = await fetch(
        "http://localhost:3000/api/post", 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newPost)
        }
    )
    if (!res.ok) throw new Error('Failed creating new post')
    return await res.json()
}

