import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, TrendingUp, MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-12 md:py-16 lg:py-24 w-full">
      {/* Hexagonal grid background with parallax effect */}
      <div className="absolute inset-0 z-0 opacity-10 transform translate-y-0 transition-transform duration-1000 ease-out">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
              <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 mx-auto max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4">
              Alex Nakamoto
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-foreground/90">
              Your Crypto Visionary
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Leading crypto analyst with over a decade of experience in blockchain technology and market insights.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center lg:items-start">
                <span className="text-sm text-muted-foreground">Years Experience</span>
                <span className="text-2xl font-bold text-chart-1">10+</span>
              </div>
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center lg:items-start">
                <span className="text-sm text-muted-foreground">Market Insights</span>
                <span className="text-2xl font-bold text-chart-2">500+</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto group" asChild>
                <Link href="/market-analysis">
                  <TrendingUp className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Latest Analysis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto group" asChild>
                <Link href="#chat">
                  <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Ask Crypto Sage AI
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-gradient-to-br from-chart-1/20 to-chart-3/20 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-card/30 backdrop-blur-md rounded-lg p-6 flex flex-col">
                  <h3 className="text-xl font-semibold mb-4">Market Graph Visualization</h3>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Interactive market data visualization coming soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;