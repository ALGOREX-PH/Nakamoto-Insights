"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

interface Report {
  category: string;
  title: string;
  description: string;
  author: {
    name: string;
    image: string;
  };
  isFeatured?: boolean;
}

const reports: Report[] = [
  {
    category: "Bitcoin",
    title: "Global Bitcoin Adoption Metrics 2025",
    description: "Comprehensive analysis of Bitcoin's penetration across regions and its impact on traditional financial systems.",
    author: {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&h=50&q=80",
    },
    isFeatured: true,
  },
  {
    category: "DeFi",
    title: "DeFi Security Analysis Q1 2025",
    description: "In-depth investigation of recent DeFi attacks and recommended security measures for protocols.",
    author: {
      name: "Mark Johnson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=50&h=50&q=80",
    },
  },
  {
    category: "Regulatory",
    title: "Global Crypto Regulation Overview",
    description: "Analysis of upcoming regulatory changes and their potential impact on the crypto market.",
    author: {
      name: "David Kim",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=50&h=50&q=80",
    },
  },
];

const FeaturedReports = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Featured Research Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  {report.category}
                </span>
                {report.isFeatured && (
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                )}
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {report.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {report.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={report.author.image}
                    alt={report.author.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-muted-foreground">
                    By {report.author.name}
                  </span>
                </div>
                
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedReports;