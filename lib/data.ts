export const profile = {
  name: "Asif Mia",
  title: "Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  phone: "+880 1678-844164",
  email: "miaasif2002@gmail.com",
  resume: "/Asif_Mia_Resume.pdf",
  links: {
    linkedin: "https://linkedin.com/in/miaasif",
    github: "https://github.com/miasif",
    facebook: "https://facebook.com/", // TODO: replace with your Facebook profile URL
    website: "https://miasif.netlify.app",
  },
  summary:
    "Full-Stack Software Engineer with 4+ years of experience building, maintaining, and scaling enterprise web applications using Laravel, PHP, MySQL, React.js, Node.js, and MongoDB. Currently at Analyzen, leading backend development for Evercare Hospital (Dhaka and Chattogram) and Akash DTH digital platforms. Experienced in REST API development, database optimisation, application security, automated backups, CI/CD pipelines, and production support across healthcare and telecom industries.",
};

export const stats: { value: string; label: string }[] = [
  { value: "4+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "4", label: "Companies" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "Analyzen",
    period: "January 2024 – Present",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Lead backend development, maintenance, and production support for Evercare Hospital Dhaka and Evercare Hospital Chattogram websites using Laravel and MySQL.",
      "Built and maintain the fully dynamic Analyzen corporate website (analyzenbd.com) — dynamic content management, feature development, performance optimisation, and ongoing maintenance.",
      "Manage full-cycle feature development, bug fixes, deployments, and ongoing maintenance for the Akash DTH website.",
      "Design and optimise database schemas and complex SQL queries to improve application performance.",
      "Implement automated backup pipelines, security enhancements, and production monitoring processes.",
      "Collaborate with project managers, QA teams, and stakeholders to translate business requirements into reliable software.",
    ],
  },
  {
    role: "Full-Stack Developer (Contract)",
    company: "Desktop IT",
    period: "May 2023 – July 2023",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Contracted to develop and maintain the company e-commerce platform (desktop-it.com).",
      "Implemented product management, order workflows, and frontend/backend integration for the online store.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed / Outsourcing",
    period: "2022 – 2023",
    location: "Remote",
    highlights: [
      "Delivered client projects remotely via international outsourcing platforms.",
      "Built a Salary Management System for CreatorsCity (Fiji) covering payroll processing, employee records, and reporting.",
      "Developed a Point of Sale (POS) system for CreatorsCity (Fiji) with inventory management, sales tracking, and receipt generation.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Premium Pass Ltd",
    period: "2021 – 2022",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Developed business management platforms using React.js, Node.js, Express.js, and MongoDB.",
      "Built customer, merchant, service, and role-based management modules with real-time data-flow monitoring.",
      "Delivered reporting and operational monitoring features; participated in full SDLC from requirements to deployment.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  featured?: boolean;
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Evercare Hospital Websites",
    tagline: "Dhaka & Chattogram",
    description:
      "Backend development and maintenance in Laravel. Database optimisation, CMS enhancements, security hardening, automated backup solutions, and 24/7 production support.",
    tags: ["Laravel", "MySQL", "Security", "DevOps"],
    featured: true,
    liveUrl: "https://www.evercarebd.com/en",
  },
  {
    name: "Analyzen Corporate Website",
    tagline: "analyzenbd.com",
    description:
      "Built and maintain the fully dynamic corporate website for Analyzen using Laravel. Dynamic page and content management, ongoing feature additions, performance optimisation, and long-term maintenance.",
    tags: ["Laravel", "CMS", "Performance"],
    featured: true,
    liveUrl: "https://www.analyzenbd.com",
  },
  {
    name: "Akash DTH Website",
    tagline: "Large-scale telecom platform",
    description:
      "Feature development, performance optimisation, deployment support, ongoing maintenance, and content-management enhancements for a large-scale telecom platform.",
    tags: ["Laravel", "Telecom", "Deployment"],
    liveUrl: "https://akashdth.com/",
  },
  {
    name: "bKash Concert Ticketing System",
    tagline: "High-volume payments",
    description:
      "Backend development for ticket purchasing and management. Integrated secure payment processing and optimised database queries for high-volume transaction throughput.",
    tags: ["Laravel", "Payments", "Query Optimisation"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Backend",
    items: ["Laravel", "PHP", "REST APIs", "Authentication", "Authorisation", "Queue Jobs"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Redux", "Redux Toolkit", "RTK Query", "Inertia.js", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB", "Database Design", "Query Optimisation"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Linux", "Git", "GitHub", "CI/CD", "Backup Automation", "Deployment"],
  },
  {
    category: "Architecture",
    items: ["MVC", "Monolithic Applications", "API Integration", "Agile Development"],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "American International University-Bangladesh (AIUB)",
    detail: "CGPA: 3.90 / 4.00",
    period: "2018 – 2021",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "St. Joseph Higher Secondary School",
    detail: "GPA: 5.00 / 5.00",
    period: "2014 – 2016",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Mirpur Bangla School and College",
    detail: "GPA: 5.00 / 5.00",
    period: "2012 – 2014",
  },
];

export const certifications = [
  "JavaScript Algorithms and Data Structures",
  "Responsive Web Design",
  "Programming for Everybody (Python)",
  "Node.js Fundamentals",
  "MongoDB Fundamentals",
  "Introduction to HTML5",
];

export const achievements = [
  "Dean's Award — American International University-Bangladesh (2018, 2019)",
  "Magna Cum Laude — American International University-Bangladesh (2021)",
  "Cisco Networking Academy Skills Competition Bangladesh Participant (2020)",
];
