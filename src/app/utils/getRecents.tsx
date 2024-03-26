import { pick, voyeur } from './Helper'
import MyJSON from './FakeData';

type Post = {
    id: string;
    date: string;
    category: string;
    author: string;
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
}

type Article = {
    id: string;
    date: string;
    category: string;
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
}

const getRawRecentPosts= (): Post[] => JSON.parse(MyJSON).data
const myKeys = ['id', 'date', 'category', 'title', 'subtitle', 'description', 'imgSrc', 'imgAlt' ]
const setProperties = (datas): Article[] => datas.map( obj => pick(obj, myKeys) )

export const getRecents = () => setProperties( getRawRecentPosts() )