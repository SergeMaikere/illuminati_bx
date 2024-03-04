
type Article = {
    date: string;
    category: string;
    title: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
}

export const getRecents = (): Article[] => [
    {
        date: new Date().toDateString(),
        category: 'Enfer',
        title: "L'Amicale des Echtes Nazis manifeste",
        subtitle: "",
        description: "L'AEN manifeste sont mécontentement face à l'arrivée massive de djihadistes en Enfer.",
        imgSrc: 'nazis.jpg',
        imgAlt: "Nazis manifesting"
    },
    {
        date: new Date().toDateString(),
        category: 'Science',
        title: "That meddling Alex Jones",
        subtitle: "",
        description: "Comment le lanceur d'alerte Alex Jones a empêché le lancement de l'Atrazine, fameuse molecule homosexualisante du Pr Strauss.",
        imgSrc: 'gay_frogs.png',
        imgAlt: "Screaming Alex Jones"
    },
    {
        date: new Date().toDateString(),
        category: 'France',
        title: "La grenouilles de France ne baise pas !",
        subtitle: "- 'Elle est molle et son cœur est rigide et froid' -",
        description: "Énorme baisse de population chez les grenouilles françaises. Le dr Strauss est pointé du doigt malgré la culpabilité évidente des Illuminés de Paris",
        imgSrc: 'french_frog.jpg',
        imgAlt: "Frog contemplating the botomless pit of loneliness that is the human experience"
    }

]