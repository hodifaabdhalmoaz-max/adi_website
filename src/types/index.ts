export type ServiceCategory = 'desktop' | 'mobile' | 'web' | 'solutions';

export interface ServiceItem {
  id: ServiceCategory;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  descriptionAr: string;
  technologies: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  client: string;
  summary: string;
  description: string;
  image: string;
  previewVideoUrl?: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  year: string;
  featured: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: ServiceCategory | 'all';
  categoryLabel: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export interface EstimatorFormData {
  serviceType: ServiceCategory;
  scope: 'mvp' | 'full' | 'enterprise';
  platforms: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  details: string;
}
