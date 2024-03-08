import myJSON from './FakeData.json'
import { pipe, selectProperties } from './Helper';
import { getCategory } from './Categories';

type Article = {
    id: string;
    date: string;
    category: string;
    logoSrc: string;
    logoAlt: string;
    logoColor: string;
    author: string;
    title: string;
    imgSrc: string;
    imgAlt: string;
}

const myKeys = [ 'id', 'date', 'title', 'author', 'category', 'logoSrc', 'logoAlt', 'logoColor', 'imgSrc', 'imgAlt' ]

const getRawEditorPosts = (): any[] => JSON.parse(JSON.stringify(myJSON)).data

const setProperties = (datas): Article[] => datas.map( obj => selectProperties(myKeys, obj) )
const setCategoryLogoSrc = (articles: Article[]) => articles.map( obj => ({...obj, logoSrc: getCategory(obj.category).logoSrc}) )
const setCategoryLogoAlt = (articles: Article[]) => articles.map( obj => ({...obj, logoAlt: getCategory(obj.category).logoAlt}) )
const setCategoryLogoColor = (articles: Article[]) => articles.map( obj => ({...obj, logoColor: getCategory(obj.category).textColor}) )


export const getEditorChoice = (): Article[] => pipe( 
    setProperties, 
    setCategoryLogoSrc, 
    setCategoryLogoAlt,
    setCategoryLogoColor 
)( getRawEditorPosts() )
