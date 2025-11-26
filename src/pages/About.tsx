import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Target, Users, Lightbulb, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Safety Researcher",
      description: "Leading expert in AI alignment and safety protocols with 10+ years in ML research.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "Ethics & Governance Lead",
      description: "Specializes in AI ethics frameworks and responsible AI development practices.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Emily Watson",
      role: "AI Tools Specialist",
      description: "Expert in AI implementation and helping developers leverage cutting-edge tools.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "David Park",
      role: "Technical Writer",
      description: "Making complex AI concepts accessible through clear, actionable content.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize AI safety and ethical considerations in everything we do, ensuring responsible innovation."
    },
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Our mission is to make AI accessible, safe, and beneficial for everyone in society."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We build bridges between AI researchers, developers, and the broader community."
    },
    {
      icon: Lightbulb,
      title: "Innovation Minded",
      description: "We explore cutting-edge AI developments while maintaining a critical, thoughtful perspective."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container relative z-10 mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">AIGuardian</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in navigating the AI revolution with safety, ethics, and innovation at the forefront
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-16">
        {/* Mission Section */}
        <section className="py-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
            <Card className="p-8 md:p-12 bg-card hover-scale">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                AIGuardian was founded with a singular purpose: to be the trusted guardian of responsible AI innovation. 
                In a world where artificial intelligence is rapidly transforming every aspect of our lives, we believe 
                that safety, ethics, and transparency must be paramount.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide comprehensive insights, practical tools, and expert guidance to help individuals and 
                organizations harness the power of AI while maintaining the highest standards of safety and ethical responsibility.
              </p>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-scale"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-scale"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <Card className="bg-gradient-hero p-8 md:p-12 text-center text-primary-foreground hover-scale">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Stay informed about AI safety, get expert insights, and be part of the responsible AI revolution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="hover-scale">
                <Link to="/search">
                  Explore Articles
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 hover:bg-background/20 border-background/20 text-primary-foreground hover-scale">
                Subscribe to Newsletter
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
