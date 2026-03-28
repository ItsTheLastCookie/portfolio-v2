export interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string | null;
  stars: number;
  createdAt: string;
  category: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string | null;
  twitter: string | null;
}
