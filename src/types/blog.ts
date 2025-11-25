export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'AI Info' | 'AI Safety' | 'AI Tools' | 'AI Hacks';
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}
