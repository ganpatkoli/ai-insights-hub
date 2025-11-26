import { BlogPost } from "@/types/blog";
import { BlogCard } from "./BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategorySectionProps {
  title: string;
  description: string;
  posts: BlogPost[];
  categoryName: string;
}

export const CategorySection = ({ title, description, posts, categoryName }: CategorySectionProps) => {
  const displayPosts = posts.slice(0, 3);

  if (displayPosts.length === 0) return null;

  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        
        {posts.length > 3 && (
          <Button variant="outline" asChild className="group">
            <Link to={`/category/${categoryName}`}>
              View All
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPosts.map(post => (
          <div key={post.id} className="animate-fade-in">
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
};
