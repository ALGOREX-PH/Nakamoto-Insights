import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import LedgerHeader from "@/components/ledger/ledger-header";
import FeaturedReports from "@/components/ledger/featured-reports";
import PricingTiers from "@/components/ledger/pricing-tiers";

export const metadata: Metadata = {
  title: "Research | Nakamoto Insights",
  description: "In-depth cryptocurrency research and analysis",
};

const researchCategories = [
  {
    title: "Market Analysis",
    description: "Deep dives into market trends, price analysis, and trading patterns",
    link: "/research/market-analysis",
  },
  {
    title: "DeFi Research",
    description: "Comprehensive analysis of DeFi protocols, yields, and risks",
    link: "/research/defi",
  },
  {
    title: "On-Chain Analysis",
    description: "Blockchain data analysis and network metrics",
    link: "/research/on-chain",
  },
  {
    title: "Regulatory Updates",
    description: "Latest developments in crypto regulation and compliance",
    link: "/research/regulatory",
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <LedgerHeader />
      
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Crypto Research{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4">
                & Analysis
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Access in-depth research, market analysis, and insights from our team of crypto experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-12">
        <div className="container">
          <FeaturedReports />
        </div>
      </section>
      
      {/* Research Categories */}
      <section className="py-12 bg-muted/30 border-y border-border/40">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Research Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                    <Link href={category.link}>
                      <FileText className="mr-2 h-4 w-4" />
                      View Research
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Tiers */}
      <section className="py-12">
        <div className="container">
          <PricingTiers />
        </div>
      </section>
    </div>
  );
}