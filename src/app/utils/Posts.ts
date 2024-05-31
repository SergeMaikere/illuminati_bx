import { asyncPipe, slugify } from './Helper'
import { getImgUrl } from './mediaHandler';

type Post = {
    id: string;      
    createdAt: string;    
    slug: string;      
    title: string;     
    subtitle: string;
    description: string;
    body: string;
    image: string;
    imageAlt: string;
    catSlug: string;
    cat: Category;
    userEmail: string;
    user: User;    
    views: integer;     
    editorLike: boolean; 
    comments: Comment[];
}



const setTitleSlug = post => ( {...post, slug: slugify(post.title)} )
    
const setNewPost = asyncPipe( getImgUrl, setTitleSlug )

export const getPostById = async (id: string): Post => {
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    if (!res.ok) throw new Error("Failed")
    const post = await res.json()
    return await setPost(post)
}

export const getPostsByCategory = async (category: string): Post[] => {
    if (!category) return
    const res = await fetch(
        "http://localhost:3000/api/post?action=category", 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'applicategoryion/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({cat})
        }
    )
    if (!res.ok) throw new Error('Failed updating post')
    return await res.json()
}

export const updatePostViews = async id => {
    if (!id) return
    const res = await fetch(
        "http://localhost:3000/api/post?action=views", 
        {
            method: 'POST', 
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

export const getPostBySlug = async ( slug: string ): Post[] => {
    if (!slug) return
    const res = await fetch(
        "http://localhost:3000/api/post?action=slug", 
        {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({slug})
        }
    )
    if (!res.ok) throw new Error('Failed finding post')
    return await res.json()
}

export const addPost = async (post: any) => {
    if (!post) return
    const newPost = await setNewPost( post )
    const res = await fetch(
        "http://localhost:3000/api/post?action=create", 
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

