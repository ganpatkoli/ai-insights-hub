import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
    'AI Info': 'bg-primary/10 text-primary border-primary/20',
    'AI Safety': 'bg-destructive/10 text-destructive border-destructive/20',
    'AI Tools': 'bg-accent/10 text-accent border-accent/20',
    'AI Hacks': 'bg-secondary text-secondary-foreground border-secondary',
  };

  return (
    <>
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
            <h3 className="text-2xl font-bold mb-6">Continue Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group">
                    <div className="space-y-2">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full aspect-video object-cover rounded-lg group-hover:shadow-md transition-shadow"
                      />
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
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
