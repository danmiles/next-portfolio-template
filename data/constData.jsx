import Category from '@app/portfolio/[category]/page';

// Navbar links here
export const navbarLinks = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

// About section here
export const aboutData = [
  {
    id: 1,
    image: '/images/home-page/about/user-people-svgrepo-com.svg',
    description: 'We are a team of highly skilled and experienced software',
  },
  {
    id: 2,
    image: '/images/home-page/about/script-svgrepo-com.svg',
    description:
      'Our specilisation is JavaSript and we are experts in ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, and PostgreSQL.',
  },
  {
    id: 3,
    image: '/images/home-page/about/rocket-svgrepo-com.svg',
    description:
      'Your bisiness is our priority and we provides high-quality software development services to its clients worldwide.',
  },
];

// Portfolio Category
export const portfolioCategory = {
  applications: [
    {
      id: 1,
      title: 'Web Application',
      desc: 'To build a complete web application with React from scratch, there are many important details you need to conside. A framework can solve these problems. But such a framework must have the right level of abstraction — otherwise it won’t be very useful. It also needs to have great Developer Experience, ensuring you and your team have an amazing experience while writing code.',
      image:
        '/images/portfolio/category/web-app-1.png',
    },
    {
      id: 2,
      title: 'What is benefits of ReactJS?',
      desc: 'ReactJS is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.',
      image: '/images/portfolio/category/web-app-2.jpg',
    },
    {
      id: 3,
      title: 'Level up your bisiness with our applications',
      desc: 'We creating for you a web application that will help you to grow your bisiness. We are using ReactJS, NodeJS, Gatsby.js and another tools. We really love what we do and we are always ready to help you to deside a problems. ',
      image:'/images/portfolio/category/web-app-3.jpg',
    },
  ],
  illustrations: [
    {
      id: 1,
      title: 'We using different tools for creating illustrations',
      desc: 'Our team is using different tools for creating illustrations. We are using Figma, Adobe Illustrator, Adobe Photoshop, Adobe XD, and another tools. We really love what we do and we are always ready to help you to deside a problems. ',
      image:'/images/portfolio/category/illustration-1.jpg'
    },
    {
      id: 2,
      title: 'We are creating illustrations for your bisiness',
      desc: 'We creating for you a web application that will help you to grow your bisiness. We are using ReactJS, NodeJS, Gatsby.js and another tools. We really love what we do and we are always ready to help you to deside a problems. ',
      image:'/images/portfolio/category/illustration-2.jpg'
    },
    {
      id: 3,
      title: 'Our designers are always ready to help you',
      desc: 'Our designers are always ready to help you. We are using Figma, Adobe Illustrator, Adobe Photoshop, Adobe XD, and another tools. We really love what we do and we are always ready to help you to deside a problems.',
      image:'/images/portfolio/category/illustration-3.jpg'
    },
  ],
  websites: [
    {
      id: 1,
      title: 'Our Next.js web applications with strong performance',
      desc: 'Next.js is a React framework that enables several capabilities, including server-side rendering and generating static websites. It is a great tool for building your next website, blog, or web app. It is a React framework that enables several capabilities, including server-side rendering and generating static websites. It is a great tool for building your next website, blog, or web app.',
      image:'/images/portfolio/category/website-1.jpg'
    },
    {
      id: 2,
      title: 'Gatsby.js is a React-based open source framework.',
      desc: 'Gatsby.js is a React-based open source framework with performance, scalability and security built-in. Collaborate, build and deploy 1000x faster with Gatsby Cloud. Gatsby.js is a React-based open source framework with performance, scalability and security built-in. Collaborate, build and deploy 1000x faster with Gatsby Cloud.',
      image:'/images/portfolio/category/website-2.jpg'
    },
    {
      id: 3,
      title: 'Headless CMS for your bisiness',
      desc: 'A headless CMS is a content management system that provides a way to author content, but instead of having your content coupled to a particular output (like web page rendering), it provides your content as data over an API. A headless CMS is a content management system that provides a way to author content, but instead of having your content coupled to a particular output (like web page rendering), it provides your content as data over an API.',
      image:'/images/portfolio/category/website-3.jpg'
    },
  ],
};
