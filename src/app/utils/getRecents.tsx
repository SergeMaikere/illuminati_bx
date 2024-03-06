import MyJson from './FakeData.json' assert {type: 'json'}

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

export const getRecents = (): Atricle => JSON.parse(JSON.stringify(MyJson)).data
