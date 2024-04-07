import { pipe, pick, voyeur } from './Helper';
import { getCategory } from './Categories';
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
    logoSrc: string;
    logoAlt: string;
    author: string;
    title: string;
    subtitle: string;
}

const myKeys = ['id', 'date', 'category', 'logoSrc', 'logoAlt', 'author', 'title', 'subtitle' ]

const getRawPopularPosts = (): Post[] => JSON.parse(MyJSON).data

const setProperties = (datas): Article[] => datas.map( obj => pick(obj, myKeys) )
const setCategoryLogoSrc = (articles: Article[]) => articles.map( obj => ({...obj, logoSrc: getCategory(obj.category).logoSrc}) )
const setCategoryLogoAlt = (articles: Article[]) => articles.map( obj => ({...obj, logoAlt: getCategory(obj.category).logoAlt}) )

export const getPopular = (): Article[] => pipe( 
    setProperties, 
    setCategoryLogoSrc, 
    setCategoryLogoAlt,
)( getRawPopularPosts() )

