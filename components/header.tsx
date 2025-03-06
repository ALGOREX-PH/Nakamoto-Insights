"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Bitcoin, 
  Menu, 
  X, 
  TrendingUp, 
  BookOpen, 
  MessageSquare, 
  User 
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 mx-auto max-w-full">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Bitcoin className="h-7 w-7 sm:h-8 sm:w-8 text-chart-1" />
            <span className="font-bold text-lg sm:text-xl">Nakamoto Insights</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link href="/market-analysis" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
            Market Analysis
          </Link>
          <Link href="/research" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
            Research
          </Link>
          <Link href="/education" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
            Education
          </Link>
          <Link href="/blog" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/community" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
            Community
          </Link>
          <Link href="/about" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Button variant="default" size="sm" className="ml-2">Subscribe</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 z-40 overflow-y-auto">
          <nav className="container flex flex-col space-y-4 py-6 px-4 mx-auto max-w-full">
            <Link 
              href="/market-analysis" 
              className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <TrendingUp className="h-5 w-5 text-chart-1" />
              <span>Market Analysis</span>
            </Link>
            <Link 
              href="/research" 
              className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5 text-chart-2" />
              <span>Research</span>
            </Link>
            <Link 
              href="/education" 
              className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5 text-chart-3" />
              <span>Education</span>
            </Link>
            <Link 
              href="/blog" 
              className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5 text-chart-4" />
              <span>Blog</span>
            </Link>
            <Link 
              href="/about" 
              className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 text-chart-5" />
              <span>Community</span>
            </Link>
            <Link 
              href="/about" 
              className="flex items-center gap-2 p-3 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 text-chart-5" />
              <span>About</span>
            </Link>
            <Button className="w-full mt-4" onClick={() => setIsMenuOpen(false)}>
              Subscribe
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;