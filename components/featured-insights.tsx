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
}

const insights: InsightProps[] = [
  {
    title: "The Future of DeFi: Trends to Watch in 2025",
    description: "Decentralized Finance continues to evolve at a rapid pace. Here's what to expect in the coming year.",
    category: "DeFi",
    date: "May 15, 2025",
    readTime: "8 min read",
    slug: "future-of-defi-2025"
  },
  {
    title: "Bitcoin Halving: Historical Impact on Market Cycles",
    description: "Analyzing how previous Bitcoin halvings have influenced price action and market sentiment.",
    category: "Bitcoin",
    date: "May 10, 2025",
    readTime: "12 min read",
    slug: "bitcoin-halving-market-cycles"
  },
  {
    title: "Layer 2 Solutions: Scaling Blockchain for Mass Adoption",
    description: "How Layer 2 protocols are addressing blockchain's scalability challenges and enabling mainstream use.",
    category: "Technology",
    date: "May 5, 2025",
    readTime: "10 min read",
    slug: "layer-2-solutions-scaling"
  }
];

const FeaturedInsight = ({ insight }: { insight: InsightProps }) => {
  return (
    <Card className="h-full border-border/40 overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="mb-2">{insight.category}</Badge>
          <div className="text-xs text-muted-foreground">{insight.date}</div>
        </div>
        <CardTitle className="text-xl">{insight.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground">
          {insight.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2">
        <span className="text-xs text-muted-foreground">{insight.readTime}</span>
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/insights/${insight.slug}`}>
            Read more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedInsights = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Insights</h2>
        <Button variant="outline" asChild>
          <Link href="/insights">
            View all <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <FeaturedInsight key={index} insight={insight} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedInsights;