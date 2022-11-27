const Data = {};

export const services = [
    {
        image: '/mobile-app-dev.png',
        title: 'iOS & ANDROID APP DEVELOPMENT',
        shortDescription: 'Flutter, React Native, Java, Kotlin, Objective-C',
        description: 'iOS and Android app development is a key part of our business. We have a team of iOS and Android developers who are capable of building apps for any platform.',
    },
    {
        image: '/web-dev.png',
        title: 'FRONTEND WEB DEVELOPMENT',
        shortDescription: 'React.js, Next.js, Angular, HTML, CSS, Python, Node.js',
        description: 'We have a team of frontend web developers who are capable of building websites for any platform.',
    },
    {
        image: '/backend-dev.png',
        title: 'BACKEND DEVELOPMENT',
        shortDescription: 'Node.js, C++, Dart, Python, Java, PHP, Ruby, Go',
        description: 'We have a team of backend developers who are capable of building websites for any platform.',
    },
    {
        image: '/software-dev.png',
        title: 'SOFTWARE DEVELOPMENT',
        shortDescription: 'C++, Java, Python, Dart',
        description: 'We have a team of software developers who are capable of building websites for any platform.',
    },
];

export const projects = [
    {
        image: '/mobdev.svg',
        title: 'Rippl App',
        type: 'Mobile App',
        shortDescription: 'A social media app.',
        description: "Rippl is a social media app for sharing and connecting with people around the world. It is a mobile app that allows users to share their photos and videos with other users.",
        technologies: ['Flutter', 'Node.js', 'Dart', 'GetX', 'Express'],
        githubLink: 'https://github.com/nixrajput/social-media-app-flutter',
        demoLink: 'https://github.com/nixrajput/social-media-app-flutter/releases/latest',
        status: 'In Progress',
    },
    {
        image: '/mobdev.svg',
        title: 'LiveBox App',
        type: 'Mobile App',
        shortDescription: 'A video calling and video streaming app.',
        description: "LiveBox is a video calling and video streaming app for sharing and connecting with people around the world. It is a mobile app that allows users to share their photos and videos with other users.",
        technologies: ['Flutter', 'Dart', 'Agora SDK', 'GetX'],
        githubLink: 'https://github.com/nixrajput/video-calling-app-flutter',
        demoLink: 'https://github.com/nixrajput/video-calling-app-flutter/releases/latest',
        status: 'In Progress',
    },
    {
        image: '/webdev.svg',
        title: 'NixLab Shop',
        type: 'Web App',
        shortDescription: 'An e-commerce web app.',
        description: 'NixLab Shop is a e-commerce web app that allows users to do shopping online. It is a web app that allows users to check out their cart and checkout their orders with ease.',
        technologies: ['React.js', 'HTML', 'CSS', 'Node.js', 'Express', 'Mongo'],
        githubLink: 'https://github.com/nixrajput/ecommerce-mern',
        demoLink: 'https://nixlab-shop.herokuapp.com',
        status: 'Completed',
    },
];

export const description = "NixLab Technologies is a software development company based in the India. We are a team of passionate developers who are passionate about building high quality software. We are always looking for talented and creative people to join our team.";

Data.about = {};

Data.about.description = "NixLab Technologies is a software development company based in the India. We are a team of passionate developers who are passionate about building high quality software. We are always looking for talented and creative people to join our team.";

Data.about.services = [
    'Mobile application development',
    'Web application development',
    'Desktop application development',
    'Backend development',
];

Data.about.mission = [
    'We understand needs and requirements of our customer and make technology to resolve the needs.',
    'We believe to explore new opportunities that maximize the business value, consistent growth, and sustainability.',
    'Empower our clients to respond faster and more intuitively to changing market dynamics.',
    'Enable them to become more agile and competitive through leveraging new technologies.',
    'Help our clients to bring great products to market in less time and at less cost.',
    'Collaborate with our clients in their continued success.'
];

export default Data;