"use client";

import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Bitcoin className="h-8 w-8 text-chart-1" />
            <span className="hidden font-bold text-xl sm:inline-block">Nakamoto Insights</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/market-analysis" className="text-muted-foreground hover:text-foreground transition-colors">
            Market Analysis
          </Link>
          <Link href="/research" className="text-muted-foreground hover:text-foreground transition-colors">
            Research
          </Link>
          <Link href="/education" className="text-muted-foreground hover:text-foreground transition-colors">
            Education
          </Link>
          <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Button variant="default">Subscribe</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/40 py-4">
          <nav className="container flex flex-col space-y-4">
            <Link 
              href="/market-analysis" 
              className="flex items-center gap-2 p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <TrendingUp className="h-5 w-5 text-chart-1" />
              <span>Market Analysis</span>
            </Link>
            <Link 
              href="/research" 
              className="flex items-center gap-2 p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5 text-chart-2" />
              <span>Research</span>
            </Link>
            <Link 
              href="/education" 
              className="flex items-center gap-2 p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5 text-chart-3" />
              <span>Education</span>
            </Link>
            <Link 
              href="/blog" 
              className="flex items-center gap-2 p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5 text-chart-4" />
              <span>Blog</span>
            </Link>
            <Link 
              href="/about" 
              className="flex items-center gap-2 p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 text-chart-5" />
              <span>About</span>
            </Link>
            <Button className="w-full">Subscribe</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;