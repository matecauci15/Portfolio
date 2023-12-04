import {repartienda, rickymorty, asc, pokemon } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    // nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    // sass,
    tailwindcss,
    // typescript,
    postgreSQL,
    sequelize
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: postgreSQL,
        name: "PostreSQL",
        type: "Database",
    },
    {
        imageUrl: sequelize,
        name: "Sequelize",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
];

export const experiences = [
    {
        title: "Manager",
        company_name: "ReparTienda",
        icon: repartienda,
        iconBg: "#B7FBCB",
        date: "Mar 2020 - Jan 2023",
        points: [
            "Controlled costs and optimized spending via restructuring of budgets for labor, capital assets, inventory purchasing and technology upgrades.",
        ],
    },
    {
        title: "Community manager",
        company_name: "Grupo ASC",
        icon: asc,
        iconBg: "#637C79",
        date: "Aug 2023",
        points: [
            "Implementing digital strategy to make a better user experience while browsing our social media pages.",
            "Building and maintaining direct communication channels with producers to ensure a clear understanding of their needs.",
            "Direct contact with customers for travel insurance quotations.",
        ],
    },
    {
        title: "Full stack developer",
        company_name: "soyHenry Bootcamp",
        icon: pricewise,
        iconBg: "#EEEF00",
        date: "Aug 2023",
        points: [
            "Developed a simple page application that is a solution designed to address the challenge of rising prices on major e-commerce platforms in Latin America. This page allows users to enjoy new things by swapping new or used items with others on the platform."
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/matecauci15',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mateo-caucino/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'LoCanjeamos',
        description: 'Developed a simple page application that is a solution designed to address the challenge of rising prices on major e-commerce platforms in Latin America. This page allows users to enjoy new things by swapping new or used items with others on the platform',
        link: 'https://github.com/LoCanjeamos/LoCanjeamos',
    },
    {
        iconUrl: pokemon,
        theme: 'btn-back-red',
        name: 'Pokemon SPA',
        description: 'Cerated a Single Page Application using different technologies, such as React, Redux, Express, Sequelize',
        link: 'https://github.com/matecauci15/PI-Pokemon',
    },
    {
        iconUrl: rickymorty,
        theme: 'btn-back-black',
        name: 'Rick and Morty',
        description: 'Created a full-stack rick and morty web fetching all the info from the rickandmorty api. You can find information about any character just by introducing an ID',
        link: 'https://github.com/matecauci15/Rick-y-Mort-M3',
    },
];