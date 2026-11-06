/**
 * Central portfolio data — Nishanth G A's portfolio.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Nishanth G A',
  displayName: 'Nishanth G A',
  firstName: 'NISHANTH G A',
  seriesTag: 'SOFTWARE DEVELOPER',
  headlineQuote: 'Building practical digital solutions through code, creativity and continuous learning.',
  /** Studio card shown at the start of the opening sequence. */
  originalLabel: 'NISHANTH G A PRESENTS',
  role: 'Software Developer | Full Stack Developer',
  tagline: ['Software Developer', 'Full Stack Developer', 'React.js', 'Python', 'FastAPI', 'Node.js'],
  intro:
    'I am a Computer Science and Engineering student passionate about software development and building practical web applications. I have hands-on experience with React.js, JavaScript, Python, Node.js, Express.js and FastAPI. I enjoy developing full-stack applications, REST APIs, authentication systems, dashboards and database-driven solutions. I am continuously learning new technologies and improving my problem-solving and development skills.',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'ganishanth27@gmail.com',
  phone: '+91 9952133219',
  links: {
    linkedin: 'https://www.linkedin.com/in/nishanth-g-a-73389a36b/',
    github: 'https://github.com/ganishanth27-oss',
    leetcode: 'https://leetcode.com/u/NISHANTHGA27/',
  },
  resumePdf: '/assets/Nishanth_GA_Resume.pdf',
  portrait: {
    src: '/assets/profile-photo.png',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Nishanth G A',
  },
  interests: ['Full Stack Development', 'REST APIs', 'Cloud Computing', 'AI Integration'],
  softSkills: ['Communication', 'Teamwork'],
  spokenLanguages: ['Tamil', 'English'],
};

export const education = [
  {
    school: 'Nehru Institute of Engineering and Technology',
    place: 'Coimbatore, Tamil Nadu',
    degree: 'B.E. Computer Science and Engineering',
    period: '2025 – 2029 (Expected)',
    score: 'CGPA: 9.29 / 10',
    details: 'Current CGPA: 9.29 / 10',
  },
  {
    school: 'Sri Vijay Vidhyalaya Matric Higher Secondary School',
    place: 'Dharmapuri, Tamil Nadu',
    degree: 'Higher Secondary Certificate (12th)',
    period: 'Completed',
    score: '87%',
    details: '12th Grade: 87%',
  },
  {
    school: 'Sri Vijay Vidhyalaya Matric Higher Secondary School',
    place: 'Dharmapuri, Tamil Nadu',
    degree: 'Secondary School Leaving Certificate (10th)',
    period: 'Completed',
    score: '90.4%',
    details: '10th Grade: 90.4%',
  },
];

export const experience = [
  {
    company: 'DG Interns Hub',
    role: 'Web Development Intern',
    place: 'Remote / Hybrid',
    period: 'August 2026 – October 2026',
    points: [
      'Developed a comprehensive Job and Internship Portal using React.js with modular component architecture.',
      'Built reusable, accessible frontend components and integrated seamless user experiences.',
      'Integrated frontend with backend REST APIs and handled asynchronous state management.',
      'Implemented robust authentication and protected client-side routes.',
      'Developed job search, advanced multi-criteria filtering, and real-time application tracking features.',
      'Worked with backend integration and database-driven web applications.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'healthcare' | 'learning' | 'portal' | 'business' | 'dashboard' | 'validation';
};

export const projects: Project[] = [
  {
    id: 'queue-care',
    title: 'Queue Care',
    year: '2026',
    genre: 'Full Stack Development • Healthcare',
    logline: 'Hospital Token Management System developed to simplify patient registration, digital token generation and queue management.',
    stack: ['React.js', 'FastAPI', 'Python', 'Supabase', 'SQLAlchemy'],
    build: [
      'Engineered digital token generation and queue tracking system to streamline outpatient flows and eliminate physical bottlenecking.',
      'Built role-based dashboards for Nurses, Hospital Admins, and Super Admins with secure role-based access control.',
      'Implemented department-wise queue handling, multiple active token prevention rules, and integrated SMS alerts for patients.',
    ],
    features: [
      'Patient registration and secure login',
      'Digital token generation with queue priority',
      'Department-wise token management',
      'Dedicated Nurse dashboard',
      'Hospital admin and super admin management',
      'Role-based access control (RBAC)',
      'Automated SMS notifications',
      'Multiple active token prevention',
    ],
    metrics: [
      { value: 'Token', label: 'digital queue tracking' },
      { value: 'Multi-Role', label: 'Admin, Nurse & Patient' },
      { value: 'Zero', label: 'duplicate active tokens' },
      { value: 'SMS', label: 'instant notifications' },
    ],
    github: 'https://github.com/ganishanth27-oss/Queue-Care',
    palette: { from: '#062024', via: '#0e525a', to: '#041013', accent: '#38ef7d' },
    motif: 'healthcare',
  },
  {
    id: 'learnlumi',
    title: 'LearnLumi',
    year: '2026',
    genre: 'AI • EdTech • Full Stack',
    logline: 'An AI-assisted learning platform designed to help students learn through uploaded study materials, AI tutoring and assessments.',
    stack: ['React.js', 'Python', 'FastAPI', 'SQLite', 'OpenRouter / LLM'],
    build: [
      'Developed an interactive AI tutor interface integrating OpenRouter LLM APIs for contextual question-answering over uploaded study materials.',
      'Built a Knowledge Base ingestion system supporting PDF and PPT educational documents with structured parsing.',
      'Created adaptive student assessments, an interactive Mastery Map, and comprehensive learning progress visualization.',
    ],
    features: [
      'Contextual AI Tutor and interactive chat',
      'Knowledge Base ingestion for PDF and PPT learning materials',
      'Intuitive student learning dashboard',
      'Automated quiz and comprehension assessments',
      'Mastery Map visualizing subject proficiency',
      'Granular learning progress and milestone tracking',
    ],
    metrics: [
      { value: 'AI', label: 'LLM-powered tutoring' },
      { value: 'PDF+PPT', label: 'multi-format ingestion' },
      { value: 'Mastery', label: 'visual progress mapping' },
      { value: 'Adaptive', label: 'assessment generation' },
    ],
    palette: { from: '#1a0b2e', via: '#501680', to: '#0c0517', accent: '#c084fc' },
    motif: 'learning',
  },
  {
    id: 'dg-job-portal',
    title: 'DG Job & Internship Portal',
    year: '2026',
    genre: 'Full Stack Web Development',
    logline: 'A modern job and internship portal that allows users to discover opportunities, apply for roles and track application status in real-time.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    build: [
      'Developed full-stack recruitment portal featuring JWT-based authentication, user role separation, and protected client routes.',
      'Designed responsive job search engine with multi-facet filtering (role, location, type) and efficient server-side pagination.',
      'Built applicant tracking flow allowing students to monitor application status and employers to manage listings.',
    ],
    features: [
      'User registration, secure login and JWT authentication',
      'Protected routes for candidates and administrators',
      'Dynamic job and internship search with filtering',
      'One-click job application submission workflow',
      'Real-time application status tracking',
      'Admin job posting and applicant review management',
      'REST API architecture with pagination',
    ],
    metrics: [
      { value: 'JWT', label: 'secure authentication' },
      { value: 'Full-Stack', label: 'React + Express + Mongo' },
      { value: 'Tracking', label: 'real-time application pipeline' },
      { value: 'Paginated', label: 'optimized API responses' },
    ],
    palette: { from: '#1c1003', via: '#733c08', to: '#0d0702', accent: '#fbbf24' },
    motif: 'portal',
  },
  {
    id: 'phoenix',
    title: 'Phoenix',
    year: '2026',
    genre: 'Full Stack • Business Management',
    logline: 'A business management portal designed to manage users, managers, services and project requests through role-based dashboards.',
    stack: ['React.js', 'Vite', 'Node.js', 'Express.js', 'Supabase'],
    build: [
      'Architected end-to-end enterprise portal deployed live on Vercel with role-based access control for Admins and Managers.',
      'Implemented service catalog management and custom client project request workflows with Supabase backend.',
      'Designed interactive management dashboard for tracking ongoing project status, approvals, and service delivery.',
    ],
    features: [
      'User registration and secure authentication',
      'Centralized Admin dashboard with operations control',
      'Manager management and delegation features',
      'Strict role-based permissions (RBAC)',
      'Service catalog creation and maintenance',
      'User project requests and proposal submissions',
      'Project lifecycle management',
    ],
    metrics: [
      { value: 'Live', label: 'deployed on Vercel' },
      { value: 'RBAC', label: 'admin & manager hierarchy' },
      { value: 'Supabase', label: 'real-time cloud database' },
      { value: 'End-to-End', label: 'project lifecycle workflow' },
    ],
    live: 'https://phoenix-chi-beryl.vercel.app/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#38bdf8' },
    motif: 'business',
  },
  {
    id: 'aicte-oneview',
    title: 'AICTE OneView',
    year: '2026',
    genre: 'Hackathon • AI • Dashboard',
    logline: 'Centralized dashboard designed to monitor and track institution-related complaints across AICTE bureaus and cells with NLP similarity detection.',
    stack: ['React.js', 'FastAPI', 'Python', 'PostgreSQL', 'NLP', 'Sentence Transformers'],
    build: [
      'Built a collaborative hackathon team solution providing AICTE officials with cross-bureau complaint monitoring and tracking.',
      'Integrated NLP Sentence Transformers to automatically detect duplicate and semantically similar complaints across institutions.',
      'Developed analytics charts, bureau-wise routing pipelines, and interactive complaint resolution tracking dashboards.',
    ],
    features: [
      'Centralized grievance and complaint management',
      'Automated complaint routing and assignment to bureaus/cells',
      'End-to-end complaint status tracking workflow',
      'AI-based similar complaint detection using NLP',
      'Bureau and cell-wise monitoring breakdowns',
      'Interactive dashboard analytics and visual reporting',
      'Team hackathon project deployed live',
    ],
    metrics: [
      { value: 'NLP', label: 'Sentence Transformers similarity' },
      { value: 'Live', label: 'deployed prototype on Vercel' },
      { value: 'Team', label: 'Hackathon innovation project' },
      { value: 'Central', label: 'multi-bureau tracking system' },
    ],
    live: 'https://aicte-complaint-tracker.vercel.app/',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#f43f5e' },
    motif: 'dashboard',
  },
  {
    id: 'aicte-validation-system',
    title: 'AICTE Application Validation',
    year: '2026',
    genre: 'Hackathon Prototype • AI • Document Processing',
    logline: 'An AI-powered application validation concept for verifying documents and checking regulatory compliance for AICTE applications.',
    stack: ['React.js', 'FastAPI', 'Python', 'OCR', 'NLP', 'PostgreSQL'],
    build: [
      'Designed a hackathon prototype concept tackling automated document verification and compliance checking for institutional approvals.',
      'Structured OCR extraction pipelines and NLP rule-checking engine to compare submitted application data against official regulatory guidelines.',
      'Created an officer review workflow displaying extracted entity verification reports and flag indicators for potential anomalies.',
    ],
    features: [
      'Institutional document upload interface',
      'OCR-based document text and table extraction concept',
      'Application data validation against institution records',
      'Regulatory rule checking and criteria matching',
      'Anomaly and discrepancy identification',
      'Structured verification reports generation',
      'Officer review workflow and approval queue',
    ],
    metrics: [
      { value: 'Hackathon', label: 'concept prototype' },
      { value: 'OCR+NLP', label: 'document extraction pipeline' },
      { value: 'Rule Engine', label: 'regulatory compliance checks' },
      { value: 'Workflow', label: 'officer verification queue' },
    ],
    palette: { from: '#021a12', via: '#0d5a40', to: '#050a08', accent: '#34d399' },
    motif: 'validation',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'aicte-oneview-hackathon',
    title: 'AICTE OneView',
    org: 'Hackathon Team Project',
    detail: 'Developed a centralized AI-powered complaint monitoring and tracking dashboard with NLP duplicate detection for AICTE bureaus and cells.',
    laurel: 'Team Innovation',
    link: 'https://aicte-complaint-tracker.vercel.app/',
  },
  {
    id: 'aicte-validation-hackathon',
    title: 'Application Validation System',
    org: 'Hackathon Prototype',
    detail: 'Designed an AI-powered document verification and regulatory compliance checking system concept utilizing OCR and NLP.',
    laurel: 'AI Prototype',
  },
  {
    id: 'jct-hackathon',
    title: 'JCT College Hackathon',
    org: 'JCT College of Engineering and Technology',
    detail: 'Participated in intense collaborative hackathon building real-world problem-solving software solutions under strict deadlines.',
    laurel: 'Participant',
  },
  {
    id: 'hackspark',
    title: 'HackSpark',
    org: 'HackSpark Hackathon',
    detail: 'Active participant in technical hackathon focusing on rapid prototyping, modern web development, and team collaboration.',
    laurel: 'Participant',
  },
  {
    id: 'sakthi-hackfest',
    title: 'Sakthi Hack Fest',
    org: 'Sakthi Hack Fest',
    detail: 'Engaged in competitive software hackathon, developing technical prototypes and pitching innovative software implementations.',
    laurel: 'Participant',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  {
    issuer: 'NPTEL',
    name: 'Introduction to Internet of Things',
    link: undefined,
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core application logic and systems programming',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Responsive user interfaces & interactive client apps',
    skills: [
      { name: 'React.js', mono: 'Re', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Scalable APIs, authentication & server logic',
    skills: [
      { name: 'FastAPI', mono: 'Fa', note: 'Primary' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & BaaS',
    subtitle: 'Relational, document and cloud databases',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Supabase', mono: 'Sb' },
      { name: 'SQLite', mono: 'Sl' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Cloud',
    subtitle: 'Version control, development workflow & cloud tooling',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Cloud Computing', mono: 'Cc' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in Nishanth's projects, experience or education.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Queue Care', 'LearnLumi', 'AICTE OneView', 'AICTE Validation System'],
  JavaScript: ['DG Job & Internship Portal', 'Phoenix', 'Queue Care frontend'],
  Java: ['Computer Science and Engineering coursework'],
  HTML5: ['Web Development Intern at DG Interns Hub', 'Responsive UI Projects'],
  CSS3: ['DG Job Portal', 'LearnLumi', 'Modern Responsive Styling'],
  'React.js': ['Queue Care', 'LearnLumi', 'DG Job Portal', 'Phoenix', 'AICTE OneView'],
  HTML: ['DG Interns Hub', 'Reusable UI components'],
  CSS: ['Tailwind CSS', 'Responsive UI styling'],
  FastAPI: ['Queue Care', 'LearnLumi', 'AICTE OneView', 'AICTE Validation System'],
  'Node.js': ['DG Job & Internship Portal', 'Phoenix'],
  'Express.js': ['DG Job & Internship Portal', 'Phoenix'],
  'REST APIs': ['Queue Care', 'DG Job Portal', 'AICTE OneView'],
  MongoDB: ['DG Job & Internship Portal'],
  PostgreSQL: ['AICTE OneView', 'AICTE Validation System'],
  MySQL: ['Database-driven applications'],
  Supabase: ['Queue Care', 'Phoenix'],
  SQLite: ['LearnLumi local storage'],
  Git: ['Version control across all 6 projects'],
  GitHub: ['Open source repositories at github.com/ganishanth27-oss'],
  'VS Code': ['Primary development IDE'],
  Postman: ['REST API testing and validation'],
  'Cloud Computing': ['Supabase cloud backends & Vercel deployments'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const emerald: Palette = { from: '#062024', via: '#0e525a', to: '#041013', accent: '#38ef7d' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Schooling & Academics',
    period: 'Up to 2025',
    synopsis: 'Academic schooling foundation at Sri Vijay Vidhyalaya Matric Higher Secondary School, Dharmapuri.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Secondary Education',
        description: 'Completed 10th Standard with 90.4% at Sri Vijay Vidhyalaya Matric Higher Secondary School, Dharmapuri.',
        tags: ['10th Grade', '90.4%', 'Dharmapuri'],
        runtime: 'Academic Milestone',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Higher Secondary',
        description: 'Completed 12th Standard with 87% at Sri Vijay Vidhyalaya Matric Higher Secondary School, Dharmapuri.',
        tags: ['12th Grade', '87%', 'Science / Maths'],
        runtime: 'Academic Milestone',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Computer Science & Engineering',
    period: '2025 – 2029',
    synopsis: 'B.E. Computer Science and Engineering at Nehru Institute of Engineering and Technology, Coimbatore with a 9.29 CGPA.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineering Journey',
        description: 'B.E. in Computer Science and Engineering — current CGPA of 9.29 / 10 at Nehru Institute of Engineering and Technology, Coimbatore.',
        tags: ['B.E. CSE', 'CGPA 9.29', 'Coimbatore'],
        runtime: 'Expected Graduation: 2029',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'NPTEL Certification',
        description: 'Completed Introduction to Internet of Things certification from NPTEL, expanding into connected systems.',
        tags: ['NPTEL', 'IoT', 'Certification'],
        runtime: 'Certified',
        palette: emerald,
      },
    ],
  },
  {
    number: 3,
    title: 'Industry Experience',
    period: 'August 2026 – October 2026',
    synopsis: 'Web Development Internship at DG Interns Hub — building real-world portal architectures with React.js.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Web Development Intern',
        description: 'Engineered a Job and Internship Portal with React.js, reusable components, and robust REST API integrations.',
        tags: ['DG Interns Hub', 'React.js', 'REST APIs'],
        runtime: 'Aug 2026 – Oct 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Authentication & Search',
        description: 'Implemented JWT authentication, protected routes, job search, multi-criteria filtering, and live application tracking.',
        tags: ['Auth', 'Filtering', 'Application Tracking'],
        runtime: 'Full-Stack Work',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Full Stack & Hackathon Projects',
    period: '2026',
    synopsis: 'Six major software solutions ranging from hospital token queues and AI edtech to live business portals and AICTE national hackathons.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Queue Care & LearnLumi',
        description: 'Hospital Token Management System with FastAPI and Supabase, plus LearnLumi AI-assisted learning platform with OpenRouter LLM.',
        tags: ['FastAPI', 'Supabase', 'AI Tutor'],
        runtime: 'Healthcare & EdTech',
        palette: emerald,
      },
      {
        code: 'S04 E02',
        title: 'Phoenix & DG Portal',
        description: 'Live business management portal on Vercel with RBAC dashboards, and end-to-end DG Job & Internship recruitment platform.',
        tags: ['React.js', 'Vite', 'Express.js', 'Vercel'],
        runtime: 'Live Platforms',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'AICTE OneView & Validation System',
        description: 'Centralized complaint tracking dashboard with Sentence Transformers similarity, and AI document validation hackathon prototype.',
        tags: ['AICTE', 'NLP', 'OCR', 'Hackathons'],
        runtime: 'National Hackathons',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Healthcare Original', title: 'Queue Care', detail: 'Token management • FastAPI & Supabase', palette: emerald },
  { label: 'AI EdTech', title: 'LearnLumi', detail: 'OpenRouter LLM • Knowledge base & assessments', palette: violet },
  { label: 'Live on Vercel', title: 'Phoenix Portal', detail: 'Business management • Role-based dashboards', palette: ocean },
  { label: 'Hackathon Innovation', title: 'AICTE OneView', detail: 'Sentence Transformers NLP • Live tracking', palette: crimson },
  { label: 'Recruitment Platform', title: 'DG Job Portal', detail: 'React.js, Node.js & MongoDB • JWT Auth', palette: amber },
  { label: 'Academic Excellence', title: '9.29 / 10 CGPA', detail: 'B.E. Computer Science and Engineering', palette: emerald },
  { label: 'Internship Experience', title: 'DG Interns Hub', detail: 'Web Development Intern • React.js', palette: ocean },
  { label: 'AI Prototype', title: 'AICTE Validation', detail: 'OCR & NLP regulatory compliance concept', palette: violet },
  { label: 'IoT Credential', title: 'NPTEL Certification', detail: 'Introduction to Internet of Things', palette: amber },
  { label: 'Hackathon Competitions', title: '3+ Hackathons', detail: 'JCT College • HackSpark • Sakthi Hack Fest', palette: crimson },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. Computer Science',
    lines: ['Nehru Institute of Engineering and Technology, Coimbatore', '2025 – 2029 (Expected)'],
    chips: ['CGPA: 9.29 / 10'],
  },
  {
    kicker: 'Skills',
    title: 'Full Stack & APIs',
    lines: ['Python, JavaScript, Java · React.js, FastAPI, Node.js', 'PostgreSQL, MongoDB, Supabase, SQLite · Git, Postman'],
    chips: ['Python', 'JavaScript', 'React.js', 'FastAPI', 'Node.js', 'Supabase'],
  },
  {
    kicker: 'Internship',
    title: 'DG Interns Hub',
    lines: ['Web Development Intern · August 2026 – October 2026', 'Built Job & Internship Portal with React.js & REST APIs', 'Authentication, search filtering & tracking workflows'],
  },
  {
    kicker: 'Projects',
    title: 'Featured Works',
    lines: [
      'Queue Care — Hospital Token Management with FastAPI & Supabase',
      'LearnLumi — AI-powered learning platform with LLM tutoring',
      'Phoenix — Live business management portal with RBAC',
      'AICTE OneView — Hackathon complaint tracking with NLP similarity',
    ],
  },
  {
    kicker: 'Hackathons',
    title: 'Competitions & Hackathons',
    lines: ['AICTE OneView & AICTE Validation System', 'JCT College Hackathon · HackSpark · Sakthi Hack Fest'],
  },
  {
    kicker: 'Certification',
    title: 'NPTEL Certified',
    lines: ['Introduction to Internet of Things — NPTEL'],
  },
  {
    kicker: 'Focus',
    title: 'Ready to Build',
    lines: ['Building practical digital solutions through code, creativity and continuous learning.'],
  },
];

export type ProfileId = 'nishanth' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'nishanth',
    name: 'Nishanth',
    blurb: 'Complete portfolio experience',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Who I Am • Education & Experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Chapters • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Milestones`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects • Full Stack & AI`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from resume & projects', palette: emerald },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories • Progress-free`, palette: ocean },
  moments: { nav: 'Hackathons', card: 'Hackathons & Certs', meta: `${achievements.length} Competitions • NPTEL Certified`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
