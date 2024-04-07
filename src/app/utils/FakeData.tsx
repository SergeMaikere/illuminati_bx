import { faker } from '@faker-js/faker';
import { pipe, voyeur } from './Helper';

const posts = [
    {
        id: "",
        date: "",
        category: "Science",
        author: "Pr Strauss",
        title: "That Meddling Alex Jones!",
        subtitle: "Comment Alex Jones a empêché la gayification de l'Amerique",
        description: "Une histoire de lanceurs d'alertes, de chimie gay...et de grenouilles.",
        imgSrc: "/gay_frogs.jpg",
        imgAlt: "Screaming Alex Jones"
    },
    {
        id: "",
        date: "",
        category: "Enfer",
        author: "L'interne",
        title: "Manifestation de l'Amicale des Nazis d'Outre-Tombe.",
        subtitle: " 'On est plus chez nous!'",
        description: "L'arrivée massive de djihadistes ne fait pas que des heureux en Enfer, à part pour les démons, qui pronostiquent un de leurs meilleurs trimestres.",
        imgSrc: "/nazis.jpg",
        imgAlt: "Nazis manifesting"
    },
    {
        id: "",
        date: "",
        category: "France",
        author: "Acolyte Meneer",
        title: "Disparitions des grenouilles en France!",
        subtitle: "Pr Strauss pointé du doigt",
        description: "'Abondance d'amphibiens homosexuels n'est pas preuve de complots. Tous mes labos sont à Wuhan de toute façon'. -Pr Strauss",
        imgSrc: "/french_frog.jpg",
        imgAlt: "Frog contemplating the botomless pit of loneliness that is the human experience"
    },
    {
        id: "",
        date: "",
        category: "Cyprien",
        author: "Cyprien",
        title: "Pragmatisme et Surpopulation:",
        subtitle: "je dis cannibalisme et bon geuleton",
        description: "Cyprien le Reptilien rentre dans une analyse exhaustive des difficultés et avantages du cannibalisme social et propose même quelques recettes.",
        imgSrc: "/cannibal.jpg",
        imgAlt: "Butcher cutting throufgh what I hope is animal meat"
    },
    {
        id: "",
        date: "",
        category: "Histoire",
        author: "Acolyte Meneer",
        title: "MK UKLTRA",
        subtitle: "'C'était juste pour rire quoi...et puis lundi...Approuvé",
        description: "Ce qui n'était sensé être qu'une blague entre collègues prend des proportions inattendues...",
        imgSrc: "/mk_ultra.jpg",
        imgAlt: "Profile of a face with see-through skull"
    },
    {
        id: "",
        date: "",
        category: "Mode",
        author: "Cyprien",
        title: "Une journée pour dire merci aux pauvres",
        subtitle: "Parce que sans eux on serait pas riche",
        description: "Bildeveerd dans la controverse avec cette nouvelle initiative qui s'inscrit dans une démarche de gratitude et d'élévation spirituelle",
        imgSrc: "/wealthy.jpg",
        imgAlt: "Whealthy man enjoying a drink and a cigar"
    }
]


const setPosts = (posts: any[]) => posts.map( post => setPost(post) )

const setDate = (post: any) => ( {...post, date: faker.date.past().toLocaleDateString()})

const setId = (post: any) => ( {...post, id: faker.string.alphanumeric(16)} )

const setPost = pipe( setDate, setId )

const MyJSON = JSON.stringify( {data: setPosts(posts)} )

voyeur(MyJSON)

export default MyJSON