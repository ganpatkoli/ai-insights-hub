export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'ai-info' | 'ai-safety' | 'ai-tools' | 'ai-hacks';
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}
