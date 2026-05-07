export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  level: number; // 1-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}
