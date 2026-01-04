import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Vallabhareddy Lakshmi Prasanna",
    "title": "Computer Science and Business Systems Student",
    "email": "prasannavallabhareddy8985@gmail.com",
    "phone": "+91-8639802143",
    "linkedin": "Linkedin",
    "github": "Github",
    "location": "Bhimavaram, Andhra Pradesh",
    "summary": "Aspiring computer science professional with a strong academic background in Computer Science and Business Systems. Skilled in multiple programming languages and frameworks with a keen interest in AI/ML and software development."
  },
  "experience": [],
  "education": [
    {
      "degree": "B.Tech - Computer Science and Business Systems",
      "institution": "Vishnu Institute of Technology, Bhimavaram",
      "years": "2021 – 2025",
      "gpa": "9.12"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Wood Cost Prediction",
      "description": "A machine learning project that predicts wood costs based on type, dimensions, usage, and durability using a synthetically generated dataset. Crafted a realistic synthetic dataset to simulate various wood properties and pricing scenarios for model training. Developed and trained regression models to estimate wood prices, showcasing practical ML application in cost estimation.",
      "technologies": [
        "Python",
        "Scikit-learn",
        "Pandas"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "PayMate",
      "description": "Developed a secure Android application facilitating peer-to-peer cash exchanges by matching users based on real-time location data. Implemented user authentication using Spring Security and OAuth2. Utilized Google Location Services to track user locations and match them with nearby users willing to exchange cash.",
      "technologies": [
        "Android",
        "Kotlin",
        "Spring Boot",
        "Firebase",
        "Google Maps API"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Campus FoodCourt",
      "description": "Designed and developed a responsive web application for campus food court item management. Implemented dynamic user interfaces for browsing and ordering food items with interactive features. Applied CSS for a visually appealing layout, ensuring cross-browser compatibility and mobile responsiveness. Utilized JavaScript for client-side validation and asynchronous data updates.",
      "technologies": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "simple",
  "experience": "cards",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "cyan"
};
