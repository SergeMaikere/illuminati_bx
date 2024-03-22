import { CATEGORIES } from './Categories';
import { asyncPipe, asyncVoyeur, voyeur } from './Helper';
import { faker } from '@faker-js/faker';
import { getUserById } from './Users';

export type Post = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    body: string;
    userId: number;
    userData: {
        name: string;
        username: string;
        email: string;
        imgSrc: string;
    }
    category: string;
    imgSrc: string;
    imgAlt: string;
    tags: string[];
    reactions: string;
}


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
    
const setPost = asyncPipe( setCategory, setDate, setDescription, setSubtitle, setImg, setUser )

const setPosts = async (posts: any[]): Post[] => await Promise.all( posts.map(async (post: any) => await setPost(post)) )

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

