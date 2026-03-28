import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Betterfetch',
    description: 'A lightning-fast, customizable system information tool inspired by neofetch. Features concurrent API calls, multi-GPU support, custom ASCII art, and network awareness with IP geolocation and live weather.',
    language: 'Python',
    tech: ['Python', 'psutil', 'requests', 'gputil'],
    githubUrl: 'https://github.com/ItsTheLastCookie/betterfetch',
    liveUrl: null,
    stars: 0,
    createdAt: '2025-06-01',
    category: 'CLI Tool',
    featured: true
  },
  {
    id: 2,
    name: 'PixelSearch',
    description: 'Retro-themed terminal image search tool. Search for images from the command line, download them locally with async parallel downloads, and preview them as ASCII art. Features DuckDuckGo integration and Rich-powered TUI.',
    language: 'Python',
    tech: ['Python', 'aiohttp', 'Pillow', 'Rich', 'duckduckgo-search'],
    githubUrl: 'https://github.com/ItsTheLastCookie/scraper',
    liveUrl: null,
    stars: 0,
    createdAt: '2026-02-17',
    category: 'CLI Tool',
    featured: true
  },
  {
    id: 3,
    name: 'Easy AI Trainer',
    description: 'Interactive Python application for training chatbots by dynamically adding conditions and responses. Perfect for learning basic AI training concepts with pattern matching and real-time knowledge updates.',
    language: 'Python',
    tech: ['Python', 'Pattern Matching', 'NLP Basics'],
    githubUrl: 'https://github.com/ItsTheLastCookie/easyaitrainer',
    liveUrl: null,
    stars: 0,
    createdAt: '2024-12-27',
    category: 'AI/ML',
    featured: false
  },
  {
    id: 4,
    name: 'Simple Shell',
    description: 'Custom Unix shell implementation in Rust with piping support, command execution, and directory navigation. Demonstrates systems programming fundamentals and process management.',
    language: 'Rust',
    tech: ['Rust', 'Systems Programming', 'Process Management'],
    githubUrl: 'https://github.com/ItsTheLastCookie/Simple-Shell',
    liveUrl: null,
    stars: 0,
    createdAt: '2026-02-19',
    category: 'Systems',
    featured: true
  },
  {
    id: 5,
    name: 'Pose Tracker',
    description: 'Real-time human pose tracking using MediaPipe and OpenCV. Features skeleton visualization, performance metrics, debug overlay, and video recording capabilities with 720p/30fps support.',
    language: 'Python',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    githubUrl: 'https://github.com/ItsTheLastCookie/Skeleton-Esp',
    liveUrl: null,
    stars: 0,
    createdAt: '2026-02-19',
    category: 'Computer Vision',
    featured: true
  },
  {
    id: 6,
    name: 'Simple Text Editor',
    description: 'Lightweight GUI text editor built with Python tkinter. Features file saving, font switching (Helvetica/Courier), and a minimal, distraction-free interface.',
    language: 'Python',
    tech: ['Python', 'tkinter', 'GUI Development'],
    githubUrl: 'https://github.com/ItsTheLastCookie/Simple-Text-Editor',
    liveUrl: null,
    stars: 0,
    createdAt: '2026-02-19',
    category: 'GUI App',
    featured: false
  }
];

export const skills = [
  { name: 'Python', level: 95, category: 'Languages' },
  { name: 'Rust', level: 70, category: 'Languages' },
  { name: 'TypeScript', level: 85, category: 'Languages' },
  { name: 'JavaScript', level: 88, category: 'Languages' },
  { name: 'React', level: 82, category: 'Frontend' },
  { name: 'Node.js', level: 78, category: 'Backend' },
  { name: 'OpenCV', level: 75, category: 'Computer Vision' },
  { name: 'MediaPipe', level: 72, category: 'Computer Vision' },
  { name: 'CLI Development', level: 88, category: 'Tools' },
  { name: 'Systems Programming', level: 70, category: 'Systems' }
];

export const stats = {
  totalProjects: 7,
  githubRepos: 7,
  primaryLanguage: 'Python',
  linesOfCode: '10,000+'
};

export const personalInfo = {
  name: 'Adam',
  title: 'Full-Stack Developer & Systems Engineer',
  tagline: 'Building tools that matter. From CLI utilities to computer vision applications.',
  bio: '12-year-old coding prodigy with 2 coding olympiad wins. Passionate about Python automation, Rust systems programming, and computer vision. I create efficient, user-friendly tools that solve real problems. Currently exploring the intersection of AI and practical applications.',
  location: 'Remote',
  email: 'contact@example.com',
  github: 'ItsTheLastCookie',
  linkedin: null,
  twitter: null,
  age: 12,
  olympiadWins: 2
};

export interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Coding Olympiad Winner',
    description: 'First place in competitive programming competition, demonstrating exceptional problem-solving skills and algorithmic thinking.',
    image: '/src/assets/image1.jpg',
    year: '2024'
  },
  {
    id: 2,
    title: 'Coding Olympiad Champion',
    description: 'Second olympiad victory, showcasing consistent excellence in competitive coding and advanced programming concepts.',
    image: '/src/assets/image2.png',
    year: '2025'
  }
];
