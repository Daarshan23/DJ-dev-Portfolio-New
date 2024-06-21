export interface IProject {
    title: string
    description: string
    technologies: string[]
    github: string | null
    demo: string | null
    image: string
}

export const ProjectsData: IProject[] = [
    {
        title: 'Anime Vault - Next.js Project',
        description: `Anime Vault is a dynamic anime discovery platform built with Next.js, featuring infinite scrolling and real-time data integration via the Shikimori API. This project offers a seamless user experience, allowing anime enthusiasts to explore and browse an extensive list of anime titles effortlessly. Key features include server-side rendering for fast initial loads, client-side fetching for continuous content updates, and a responsive design for optimal viewing across devices.`,
        technologies: [
            'HTML',
            'Scss',
            'Next.js',
            'React',
            'Javascript',
            'Redux(toolkit)',
            'Axios',
        ],
        github: '',
        demo: 'https://ainme-info-dj-dev.vercel.app/',
        image: 'https://i.postimg.cc/28y8NGNt/anime.png',
    },
    {
        title: 'SnapCode - React.js Project',
        description: `SnapCode is a versatile code snippet management platform built with React.js, designed to support multiple programming languages. This project allows users to write, save, and export code snippets effortlessly. Key features include syntax highlighting for various languages, user-friendly code editor, and a gallery for managing saved snippets. This project allowed me to gain experience with React.js        .`,
        technologies: [
            'React',
            'Redux(toolkit)',
            'HTML',
            'Scss',
            'Typescript',
            'Axios',
        ],
        github: '',
        demo: 'https://snap-code-psi.vercel.app/',
        image: '',
    },
    {
        title:'To-Do App - React.js Project.',
        description:
            'To-Do App is a robust task management application built with React.js, featuring Firebase authentication and comprehensive CRUD operations for managing daily tasks. This project enables users to sign in, log out, save, and share their to-do lists seamlessly.',
        technologies: [
            'FireBase',
            'Axios',
            'Javascript',
            'Custom Hook',
            'Node Js',
            'Redux(persist)',
        ],
        github: '',
        demo: 'https://to-do-with-google.vercel.app/login',
        image: '',
    },
    {
        title: 'Asset Management',
        description:
            'Developed Asset Management, a React application to streamline asset and portfolio tracking. This user-friendly application allows users to easily perform asset analysis, manage portfolios, visualize data with reporting charts, and monitor their overall portfolio health. Through this project, I honed my React development skills and gained valuable experience in user-focused design and problem-solving.',
        technologies: [
            'React Js',
            'Vite',
            'Axios',
            'JavaScript',
            'Node Js',
            'Redux(persist)',
        ],
        github: '',
        demo: 'https://app.acclimetry.com',
        image: '',
    },
]
