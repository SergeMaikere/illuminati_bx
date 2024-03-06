import myJSON from './FakeData.json'
import { selectProperties } from './Helper';

type Article = {
    id: string;
    date: string;
    category: string;
    author: string;
    title: string;
    subtitle: string;
}

const myKeys = ['id', 'date', 'category', 'author', 'title', 'subtitle' ]

export const getPopular = (): Article[] => JSON.parse(JSON.stringify(myJSON)).data.map( obj => selectProperties(myKeys, obj) )

