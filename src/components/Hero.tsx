import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ai.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              AIGuardian: Safeguarding AI Innovation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your trusted guardian for AI safety, cutting-edge insights, and responsible innovation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-glow transition-all hover-scale" asChild>
              <Link to="/search">
                Explore Articles
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 hover-scale" asChild>
              <Link to="/about">
                About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
