import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="p-2 rounded-lg bg-gradient-hero">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                AI Insights Hub
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for AI knowledge, safety, and innovation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">AI Info</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">AI Safety</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">AI Tools</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">AI Hacks</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Twitter</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">LinkedIn</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">GitHub</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Insights Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
