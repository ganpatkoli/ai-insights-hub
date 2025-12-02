import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const categoryColors = {
    'ai-info': 'bg-primary/10 text-primary border-primary/20',
    'ai-safety': 'bg-destructive/10 text-destructive border-destructive/20',
    'ai-tools': 'bg-accent/10 text-accent border-accent/20',
    'ai-hacks': 'bg-secondary text-secondary-foreground border-secondary',
  };

  // Smart related articles based on category and tags
  const getRelatedPosts = () => {
    const otherPosts = blogPosts.filter(p => p.id !== post.id);
    
    // Score each post based on similarity
    const scoredPosts = otherPosts.map(p => {
      let score = 0;
      
      // Same category gets higher score
      if (p.category === post.category) score += 10;
      
      // Count matching tags
      const matchingTags = p.tags.filter(tag => post.tags.includes(tag));
      score += matchingTags.length * 3;
      
      return { post: p, score };
    });
    
    // Sort by score and return top 3
    return scoredPosts
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.post);
  };

  const relatedPosts = getRelatedPosts();

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <article className="min-h-screen">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className={categoryColors[post.category]}>
                {post.category}
              </Badge>
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none pt-8">
              <div className="text-xl text-muted-foreground mb-8">
                {post.excerpt}
              </div>
              
              <div className="whitespace-pre-wrap leading-relaxed text-foreground">
                {post.content}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group">
                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <Badge variant="outline" className={categoryColors[relatedPost.category]}>
                      {relatedPost.category}
                    </Badge>
                    <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default BlogPost;
