const studentData = {
    name: 'Divyanshu Patel',
    regNo: '23BAI1214',
    courseName: 'Web Programming Lab',
    courseTitle: 'Web Programming',
    labSlot: 'L11 + L12 + L19 + L20',
    facultyName: 'PROF. DR. ASHOKA RAJAN R',
    institute: 'VIT University',
    email: 'divyanshu.patel2023@vitstudent.ac.in',
    lastUpdated: '2025-04-01'
};

const exercisesData = [
    {
        id: 1,
        title: 'Exercise 1',
        submissionDate: '2025-01-10',
        reportUrl: 'reports/23BAI1214_Exercise_01_pdf.pdf',
        tasks: [
            { taskNo: 1, title: 'LEAVE LETTER', demoUrl: 'https://23bai1214-divyanshu-exercise-1-t-1.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-01/Task-01' },
            { taskNo: 2, title: 'TABLE LAYOUT', demoUrl: 'https://23bai1214-divyanshu-exercise-1-t-2.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-01/Task-02' },
            { taskNo: 3, title: 'CHESS BOARD', demoUrl: 'https://23bai1214-divyanshu-exercise-1-t-3.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-01/Task-03' }
        ]
    },
    {
        id: 2,
        title: 'Exercise 2',
        submissionDate: '2025-01-12',
        reportUrl: 'reports/23BAI1214_Exercise_02_pdf.pdf',
        tasks: [
            { taskNo: 1, title: 'The Coffee Shop', demoUrl: 'https://23bai1214-divyanshu-exercise-2-t-1.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-02/Task-01' },
            { taskNo: 2, title: 'Animations', demoUrl: 'https://23bai1214-divyanshu-exercise-2-t-2.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-02/Task-02' },
            { taskNo: 3, title: 'Job Reg. Form', demoUrl: 'https://23bai1214-divyanshu-exercise-2-t-3.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-02/Task-03' }
        ]
    },
    {
        id: 3,
        title: 'Exercise 3',
        submissionDate: '2025-01-18',
        reportUrl: 'reports/23BAI1214_Exercise_03_pdf.pdf',
        tasks: [
            { taskNo: 1, title: 'Stacked Panel: A CSS Layout Exploration', demoUrl: 'https://23bai1214-divyanshu-exercise-3-t-1.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-03/Task-01' },
            { taskNo: 2, title: 'Side-by-Side Panels: A CSS Layout Exploration', demoUrl: 'https://23bai1214-divyanshu-exercise-3-t-2.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-03/Task-02' },
            { taskNo: 3, title: 'Login Page', demoUrl: 'https://23bai1214-divyanshu-exercise-3-t-3.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-03/Task-03' },
            { taskNo: 4, title: 'Navigation Bar - Horizontal', demoUrl: 'https://23bai1214-divyanshu-exercise-3-t-4.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-03/Task-04' },
            { taskNo: 5, title: 'Navigation Bar - Vertical', demoUrl: 'https://23bai1214-divyanshu-exercise-3-t-5.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-03/Task-05' },
            { taskNo: 6, title: 'Display ACER and Projector Info', demoUrl: 'https://23bai1214-divyanshu-exercise-3-t-6.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-03/Task-06' }
        ]
    },
    {
        id: 4,
        title: 'Exercise 4',
        submissionDate: '2025-02-09',
        reportUrl: 'reports/23BAI1214_Exercise_04_pdf.pdf',
        tasks: [
            { taskNo: 1, title: 'Animated Box: w3schools', demoUrl: 'https://23bai1214-divyanshu-exercise-4-t-1.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-04/Task-01' },
            { taskNo: 2, title: 'Infinite circular rotation following a square path', demoUrl: 'https://23bai1214-divyanshu-exercise-4-t-2.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-04/Task-02' },
            { taskNo: 3, title: 'Spinning Star', demoUrl: 'https://23bai1214-divyanshu-exercise-4-t-3.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-04/Task-03' },
            { taskNo: 4, title: 'Structured & Responsive Web Design', demoUrl: 'https://23bai1214-divyanshu-exercise-4-t-4.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-04/Task-04' }
        ]
    },
    {
        id: 5,
        title: 'Exercise 5',
        submissionDate: '2025-02-23',
        reportUrl: 'reports/23BAI1214_Exercise_05_pdf.pdf',
        tasks: [
            { taskNo: 1, title: 'Traffic Light', demoUrl: 'https://23bai1214-divyanshu-exercise-5-t-1.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-05/Task-01' },
            { taskNo: 2, title: 'Random Quote', demoUrl: 'https://23bai1214-divyanshu-exercise-5-t-2.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-05/Task-02' },
            { taskNo: 3, title: 'To-Do-List', demoUrl: 'https://23bai1214-divyanshu-exercise-5-t-3.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-05/Task-03' },
            { taskNo: 4, title: 'Drawing Shape', demoUrl: 'https://23bai1214-divyanshu-exercise-5-t-4.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-05/Task-04' },
            { taskNo: 5, title: 'Guess The Number', demoUrl: 'https://23bai1214-divyanshu-exercise-5-t-5.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-05/Task-05' },
            { taskNo: 6, title: 'Random Emoji Generator', demoUrl: 'https://23bai1214-divyanshu-exercise-5-t-6.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-05/Task-06' }
        ]
    },
    {
        id: 6,
        title: 'Exercise 6',
        submissionDate: '2025-03-02',
        reportUrl: 'reports/23BAI1214_Exercise_06_pdf.pdf',
        tasks: [
            { taskNo: 1, title: 'Digital Clock', demoUrl: 'https://23bai1214-divyanshu-exercise-6-t-1.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-06/Task-01' },
            { taskNo: 2, title: 'Analog Clock', demoUrl: 'https://23bai1214-divyanshu-exercise-6-t-2.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-06/Task-02' },
            { taskNo: 3, title: 'Flashlight Text Reveal', demoUrl: 'https://23bai1214-divyanshu-exercise-6-t-3.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-06/Task-03' },
            { taskNo: 4, title: 'Minion Eye', demoUrl: 'https://23bai1214-divyanshu-exercise-6-t-4.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-06/Task-04' },
            { taskNo: 5, title: 'Vertical Image Slider', demoUrl: 'https://23bai1214-divyanshu-exercise-6-t-5.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-06/Task-05' },
            { taskNo: 6, title: 'Snake Game', demoUrl: 'https://23bai1214-divyanshu-exercise-6-t-6.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-06/Task-06' },
            { taskNo: 7, title: 'Webcam Accessing', demoUrl: 'https://23bai1214-divyanshu-exercise-6-t-7.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-06/Task-07' },
            { taskNo: 8, title: 'Mobile Flashlight', demoUrl: 'https://23bai1214-divyanshu-exercise-6-t-8.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-06/Task-08' }
        ]
    },
    {
        id: 7,
        title: 'Exercise 7',
        submissionDate: '2025-03-29',
        reportUrl: 'reports/23BAI1214_Exercise_07_pdf.pdf',
        tasks: [
            { taskNo: 1, title: 'React Card Component', demoUrl: 'https://23bai1214-divyanshu-exercise-7-t-1.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-07/card' }
        ]
    },
    {
        id: 8,
        title: 'Exercise 8',
        submissionDate: '2025-03-29',
        reportUrl: 'reports/23BAI1214_Exercise_08_pdf.pdf',
        tasks: [
            { taskNo: 1, title: 'React Table Component', demoUrl: 'https://23bai1214-divyanshu-exercise-8-t-1.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-08/react-table' }
        ]
    },
    {
        id: 9,
        title: 'Exercise 9',
        submissionDate: '2025-04-01',
        reportUrl: 'reports/23BAI1214_Exercise_09_pdf.pdf',
        tasks: [
            { taskNo: 1, title: 'React Profile Cards', demoUrl: 'https://23bai1214-divyanshu-exercise-9-t-1.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-09/vite-react-app' }
        ]
    },
    {
        id: 10,
        title: 'Exercise 10',
        submissionDate: '2025-04-01',
        reportUrl: 'reports/23BAI1214_Exercise_10_pdf.pdf',
        tasks: [
            { taskNo: 1, title: 'Movie Collection App', demoUrl: 'https://23bai1214-divyanshu-exercise-10-t-1.netlify.app/', codeUrl: 'https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Exercise-10/react-card' }
        ]
    }
    // done

];

const contactData = {
    socialLinks: [
        {
            icon: "fab fa-instagram",
            url: "https://www.instagram.com/patel_divyanshu_"
        },
        {
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/patel-divyanshu"
        },
        {
            icon: "fab fa-github",
            url: "https://github.com/divyanshupatel17"
        }
    ],
    contactDetails: [
        {
            icon: "fas fa-envelope",
            title: "Email",
            value: "divyanshu.patel2023@vitstudent.ac.in"
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Location",
            value: "VIT Chennai, Tamil Nadu, India"
        },
        {
            icon: "fas fa-phone",
            title: "Phone",
            value: "+91 9301503581"
        }
    ],
    footer: {
        name: "Divyanshu Patel",
        year: "2025"
    }
};

const projectsData = [
    {
        id: 1,
        title: "Weather Dashboard",
        description: "A comprehensive weather application featuring a sleek, dark-themed UI built from scratch. The dashboard displays current weather conditions with temperature, humidity, and pressure readings, an interactive 7-day forecast with detailed high/low temperatures, hourly forecast visualization for the current day, and an air conditions panel showing real feel, wind speed, chance of rain, and UV index. The application employs responsive design principles ensuring optimal viewing on all devices.",
        imageUrl: "projects/preview_weather_app.png",
        liveUrl: "https://weather-dashboard-divyanshu.netlify.app",
        codeUrl: "https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Projects/weather-dashboard",
        tags: ["JavaScript"],
        technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "OpenWeatherMap API", "WeatherAPI.com"]
    },
    {
        id: 2,
        title: "GitHub Statistics Viewer",
        description: "A feature-rich GitHub analytics tool that provides comprehensive user statistics with an elegant dark-themed interface. The application enables users to view detailed GitHub metrics including repository count, followers, following, and language distribution visualized through interactive charts. Users can explore commit activity on popular repositories, total stars received, and contribution patterns. A standout feature is the ability to compare up to 3 different GitHub profiles side-by-side.",
        imageUrl: "projects/preview_github_statistics_viewer.png",
        liveUrl: "https://github-stats-viewer-divyanshu.netlify.app",
        codeUrl: "https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Projects/github-stats-viewer",
        tags: ["JavaScript"],
        technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "GitHub REST API", "Chart.js"]
    },
    {
        id: 3,
        title: "NEUMORPHISM UI Generator",
        description: "An innovative design tool that empowers developers and designers to create customized neumorphic UI elements with real-time preview capabilities. The application features an intuitive interface with a sophisticated color picker that supports hex code input, adjustable parameters for size, border radius, shadow distance, and intensity, and four distinct shape options (flat, concave, convex, and pressed). The tool generates clean CSS code that can be copied to clipboard with a single click.",
        imageUrl: "projects/preview_neumorphism.png",
        liveUrl: "https://make-your-own-neumorphism-divyanshu.netlify.app/",
        codeUrl: "https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Projects/neumorphism-generator",
        tags: ["JavaScript"],
        technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "CSS Custom Properties", "DOM Manipulation"]
    },
    {
        id: 4,
        title: "VIT Timeline",
        description: "An interactive historical timeline showcasing the evolution and significant milestones of VIT Chennai. The application presents a chronological journey through the institution's development, featuring important events, achievements, and growth markers arranged in an engaging visual format. The timeline includes smooth scrolling navigation, animated entry effects for each event, detailed descriptions with supporting media, and a responsive design that adapts to different screen sizes.",
        imageUrl: "projects/preview_vit_timeline.png",
        liveUrl: "https://vit-timeline-divyanshu.netlify.app",
        codeUrl: "https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Projects/vit-timeline",
        tags: ["JavaScript"],
        technologies: ["HTML5", "CSS3", "JavaScript", "CSS Animations", "Intersection Observer API"]
    },
    {
        id: 5,
        title: "E-Shop",
        description: "A full-featured e-commerce application built with React 19 and the latest web technologies. The platform provides a comprehensive shopping experience with categorized product listings, detailed product pages with specifications and reviews, an intuitive shopping cart with quantity adjustment, a streamlined checkout process, and user authentication with profile management. The application implements client-side routing for seamless navigation between pages and state management for shopping cart persistence.",
        imageUrl: "projects/preview_react_e_shop.png",
        liveUrl: "https://e-shop-divyanshu.netlify.app",
        codeUrl: "https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Projects/e-shop",
        tags: ["React"],
        technologies: ["React 19", "React Router DOM v7", "Vite", "Context API", "CSS Modules"]
    },
    {
        id: 6,
        title: "Quiz App",
        description: "An engaging and interactive quiz application that allows users to test their knowledge across various subjects and difficulty levels. The React-based platform features a clean, intuitive interface with multiple-choice questions, timed quiz sessions with progress indicators, immediate feedback on answers with explanations, score tracking with performance statistics, and the ability to save quiz results. The application implements custom hooks for quiz logic and responsive design that works seamlessly across devices.",
        imageUrl: "projects/preview_react_quiz_master.png",
        liveUrl: "https://quiz-app-divyanshu.netlify.app",
        codeUrl: "https://github.com/divyanshupatel17/23BAI1214_WEB_LAB/tree/main/Projects/quiz-app",
        tags: ["React"],
        technologies: ["React", "Vite", "Custom React Hooks", "React Router", "Local Storage"]
    }
];