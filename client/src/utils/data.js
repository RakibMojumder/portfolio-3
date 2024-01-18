
import html from '../assets/skill-img/html.png'
import js from '../assets/skill-img/js.png';
import css from '../assets/skill-img/css.png'
import redux from '../assets/skill-img/redux.png'
import react from '../assets/skill-img/react.png'
import next from '../assets/skill-img/next.png'
import node from '../assets/skill-img/node.png'
import mongodb from '../assets/skill-img/MongoDB.png'
import firebase from '../assets/skill-img/firebase.png'
import git from '../assets/skill-img/git.png'
import github from '../assets/skill-img/github.png'
import netlify from '../assets/skill-img/netlify.svg'
import vercel from '../assets/skill-img/vercel.png'
import express from '../assets/skill-img/express.png'
import figma from '../assets/skill-img/Figma.png'
import passport from '../assets/skill-img/passport.png'
import jwt from '../assets/skill-img/jwt.png'
import tailwind from '../assets/skill-img/Tailwind.png'
import bootstrap from '../assets/skill-img/Bootstrap.png'
import styledComponents from '../assets/skill-img/styled.jpg';
import typeScript from '../assets/skill-img/typeScript.jpg'
import material from '../assets/skill-img/material.png';

// NAV ITEMS
import { AiFillFolderOpen, AiFillFileImage } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiListSettingsFill, RiContactsLine } from "react-icons/ri";

export const skillsData = [
    {
        id: 1,
        name: 'HTML',
        img: html,
        label: 'Frontend'
    },
    {
        id: 2,
        name: 'CSS',
        img: css,
        label: 'Frontend'
    },
    {
        id: 3,
        name: 'Bootstrap',
        img: bootstrap,
        label: 'Frontend'
    },
    {
        id: 4,
        name: 'Tailwind CSS',
        img: tailwind,
        label: 'Frontend'
    },
    {
        id: 5,
        name: 'Styled Component',
        img: styledComponents,
        label: 'Frontend'
    },
    {
        id: 6,
        name: 'JavaScript',
        img: js,
        label: 'Frontend'
    },
    {
        id: 7,
        name: 'React JS',
        img: react,
        label: 'Frontend'
    },
    {
        id: 8,
        name: 'Redux',
        img: redux,
        label: 'Frontend'
    },
    {
        id: 9,
        name: 'Next JS',
        img: next,
        label: 'Frontend'
    },
    {
        id: 10,
        name: 'Node',
        img: node,
        label: 'Backend'
    },
    {
        id: 11,
        name: 'Express',
        img: express,
        label: 'Backend'
    },
    {
        id: 12,
        name: 'JWT',
        img: jwt,
        label: 'Backend'
    },
    {
        id: 13,
        name: 'Passport',
        img: passport,
        label: 'Backend'
    },
    {
        id: 14,
        name: 'MongoDB',
        img: mongodb,
        label: 'Database'
    },
    {
        id: 15,
        name: 'Firebase',
        img: firebase,
        label: 'Frontend'
    },
    {
        id: 16,
        name: 'Git',
        img: git,
        label: 'Tools'
    },
    {
        id: 17,
        name: 'Github',
        img: github,
        label: 'Tools'
    },
    {
        id: 18,
        name: 'Netlify',
        img: netlify,
        label: 'Tools'
    },
    {
        id: 19,
        name: 'Vercel',
        img: vercel,
        label: 'Tools'
    },
    {
        id: 20,
        name: 'Figma',
        img: figma,
        label: 'Tools'
    },
    {
        id: 21,
        name: 'TypeScript',
        img: typeScript,
        label: 'Frontend'
    },
    {
        id: 22,
        name: 'Material UI',
        img: material,
        label: 'Frontend'
    }
]

export const projects = [
    {
        id: 1,
        name: 'Quiziti',
        description: '- A course & quiz related mern stack project',
        sourceCode: [{ name: 'Live', link: '' }, { name: 'Client', link: '' }, { name: 'Server', link: '' }],
        features: ['A user can purchase courses here and learn programming related topics.', 'A user also can test his programming knowledge by giving the quiz exam on multiple topics.', 'Private route and JWT Authentication have been implemented.'],
        technology: {
            title: 'Technology', label: 'React | Tailwind CSS | Express JS | MongoBD | Passport JS | Context API | Stripe'
        }
    },
    {
        id: 2,
        name: 'Best Buy',
        description: '- Used laptop buy and sale related E-commerce website',
        sourceCode: [{ name: 'Live', link: '' }, { name: 'Client', link: '' }, { name: 'Server', link: '' }],
        features: ['Users can filter products by categories and can buy products and give reviews. As a payment system stripe is used here.', 'An admin can verify a user or seller & a user or seller can be an admin if an admin allows also an admin can remove a user or seller.', 'A seller can add or remove products and also can see who bought his products.'],
        technology: {
            title: 'Technology', label: 'React | Tailwind CSS | Express JS | MongoDB | Firebase | Stripe'
        }
    },
    {
        id: 3,
        name: 'Rakib Consultancy',
        description: '- Law & tax related services website',
        sourceCode: [{ name: 'Live', link: '' }, { name: 'Client', link: '' }, { name: 'Server', link: '' }],
        features: ['There are multiple services a user can take one or more services.', 'A user has to log in if he wants to add new services.', 'Users can give, add and remove their reviews and also see what others say.'],
        technology: {
            title: 'Technology', label: 'React | Tailwind CSS | Express JS | MongoDB | Firebase'
        }
    },
]

export const navItems = [
    { id: 1, href: "home", label: "Home", icon: BiHomeSmile },
    { id: 2, href: "about", label: "About", icon: FaRegUserCircle },
    { id: 3, href: "project", label: "Project", icon: AiFillFolderOpen },
    { id: 4, href: "skills", label: "Skills", icon: RiListSettingsFill },
    { id: 5, href: "services", label: "Services", icon: AiFillFileImage },
    { id: 6, href: "contact", label: "Contact", icon: RiContactsLine },
];