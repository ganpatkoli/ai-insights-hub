import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="p-2 rounded-lg bg-gradient-hero">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              AI Insights Hub
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Articles
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <ThemeToggle />
            <Button size="sm">Subscribe</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/" className="block text-sm font-medium hover:text-primary transition-colors">
              Articles
            </Link>
            <Link to="/" className="block text-sm font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/" className="block text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-sm">Theme:</span>
              <ThemeToggle />
            </div>
            <Button size="sm" className="w-full">Subscribe</Button>
          </div>
        )}
      </div>
    </nav>
  );
};
