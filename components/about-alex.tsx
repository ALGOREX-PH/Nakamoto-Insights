import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutAlex = () => {
  return (
    <Card className="border-border/40 overflow-hidden bg-gradient-to-br from-background to-muted/30">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-[250px] sm:h-[300px] md:h-auto overflow-hidden bg-muted order-1 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Alex Nakamoto" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-3">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center">
                <span className="text-xs text-muted-foreground">Experience</span>
                <span className="text-xl font-bold text-chart-1">10+</span>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center">
                <span className="text-xs text-muted-foreground">Insights</span>
                <span className="text-xl font-bold text-chart-2">500+</span>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="flex flex-col justify-center p-4 sm:p-6 order-2 md:order-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Meet Alex Nakamoto</h2>
          <h3 className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">The Crypto Sage</h3>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">
            With over a decade of experience in cryptocurrency markets, blockchain technology, and financial analysis, 
            Alex Nakamoto has established himself as one of the leading voices in the crypto space.
          </p>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">
            As a former quantitative analyst at a major investment bank and early Bitcoin adopter, 
            Alex combines technical expertise with practical market insights to help investors navigate 
            the complex world of digital assets.
          </p>
          <Button variant="outline" className="self-start group" asChild>
            <Link href="/about">
              Learn more about Alex <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default AboutAlex;