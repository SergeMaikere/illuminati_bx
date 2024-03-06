import myJSON from './FakeData.json'
import { selectProperties } from './Helper';

type Article = {
    id: string;
    date: string;
    author: string;
    title: string;
    category: string;
    imgSrc: string;
    imgAlt: string;
}

const myKeys = [ 'id', 'date', 'title', 'author', 'category', 'imgSrc', 'imgAlt' ]

export const getEditorChoice = (): Article[] => JSON.parse(JSON.stringify(myJSON)).data.map( obj => selectProperties(myKeys, obj) )
