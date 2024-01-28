import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  github: 'https://github.com/kaydo1506',
  linkedin: 'https://www.linkedin.com/in/ify-okedo/',
};

export const author = {
  name: 'RIO',
  email: 'okedo.ir@gmail.com',
};

export const seoData = {
  title: 'Rachael Ify Okedo | Frontend Engineer',
  description:
    'Rachael builds responsive and engaging products for the web using frontend React and Next JS',
  author: author.name,
  image: '#',
  url: '',
  keywords: [
    'Rachael',
    'Rachael Okedo',
    '@Ify Okedo Portfolio',
    'Rachael Okedo Portfolio 2024',
    'Rachael Ifeoma Okedo',
    'Rachaeel I okedo',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
  ],
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hi 👋🏾,  I'm  ",
  title: ' Rachael',
  tagline1: '<frontend Engineer/>',
  tagline2: 'designer',
  description1:
    'I develop responsive and engaging products for the web using using ReactJS & NextJS. ',
  description2:
    'I’m also a visual and experience designer with focus on user interfaces',
};
// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Next.js',
      'React.js',
      'TailwindCSS',
      'Typescript',
      'Figma',
      'SASS',
    ],
  },
  img: '/img/Rachael.png',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'My Skills',
  skills: [
    {
      id: getId(),
      title: 'full stack development - FE Heavy',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: 'My experience',
  experiences: [
    {
      company: 'Turn.io',
      companyUrl: 'https://www.turn.io/',
      role: 'Technical Product Support',
      started: 'July 2023',
      tasks: [
        'I spearheaded system monitoring using Sentry and Redash, improving issue detection and resolution.',
        ' I handled BigQuery integrations, focusing on data analytics, client assistance with data export, and visualization from our web application.',
        ' I resolved API issues with Postman, managed webhook configurations, and supported clients with DSL-developed chatbot services to ensure client satisfaction.',
        'Collaborated with development teams to troubleshoot technical issues, applying my frontend expertise to refine user interfaces and boost product functionality.',
      ],
    },
    {
      company: 'Benagos',
      companyUrl: '#',
      role: 'Frontend Engineer',
      started: 'January 2022',
      tasks: [
        'I developed responsive frontend code using React.js and Next.js, enhancing application performance and SEO. ',
        'Refined user interfaces and conducted code reviews to improve UI/UX, using Apollo dev tools for efficient debugging ',
        'As a Frontend Engineer, I contributed to all phases of the software development lifecycle as part of cross-functional teams.',
        'I enhanced UI design using SASS and developed server-side logic with Node.js and Express.js.',
      ],
    },
    {
      company: 'Intavalto',
      companyUrl: 'https://intavalto.com/',
      role: 'Frontend Web Developer & Technical Support',
      started: 'June 2017',
      tasks: [
        'I was in charge of dispensing technical services',
        'I refactored code to meet the latest development requirements and browser compatibility',
        'I designed and developed features for the company’s existing home automation application',
        'I worked closely with clients to meet project/feature requirements, goals and desired functionalities',
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Stacknetwork - A Developers Network',
      url: 'https://stacknetwork.onrender.com/',
      img: '/img/stacknet.png',
      tags: ['React', 'Redux', 'Node', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'Foodie - A food recipe finder',
      url: 'https://foodie-02.netlify.app/',
      img: '/img/foodie.png',
      tags: ['Vanilla JS', 'SASS', 'HTML', 'Parcel'],
    },
    {
      id: getId(),
      name: 'Allo - A dating app prototype',
      url: 'https://www.figma.com/proto/hCWycDf4BnPbPk0NJ2hXEH/Envisioning?type=design&node-id=551-3081&t=vcJEfUnojpjDqqSa-0&scaling=scale-down&page-id=172%3A588&starting-point-node-id=543%3A2453',
      img: '/img/Allo.png',
      tags: ['Figma', ' Adobe After Effect'],
    },
    {
      id: getId(),
      name: 'HeyChat - A live chatroom',
      url: 'https://heychat22.netlify.app/',
      img: '/img/hey.png',
      tags: ['React', 'Redux', 'Firebase', 'SASS'],
    },
    {
      id: getId(),
      name: 'Expensify - An expense tracker',
      url: 'https://budgetbot.netlify.app/',
      img: '/img/budget.png',
      tags: ['ReactJS', 'Redux', 'Firebase', 'Jest'],
    },
    {
      id: getId(),
      name: 'An Advanced CSS Web Template',
      url: 'https://naturesweb.netlify.app/',
      img: '/img/AD.png',
      tags: ['Keyframes Animation', 'Cubic Bezier'],
    },
    {
      id: getId(),
      name: 'E-commerce Storefront',
      url: 'https://storefront-ify.netlify.app/#/',
      img: '/img/storefront.png',
      tags: ['React', 'Material UI', 'Commerce.Js'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Ify Okedo © 2024',
};
