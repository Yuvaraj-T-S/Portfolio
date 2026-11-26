export type ProjectCategory = 'all' | 'web' | 'systems' | 'mobile';

export interface ProjectItem {
  id: string;
  name: string;
  language: string;
  updatedAt: string;
  category: Exclude<ProjectCategory, 'all'>;
  description: string;
  repoUrl: string;
  liveUrl?: string;
}

export interface SkillItem {
  name: string;
  detail: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  summary: string;
  items: SkillItem[];
}

/**
 * Central portfolio content configuration.
 * Update your bio, contact links, skills, or project entries here.
 */
export const PORTFOLIO_DATA = {
  profile: {
    name: 'Yuvaraj T S',
    tagline: 'Student · Artificial Intelligence & Machine Learning',
    heroSummary:
      'Exploring artificial intelligence, machine learning, and modern web development through steady practice and practical software projects.',
    aboutParagraph:
      'I am Yuvaraj T S, a student passionate about Artificial Intelligence and Machine Learning. I enjoy learning programming, exploring modern technologies and improving my technical skills. My goal is to become a skilled technology professional and create meaningful projects.',
    highlights: [
      { label: 'Focus', value: 'Artificial Intelligence & Machine Learning' },
      { label: 'Programming', value: 'C, Python' },
      { label: 'Web Technologies', value: 'HTML, CSS, JavaScript' },
    ],
  },

  contact: {
    githubHandle: 'Yuvaraj-T-S',
    githubUrl: 'https://github.com/Yuvaraj-T-S',
    githubReposUrl: 'https://github.com/Yuvaraj-T-S?tab=repositories',
    // Add your preferred public contact details below when ready:
    email: 'yuvarajts2007@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/yuvaraj-t-s/',
    resumeUrl: '',
  },

  skillGroups: [
    {
      id: 'programming',
      title: 'Programming',
      summary: 'Core languages for problem solving, algorithmic thinking, and AI/ML exploration.',
      items: [
        {
          name: 'C',
          detail: 'Foundational programming concepts, arrays, functions, and modular console programs.',
        },
        {
          name: 'Python',
          detail: 'Scripting, backend application logic, and building foundations for AI and machine learning.',
        },
      ],
    },
    {
      id: 'web-technologies',
      title: 'Web Technologies',
      summary: 'Building clean, responsive, and accessible interfaces for the browser.',
      items: [
        {
          name: 'HTML',
          detail: 'Semantic document structure, accessible landmarks, and clean markup.',
        },
        {
          name: 'CSS',
          detail: 'Responsive layouts, typography hierarchy, and calm visual styling.',
        },
        {
          name: 'JavaScript',
          detail: 'Interactive client-side behavior, DOM updates, and asynchronous API requests.',
        },
      ],
    },
  ] satisfies SkillGroup[],

  /**
   * Projects sourced directly from https://github.com/Yuvaraj-T-S?tab=repositories
   */
  projects: [
    {
      id: 'tasklight',
      name: 'tasklight',
      language: 'TypeScript',
      updatedAt: 'Nov 2026',
      category: 'web',
      description: 'Todo-list web application built with TypeScript and deployed on Vercel.',
      repoUrl: 'https://github.com/Yuvaraj-T-S/tasklight',
      liveUrl: 'https://tasklight-five.vercel.app',
    },
    {
      id: 'roadsafe-ai',
      name: 'RoadSafe-AI',
      language: 'TypeScript',
      updatedAt: 'Oct 2026',
      category: 'web',
      description:
        'Hackathon MVP starter built with React, TypeScript, Vite, Leaflet, and Recharts featuring 1,200 synthetic Bengaluru accident records, severity filters, interactive hotspot maps, and risk scoring.',
      repoUrl: 'https://github.com/Yuvaraj-T-S/RoadSafe-AI',
    },
    {
      id: 'pawsitive',
      name: 'Pawsitive',
      language: 'HTML',
      updatedAt: 'Oct 2026',
      category: 'web',
      description: 'Pet Supplies E-Commerce System web application.',
      repoUrl: 'https://github.com/Yuvaraj-T-S/Pawsitive',
      liveUrl: 'https://pet-app-rosy.vercel.app',
    },
    {
      id: 'graphics-editor',
      name: 'GraphicsEditor',
      language: 'C',
      updatedAt: 'Jun 2026',
      category: 'systems',
      description:
        'Menu-driven 2D console Graphics Editor written in C as an academic project using a 2D character array canvas to practice arrays, functions, and modular programming.',
      repoUrl: 'https://github.com/Yuvaraj-T-S/GraphicsEditor',
    },
    {
      id: 'rps-game',
      name: 'RPS-GAME',
      language: 'Python · HTML · CSS · JS',
      updatedAt: 'Jun 2026',
      category: 'systems',
      description:
        'Best-of-5 Rock Paper Scissors web app using a Python Flask backend and an HTML5, CSS3, and JavaScript frontend communicating asynchronously via the Fetch API.',
      repoUrl: 'https://github.com/Yuvaraj-T-S/RPS-GAME',
    },
    {
      id: 'geovisoin',
      name: 'GeoVisoin',
      language: 'Dart',
      updatedAt: 'May 2026',
      category: 'mobile',
      description:
        'Flutter starter repository initialized for mobile development (repository README currently notes a starter Flutter setup without a custom summary).',
      repoUrl: 'https://github.com/Yuvaraj-T-S/GeoVisoin',
    },
  ] satisfies ProjectItem[],
};
