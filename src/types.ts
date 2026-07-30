export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export interface Division {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  gradient?: string;
  glowColor?: string;
  badge?: string;
  features?: string[];
  technologies?: string[];
  sla?: string;
  caseStudiesCount?: number;
  services?: ServiceItem[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  longDescription: string;
  imageUrl: string;
  accentColor?: string;
  client: string;
  year: string;
  deliverables: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export type Milestone = TimelineMilestone;

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  size: "small" | "medium" | "large" | "full";
  className?: string;
}
