const Data = {};

Data.services = [
    {
        image: '/mobile.png',
        title: 'iOS & ANDROID APP DEVELOPMENT',
        shortDescription: 'Flutter, React Native, Java, Kotlin, Objective-C',
        description: 'iOS and Android app development is a key part of our business. We have a team of iOS and Android developers who are capable of building apps for any platform.',
    },
    {
        image: '/frontend.png',
        title: 'FRONTEND WEB DEVELOPMENT',
        shortDescription: 'React.js, Next.js, Angular, HTML, CSS, Python, Node.js',
        description: 'We have a team of frontend web developers who are capable of building websites for any platform.',
    },
    {
        image: '/backend.png',
        title: 'BACKEND DEVELOPMENT',
        shortDescription: 'Node.js, C++, Dart, Python, Java, PHP, Ruby, Go',
        description: 'We have a team of backend developers who are capable of building websites for any platform.',
    },
    {
        image: '/coding.png',
        title: 'SOFTWARE DEVELOPMENT',
        shortDescription: 'C++, Java, Python, Dart',
        description: 'We have a team of software developers who are capable of building websites for any platform.',
    },
];

Data.projects = [
    {
        image: '/mobdev.svg',
        title: 'Rippl App',
        type: 'Mobile App',
        shortDescription: 'A social media app',
        description: "Rippl is a social media app for sharing and connecting with people around the world. It is a mobile app that allows users to share their photos and videos with other users.",
        technologies: ['Flutter', 'Node.js', 'Dart', 'GetX', 'Express'],
        githubLink: 'https://github.com/nixrajput/social-media-app-flutter',
        demoLink: 'https://github.com/nixrajput/social-media-app-flutter/releases',
        status: 'completed',
    },
    {
        image: '/webdev.svg',
        title: 'NixLab Shop',
        type: 'Web App',
        shortDescription: 'An e-commerce web app',
        description: 'NixLab Shop is a e-commerce web app that allows users to do shopping online. It is a web app that allows users to check out their cart and checkout their orders with ease.',
        technologies: ['React.js', 'HTML', 'CSS', 'Node.js', 'Express', 'Mongo'],
        githubLink: 'https://github.com/nixrajput/ecommerce-mern',
        demoLink: 'https://nixlab-shop.herokuapp.com',
        status: 'completed',
    },
];

export default Data;