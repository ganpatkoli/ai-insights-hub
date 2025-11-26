import { Hero } from "@/components/Hero";
import { FeaturedPost } from "@/components/FeaturedPost";
import { CategorySection } from "@/components/CategorySection";
import { StatsSection } from "@/components/StatsSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {

  const featuredPost = blogPosts[0];
  const aiInfoPosts = blogPosts.filter(post => post.category === "ai-info");
  const aiSafetyPosts = blogPosts.filter(post => post.category === "ai-safety");
  const aiToolsPosts = blogPosts.filter(post => post.category === "ai-tools");
  const aiHacksPosts = blogPosts.filter(post => post.category === "ai-hacks");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero />

      <StatsSection />

      <main className="container mx-auto px-4">
        {/* Featured Article */}
        <section className="py-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🌟 Featured Insight
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our top pick for AI safety and innovation guidance
            </p>
          </div>
          <FeaturedPost post={featuredPost} />
        </section>

        <Separator className="my-8" />

        {/* AI Info Section */}
        <CategorySection
          title="🤖 AI Information"
          description="Deep dives into AI technology, how models work, and the latest developments in artificial intelligence"
          posts={aiInfoPosts}
          categoryName="ai-info"
        />

        <Separator className="my-8" />

        {/* AI Safety Section */}
        <CategorySection
          title="🛡️ AI Safety & Ethics"
          description="Exploring responsible AI development, ethical considerations, and safety guidelines for AI systems"
          posts={aiSafetyPosts}
          categoryName="ai-safety"
        />

        <Separator className="my-8" />

        {/* AI Tools Section */}
        <CategorySection
          title="🛠️ AI Tools & Resources"
          description="Discover powerful AI tools, frameworks, and resources to supercharge your productivity and creativity"
          posts={aiToolsPosts}
          categoryName="ai-tools"
        />

        <Separator className="my-8" />

        {/* AI Hacks Section */}
        <CategorySection
          title="💡 AI Tips & Hacks"
          description="Expert tips, prompt engineering techniques, and practical hacks to get the most out of AI models"
          posts={aiHacksPosts}
          categoryName="ai-hacks"
        />

        {/* Newsletter Section */}
        <section className="py-16 animate-fade-in">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-primary-foreground shadow-glow hover-scale">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Protected with AIGuardian
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get the latest AI safety insights, tools, and expert guidance delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-2 border-transparent focus:border-accent focus:outline-none transition-all"
              />
              <button className="px-8 py-3 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-all hover-scale whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
