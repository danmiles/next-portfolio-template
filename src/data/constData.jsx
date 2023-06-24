import Category from '@/app/portfolio/[category]/page';

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
        'https://pixabay.com/get/g9c41344fa8b5fa695310e45ade881e1a99d577891ac139b53c2cef5a35f8afd63fb97f2252399c01cde9ba292aa92626_640.jpg',
    },
    {
      id: 2,
      title: 'What is benefits of ReactJS?',
      desc: 'ReactJS is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.',
      image:
        'https://pixabay.com/get/g4e5feb513f880d9a1348808816744613d065c67f64304e43637afb729cd427fdc36ab373484daa213af1a53f42e35536_640.jpg',
    },
    {
      id: 3,
      title: 'Level up your bisiness with our applications',
      desc: 'We creating for you a web application that will help you to grow your bisiness. We are using ReactJS, NodeJS, Gatsby.js and another tools. We really love what we do and we are always ready to help you to deside a problems. ',
      image:
        'https://pixabay.com/get/g38ff6ab13fcc676ee0671a9305cb4db1d5352b60fb8ac5c75e8e909addbf7ec315e0d881d021baf64f1271838b247aac_640.jpg',
    },
  ],
  illustrations: [
    {
      id: 1,
      title: 'We using different tools for creating illustrations',
      desc: 'Our team is using different tools for creating illustrations. We are using Figma, Adobe Illustrator, Adobe Photoshop, Adobe XD, and another tools. We really love what we do and we are always ready to help you to deside a problems. ',
      image:
        'https://pixabay.com/get/g11d627ad58b554365a552e5625bf4e080a4e2f123128539f8195fc8bd568e45e6b7e1f1b8748fcdc2a7b877c8678d16e_640.png',
    },
    {
      id: 2,
      title: 'We are creating illustrations for your bisiness',
      desc: 'We creating for you a web application that will help you to grow your bisiness. We are using ReactJS, NodeJS, Gatsby.js and another tools. We really love what we do and we are always ready to help you to deside a problems. ',
      image:
        'https://pixabay.com/get/g618ba6cd7aa4565a16c46b2f3812c39b75e528c51b77db5e9a0c9244509c5015c3df2e04f873833055a88cd9641e3b37_640.png',
    },
    {
      id: 3,
      title: 'Our designers are always ready to help you',
      desc: 'Our designers are always ready to help you. We are using Figma, Adobe Illustrator, Adobe Photoshop, Adobe XD, and another tools. We really love what we do and we are always ready to help you to deside a problems.',
      image:
        'https://pixabay.com/get/gefb1ab497eedc2d897a2c66862ee956ae32429500185261472758c5dba792528c335d8c5d8e3bd9570ab764de9cc8248_640.jpg',
    },
  ],
  websites: [
    {
      id: 1,
      title: 'Our Next.js web applications with strrong performance',
      desc: 'Next.js is a React framework that enables several capabilities, including server-side rendering and generating static websites. It is a great tool for building your next website, blog, or web app. It is a React framework that enables several capabilities, including server-side rendering and generating static websites. It is a great tool for building your next website, blog, or web app.',
      image:
        'https://pixabay.com/get/gcb89cdc534729943a2a865e2410819b06cce4535be3326b95f5f11da4f8fc7e07e321d4943821556ec1512dfefca4dcf_640.jpg',
    },
    {
      id: 2,
      title: 'Gatsby.js is a React-based open source framework.',
      desc: 'Gatsby.js is a React-based open source framework with performance, scalability and security built-in. Collaborate, build and deploy 1000x faster with Gatsby Cloud. Gatsby.js is a React-based open source framework with performance, scalability and security built-in. Collaborate, build and deploy 1000x faster with Gatsby Cloud.',
      image:
        'https://pixabay.com/get/gf2e0291a67c20ebf0c85b00fd16e0b42ddc1a7e83d0083b2b0d5883a190aae09da6ac352ecebf1711fe43a2f2b43b079_640.jpg',
    },
    {
      id: 3,
      title: 'Headless CMS for your bisiness',
      desc: 'A headless CMS is a content management system that provides a way to author content, but instead of having your content coupled to a particular output (like web page rendering), it provides your content as data over an API. A headless CMS is a content management system that provides a way to author content, but instead of having your content coupled to a particular output (like web page rendering), it provides your content as data over an API.',
      image:
        'https://pixabay.com/get/g07bbe1e275940e87d051925142f8db6f9c56f7c0301acc9db68d3d1b0f49fadaf8d37ea8cdc46c9c818c11931bbc0495_640.jpg',
    },
  ],
};
