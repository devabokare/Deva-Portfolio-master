// ============================================================
// ALL PORTFOLIO CONTENT — Edit this file to update the site
// ============================================================

// Roles for the hero typewriter animation
export const typewriterRoles = [
  'Software Developer Engineer',
  'CTO',
  'Full Stack Developer',
  'Web Architect',
]

// Stats for the hero stats row
export const stats = [
  { value: 4,  suffix: '+', label: 'Years Experience' },
  { value: 12, suffix: '+', label: 'Projects Done'    },
  { value: 12, suffix: '+', label: 'Technologies'     },
  { value: 5,  suffix: '+', label: 'Happy Clients'    },
]

// Tech stack badges
export const techStack = [
  { name: 'React.js',     color: '#61dafb' },
  { name: 'Node.js',      color: '#339933' },
  { name: 'Express.js',   color: '#888888' },
  { name: 'Next.js',      color: '#ffffff' },
  { name: 'Python',       color: '#3776ab' },
  { name: 'Django',       color: '#44b78b' },
  { name: 'PostgreSQL',   color: '#336791' },
  { name: 'MongoDB',      color: '#47a248' },
  { name: 'SQLite',       color: '#579ddb' },
  { name: 'JavaScript',   color: '#f7df1e' },
  { name: 'TypeScript',   color: '#3178c6' },
  { name: 'C++',          color: '#00599c' },
  { name: 'C',            color: '#a8b9cc' },
  { name: 'HTML / CSS',   color: '#e34f26' },
  { name: 'Git',          color: '#f05032' },
]

// Case study process steps
export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Deep dive into requirements, goals, and target audience to build a solid, research-backed foundation.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes, prototypes, and visual systems that align your brand identity with real user needs.',
    icon: '✏️',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Clean, scalable code using modern tech stacks — built for performance, security, and maintainability.',
    icon: '⚡',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Rigorous testing, smooth deployment, and ongoing support to ensure everything works flawlessly.',
    icon: '🚀',
  },
]

export const personalInfo = {
  name: 'Devrao Bokare',
  title: 'CTO · Software Developer Engineer',
  avatar: '/assets/images/my-avatar.png',
  email: 'devabokare@gmail.com',
  phone: '+91 8080512016',
  birthday: 'July 3, 2005',
  location: 'Hadapsar, Pune, India',
  bio: [
    "I'm a Software Development Engineer (SDE) who designs, builds, tests, and maintains scalable software systems. I write clean, efficient code and collaborate with teams to develop reliable software solutions, using my knowledge of programming languages, algorithms, and modern software design to solve complex technical problems.",
    "With experience leading technology strategy as CTO at Liftuplabs and engineering SCADA industrial automation systems, I bring a robust full-stack developer mindset. I enjoy turning challenging requirements into clean, performant, and user-friendly digital experiences.",
  ],
  social: {
    whatsapp:  'https://wa.me/qr/ZYJZ3IJUR4LUC1',
    linkedin:  'https://www.linkedin.com/in/devrao-bokare-523b703a9/',
    instagram: 'https://www.instagram.com/deva_bokare/',
    github:    'https://github.com/deva-bokare',
  },
}

export const services = [
  {
    icon: '/assets/images/icon-design.svg',
    title: 'Web Design',
    description: 'The most modern and high-quality design made at a professional level.',
  },
  {
    icon: '/assets/images/icon-dev.svg',
    title: 'Web Development',
    description: 'High-quality development of sites at a professional level.',
  },
  {
    icon: '/assets/images/icon-app.svg',
    title: 'Mobile Apps',
    description: 'Professional development of applications for iOS and Android.',
  },
  {
    icon: '/assets/images/icon-photo.svg',
    title: 'Photography',
    description: 'I make high-quality photos of any category at a professional level.',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Shivam',
    avatar: '/assets/images/avatar-1.png',
    date: '14 June, 2025',
    text: 'Devrao was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of clients.',
  },
  {
    id: 2,
    name: 'Sakshi',
    avatar: '/assets/images/avatar-2.png',
    date: '14 June, 2025',
    text: 'Devrao was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of clients.',
  },
  {
    id: 3,
    name: 'Disha',
    avatar: '/assets/images/avatar-3.png',
    date: '14 June, 2025',
    text: 'Devrao was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of clients.',
  },
  {
    id: 4,
    name: 'Ojas',
    avatar: '/assets/images/avatar-4.png',
    date: '14 June, 2025',
    text: 'Devrao was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of clients.',
  },
]

export const clients = [
  '/assets/images/logo-1-color.png',
  '/assets/images/logo-2-color.png',
  '/assets/images/logo-3-color.png',
  '/assets/images/logo-4-color.png',
  '/assets/images/logo-5-color.png',
  '/assets/images/logo-6-color.png',
]

export const education = [
  {
    title: 'B.Tech in Computer Science & Engineering',
    period: '12/2022 – Present',
    institution: 'Matoshri Pratishthan Group of Institutions (School of Engineering), Nanded',
    description: 'Graduation Year: 2026 | Current CGPA: 7.11/10.0',
  },
  {
    title: '12th HSC',
    period: '08/2021 – 05/2022',
    institution: 'Bharat Vidyalaya, Hinganghat',
    description: 'Percentage: 53%',
  },
]

export const experience = [
  {
    title: 'Industrial Automation Developer (R&D Engineer)',
    link: null,
    period: '08/2025 – Present',
    points: [
      'Developed and deployed a new SCADA system for a critical production line, reducing manual intervention by 40% and improving overall equipment effectiveness (OEE) by 12%.',
      'Engineered reusable PLC code modules (Structured Text) that standardized control logic across 5+ different machine types, decreasing development time by 25% per project.',
      'Integrated proprietary industrial hardware with enterprise MES using OPC UA, enabling real-time data collection and facilitating predictive maintenance capabilities.',
      'Led the full software lifecycle, from conceptual design to on-site commissioning, for a multi-axis robotic handling system, achieving a 99.9% uptime in the first year of operation.',
    ],
  },
  {
    title: 'CTO & Lead Developer — Liftuplabs LLP',
    link: 'https://liftuplabs.in/',
    period: '01/2025 – Present',
    points: [
      'Lead technology strategy, software architecture, and product development.',
      'Design and develop scalable web applications, ERP systems, and AI-powered solutions.',
      'Manage full-stack development, REST APIs, databases, and cloud deployments.',
      'Lead the engineering team, conduct code reviews, and mentor developers.',
      'Implement DevOps practices using Git, Docker, Nginx, Cloudflare, PM2, and CI/CD.',
      'Collaborate with stakeholders to deliver secure, scalable, and innovative technology solutions.',
    ],
  },
  {
    title: 'Software Developer Engineer — Bluestock Fintech',
    link: null,
    period: '01/2025 – 07/2025',
    points: [
      'Built a stock market platform with trading charts and real-time class information.',
      'Managed large numbers of client details, implementing CRUD activities for customer records.',
      'Technologies: Python (Django), JavaScript | Database: SQLite.',
    ],
  },
]

export const skills = [
  { name: 'Machine Learning & AI', level: 90 },
  { name: 'Software Development',  level: 95 },
  { name: 'Cloud & Deployment',    level: 80 },
  { name: 'Data Structures & Alg', level: 85 },
  { name: 'Full Stack Web Dev',    level: 90 },
]

export const detailedSkills = [
  'Machine Learning',
  'Computer Vision',
  'Deep Learning',
  'Generative AI',
  'Artificial Intelligence',
  'Cloud & Deployment',
  'Data Structures and Algorithms',
  'Software Development & Tools',
  'Problem-Solving & Critical Thinking',
  'Communication & Collaboration',
]

export const languages = [
  'Python',
  'SQL',
  'TypeScript',
  'Node.js',
  'Next.js',
  'Express.js',
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'C++',
  'C',
]

export const certificates = [
  {
    title: 'OPSWAT Introduction to Critical Infrastructure Protection (ICIP)',
    description: 'Teaches the basics of protecting critical infrastructure (like power, healthcare, and finance) from cyber threats. Covers attack types, security strategies, data protection, and modern approaches like Zero Trust, with a focus on preventing threats before they happen.',
  },
  {
    title: 'Prerad Cybersecurity 3-Month Training',
    description: 'Covered essential aspects like network security, risk management, encryption, threat detection, and incident response, providing a robust foundation in cybersecurity.',
  },
]

export const interestsAndHobbies = [
  'Trekking',
  'Riding',
  'Exploring New Technologies & AI',
]

export const spokenLanguages = [
  'English',
  'Hindi',
  'Marathi',
]

export const awardsAndActivities = [
  {
    title: 'International Tech Innovation (Techfest IIT Bombay)',
    year: '2024',
  },
  {
    title: 'National Tech Innovation Pune',
    year: '2025',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Student Identity System',
    category: 'applications',
    image: '/assets/images/project-2.png',
    link: '#',
    caseStudy: {
      problem: 'Colleges and institutions face manual administration bottlenecks due to slow student identity verification and scattered offline records.',
      approach: 'Built an automated verification system featuring live student record displays, quick search filters, and full CRUD operations.',
      results: 'Streamlined student ID proof management and improved overall administration validation throughput.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'MongoDB'],
    },
  },
  {
    id: 2,
    title: 'I2School Learning System',
    category: 'web development',
    image: '/assets/images/project-8.jpg',
    link: '#',
    caseStudy: {
      problem: 'Modern educational institutions require interactive digital learning portals to bridge classrooms and remote education.',
      approach: 'Engineered a learning system featuring comprehensive student and teacher dashboards, and a robust database for grade/profile management.',
      results: 'Delivered secure student and teacher environments, boosting educational file and result tracking efficiency.',
      tech: ['Python', 'Django', 'JavaScript', 'SQLite'],
    },
  },
  {
    id: 3,
    title: 'Finance Visualizer',
    category: 'web development',
    image: '/assets/images/project-1.jpg',
    link: '#',
    caseStudy: {
      problem: 'Recruiters and clients struggle to find custom-tailored fintech solutions that present complex transactional data in a clean, highly understandable way.',
      approach: 'Built a responsive dashboard leveraging custom chart engines, data-memoization to handle huge lists, and transaction categorization rules.',
      results: 'A sleek finance visualizer presenting real-time trends, currency conversion rates, and instant PDF report exports.',
      tech: ['React', 'Chart.js', 'Vite', 'TailwindCSS'],
    },
  },
  {
    id: 4,
    title: 'College ERP',
    category: 'web development',
    image: '/assets/images/project-2.png',
    link: '#',
    caseStudy: {
      problem: 'Colleges and institutions face administrative bottlenecks due to scattered data across multiple platforms, slow registration queues, and offline processing.',
      approach: 'Created a centralized dashboard using Express, PostgreSQL, and React. Handled role-based authentication (student, faculty, admin) securely.',
      results: 'Boosted academic file-management efficiency by 40% and simplified enrollment processes for thousands of student profiles.',
      tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    },
  },
  {
    id: 5,
    title: 'Music Streamer',
    category: 'applications',
    image: '/assets/images/project-4.png',
    link: '#',
    caseStudy: {
      problem: 'Users wanted a distraction-free audio platform with smooth playlist management and high-quality playback streams without high memory footprint.',
      approach: 'Designed a lightweight audio player using Web Audio APIs, cached offline playback support, and a glassmorphic sidebar controller.',
      results: 'Reduced RAM usage by 30% compared to typical music web players, achieving instant song switching and responsive audio waves.',
      tech: ['HTML5 Audio', 'React', 'Framer Motion', 'MongoDB'],
    },
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Design conferences in 2022',
    category: 'Design',
    date: 'Feb 23, 2022',
    image: '/assets/images/blog-1.jpg',
    excerpt: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    link: '#',
  },
  {
    id: 2,
    title: 'Best fonts every designer should know',
    category: 'Design',
    date: 'Feb 23, 2022',
    image: '/assets/images/blog-2.jpg',
    excerpt: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
    link: '#',
  },
  {
    id: 3,
    title: 'Design digest #80',
    category: 'Design',
    date: 'Feb 23, 2022',
    image: '/assets/images/blog-3.jpg',
    excerpt: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
    link: '#',
  },
]
