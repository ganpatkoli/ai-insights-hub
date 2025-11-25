import { BlogPost } from "@/types/blog";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const categoryColors = {
    'AI Info': 'bg-primary/10 text-primary border-primary/20',
    'AI Safety': 'bg-destructive/10 text-destructive border-destructive/20',
    'AI Tools': 'bg-accent/10 text-accent border-accent/20',
    'AI Hacks': 'bg-secondary text-secondary-foreground border-secondary',
  };

  return (
    <Link to={`/blog/${post.id}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <CardHeader className="space-y-3">
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className={categoryColors[post.category]}>
              {post.category}
            </Badge>
            {post.tags.slice(0, 2).map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
