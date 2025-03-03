import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, TrendingUp, Code, Search } from "lucide-react";
import Link from "next/link";
import SearchBar from "@/components/education/search-bar";
import TrendingArticles from "@/components/education/trending-articles";
import KnowledgeCategories from "@/components/education/knowledge-categories";

export default function EducationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-background py-20 sm:py-32">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-10 container px-4 sm:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4">
              Unlock Crypto Wisdom
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Your Premier Crypto Knowledge Hub. Explore, Learn, and Stay Ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-chart-1 to-chart-4">
                Explore Crypto Knowledge
              </Button>
              <Button size="lg" variant="outline">
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="border-y border-border/40 bg-muted/30">
        <div className="container px-4 sm:px-6 py-6">
          <SearchBar />
        </div>
      </div>

      {/* Trending Articles */}
      <section className="py-12">
        <div className="container px-4 sm:px-6">
          <TrendingArticles />
        </div>
      </section>

      {/* Knowledge Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <KnowledgeCategories />
        </div>
      </section>
    </div>
  );
}