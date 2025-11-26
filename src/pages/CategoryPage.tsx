import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { blogPosts } from "@/data/blogPosts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const POSTS_PER_PAGE = 6;

const categoryInfo: Record<string, { title: string; description: string }> = {
  "ai-info": {
    title: "AI Information & Insights",
    description: "Comprehensive guides and insights into artificial intelligence technology, trends, and innovations."
  },
  "ai-safety": {
    title: "AI Safety & Ethics",
    description: "Essential guidelines and best practices for responsible AI development and deployment."
  },
  "ai-tools": {
    title: "AI Tools & Platforms",
    description: "Discover cutting-edge AI tools and platforms transforming industries worldwide."
  },
  "ai-hacks": {
    title: "AI Tips & Tricks",
    description: "Expert tips, tricks, and productivity hacks for maximizing AI capabilities."
  }
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  
  const categoryPosts = blogPosts.filter(post => post.category === category);
  const info = category ? categoryInfo[category] : null;

  const totalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = categoryPosts.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!info || categoryPosts.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 animate-fade-in">
          <Button asChild variant="ghost" className="mb-6 hover-scale">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{info.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{info.description}</p>
          <div className="mt-4 text-sm text-muted-foreground">
            {categoryPosts.length} {categoryPosts.length === 1 ? 'article' : 'articles'}
            {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2 animate-fade-in">
            <Button
              variant="outline"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="hover-scale"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => goToPage(page)}
                  className="w-10 h-10 p-0 hover-scale"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="hover-scale"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
