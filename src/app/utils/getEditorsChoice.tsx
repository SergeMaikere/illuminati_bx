import myJSON from './FakeData.json'
import { pipe, pick } from './Helper';
import { getCategory } from './Categories';

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
    imgSrc: string;
    imgAlt: string;
}

const myKeys = [ 'id', 'date', 'title', 'author', 'category', 'logoSrc', 'logoAlt', 'imgSrc', 'imgAlt' ]

const getRawEditorPosts = (): Post[] => JSON.parse(JSON.stringify(myJSON)).data

const setProperties = (datas): Article[] => datas.map( obj => pick(obj, myKeys) )
const setCategoryLogoSrc = (articles: Article[]) => articles.map( obj => ({...obj, logoSrc: getCategory(obj.category).logoSrc}) )
const setCategoryLogoAlt = (articles: Article[]) => articles.map( obj => ({...obj, logoAlt: getCategory(obj.category).logoAlt}) )


export const getEditorChoice = (): Article[] => pipe( 
    setProperties, 
    setCategoryLogoSrc, 
    setCategoryLogoAlt,
)( getRawEditorPosts() )
