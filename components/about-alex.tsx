import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutAlex = () => {
  return (
    <Card className="border-border/40 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-[300px] md:h-auto overflow-hidden bg-muted">
          <img 
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Alex Nakamoto" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <CardContent className="flex flex-col justify-center p-6">
          <h2 className="text-2xl font-bold mb-2">Meet Alex Nakamoto</h2>
          <h3 className="text-lg text-muted-foreground mb-4">The Crypto Sage</h3>
          <p className="mb-4">
            With over a decade of experience in cryptocurrency markets, blockchain technology, and financial analysis, 
            Alex Nakamoto has established himself as one of the leading voices in the crypto space.
          </p>
          <p className="mb-6">
            As a former quantitative analyst at a major investment bank and early Bitcoin adopter, 
            Alex combines technical expertise with practical market insights to help investors navigate 
            the complex world of digital assets.
          </p>
          <Button variant="outline" className="self-start" asChild>
            <Link href="/about">
              Learn more about Alex <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default AboutAlex;