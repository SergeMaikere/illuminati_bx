import myJSON from './FakeData.json'
import { pipe, selectProperties, voyeur } from './Helper';
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
    subtitle: string;
}

const myKeys = ['id', 'date', 'category', 'logoSrc', 'logoAlt', 'logoColor', 'author', 'title', 'subtitle' ]

const getRawPopularPosts = (): any[] => JSON.parse(JSON.stringify(myJSON)).data

const setProperties = (datas): Article[] => datas.map( obj => selectProperties(myKeys, obj) )
const setCategoryLogoSrc = (articles: Article[]) => articles.map( obj => ({...obj, logoSrc: getCategory(obj.category).logoSrc}) )
const setCategoryLogoAlt = (articles: Article[]) => articles.map( obj => ({...obj, logoAlt: getCategory(obj.category).logoAlt}) )
const setCategoryLogoColor = (articles: Article[]) => articles.map( obj => ({...obj, logoColor: getCategory(obj.category).textColor}) )

export const getPopular = (): Article[] => pipe( 
    setProperties, 
    setCategoryLogoSrc, 
    setCategoryLogoAlt,
    setCategoryLogoColor
)( getRawPopularPosts() )

