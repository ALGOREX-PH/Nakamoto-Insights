import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface InsightProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
}

const insights: InsightProps[] = [
  {
    title: "The Future of DeFi: 2025 Outlook",
    description: "An in-depth analysis of decentralized finance trends and predictions for the coming year.",
    category: "DeFi",
    date: "March 15, 2025",
    readTime: "8 min read",
    slug: "future-of-defi-2025",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "NFT Market Analysis Q1 2025",
    description: "Comprehensive review of NFT market performance and trends in the first quarter.",
    category: "NFTs",
    date: "March 12, 2025",
    readTime: "12 min read",
    slug: "nft-market-analysis-q1-2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Layer 2 Solutions: Deep Dive",
    description: "Technical analysis of leading Layer 2 scaling solutions and their potential impact.",
    category: "Technology",
    date: "March 10, 2025",
    readTime: "10 min read",
    slug: "layer-2-solutions-deep-dive",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
  }
];

const FeaturedInsight = ({ insight }: { insight: InsightProps }) => {
  return (
    <Card className="h-full border-border/40 overflow-hidden transition-all hover:shadow-md group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={insight.image} 
          alt={insight.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">{insight.category}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div className="text-xs text-muted-foreground">{insight.date}</div>
        </div>
        <CardTitle className="text-xl line-clamp-2">{insight.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {insight.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2">
        <span className="text-xs text-muted-foreground">{insight.readTime}</span>
        <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
          <Link href={`/insights/${insight.slug}`}>
            Read more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedInsights = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-bold">Latest Insights</h2>
        <Button variant="outline" asChild>
          <Link href="/insights">
            View all <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <FeaturedInsight key={index} insight={insight} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedInsights;