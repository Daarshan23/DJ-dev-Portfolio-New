import oversight from '../assets/companies/infyom.png'
import checkpoint from '../assets/companies/smixit_solutions_private_limited_logo.jpeg'
// import magshimim from '../assets/companies/magshimim.png'

export interface IExperience {
    title: string
    company_name: string
    icon: string
    iconBgColor: string
    date: string
    points: string[]
}

export const experiences: IExperience[] = [
    {
        title: 'Frontend Developer',
        company_name: 'Infolabz Private Limited',
        icon: checkpoint,
        iconBgColor: '#f0f0f0',
        date: 'Jan 2023 - Apr 2023',
        points: [
            `Developed a full stack web application from scratch, including back-end services, front-end interface, and database. 
            Developed a RESTful API to enable communication between the website and the backend services.`,
        ],
    },
    {
        title: 'MERN Stack Developer',
        company_name: 'Royal Infotech Private Limited',
        icon: oversight,
        iconBgColor: '#f0f0f0',
        date: 'May 2023 - Aug 2023',
        points: [
            ` Developed a website for a client, boosting online presence and increasing customer engagement.
            Developed a full stack web application using modern technologies such as React, Node.js, and MongoDB.
            Implemented a single-page application using React and Redux that improved overall performance and usability.`,
        ],
    },
]

// {
//     title: 'National Cyber Education Program',
//     company_name: 'Magshmim',
//     icon: magshimim,
//     iconBgColor: '#f0f0f0',
//     date: 'Nov 2015 - Nov 2018',
//     points: [
//         'Taught various programming languages, including the basics of different data structures, recursion, complexity, code conventions, client-server configuration, sockets, TCP/UDP, DNS, OSI model, encryption methods, dynamic memory, pointers, and assembly.',
//         'Provided a comprehensive curriculum that covered both fundamental and advanced topics in programming.',
//         'Encouraged hands-on learning and provided practical exercises and projects to reinforce learning.',
//         'Encouraged collaboration and teamwork among students to foster a supportive and engaging learning environment.',
//         'Emphasized the importance of good coding practices and conventions to ensure code quality and maintainability.',
//     ],
// },
