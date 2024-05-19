import { asyncPipe, asyncVoyeur, voyeur } from './Helper'
import { faker } from '@faker-js/faker'
import { getUserById } from './Users'
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

const CATEGORIES = [ 'mode', 'histoire', 'science', 'mode', 'cyprien', 'enfer' ]

const getRandomCategory = (): string => CATEGORIES[ Math.floor(Math.random() * CATEGORIES.length) ]

const setCategory = (post: any) => 'category' in post ? {...post} : {...post, category: getRandomCategory()} 

const setCategories = (posts: any[]): any[] => posts.map( post => setCategory(post) )  

const setDate = (post: any) => ( {...post, date: faker.date.past().toLocaleDateString()})

const setSubtitle = post => ({...post, subtitle: faker.lorem.sentence()})

const setDescription = post => ({...post, description: faker.lorem.sentence({ min: 10, max: 20 })})

const setImg = async (post: Post) => {
    const img = await getImgSrc(post.id)
    return {...post, imgSrc: img.url, imgAlt: img.title}

}

const getImgSrc = async (id:number): string => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    if (!res.ok) throw new Error("Failed")
    return await res.json()
}

const setUser = async (post: any) => {
    const user = await getUserById(post.userId)
    return {...post, userData: {firstName: user.firstName, lastName: user.lastName, username: user.username, imgSrc: user.image}}
}

const getAllPosts = async (): any[] => {
    const res = await fetch('https://dummyjson.com/posts?limit=100')
    if (!res.ok) throw new Error("Failed")
    const res1 = await res.json()
    return await setCategories(res1.posts)

}

const setTitleSlug = post => ( {...post, slug: post.title.toLowerCase().split(' ').join('_')} )
    
const setPost = asyncPipe( setCategory, setDate, setDescription, setSubtitle, setImg, setUser )

const setPosts = async (posts: any[]): Post[] => await Promise.all( posts.map(async (post: any) => await setPost(post)) )

const setNewPost = asyncPipe( getImgUrl, setTitleSlug )

export const getPostById = async (id: string): Post => {
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    if (!res.ok) throw new Error("Failed")
    const post = await res.json()
    return await setPost(post)
}

export const getPostsByCategory = async (cat: string): Post[] => {
    const allPosts = await getAllPosts()
    const posts = allPosts.filter( post => post.category === cat )
    return await setPosts( posts )
}

export const addPost = async (post: any) => {
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
    if (!res.ok) throw new Error('Failed posting new post')
    return await res.json()
}

