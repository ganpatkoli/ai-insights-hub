import { BlogPost } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedPostProps {
  post: BlogPost;
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg group animate-fade-in hover-scale">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="bg-card p-8 md:p-12 flex flex-col justify-center">
          <div className="flex gap-2 mb-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {post.category}
            </Badge>
            <Badge variant="secondary">Featured</Badge>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <Link to={`/blog/${post.id}`}>
            <Button size="lg" className="group/btn">
              Read Article
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
