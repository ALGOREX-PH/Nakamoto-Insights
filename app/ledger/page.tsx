import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Star, ArrowRight, Users, FileText, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";
import LedgerHeader from "@/components/ledger/ledger-header";
import FeaturedReports from "@/components/ledger/featured-reports";
import PricingTiers from "@/components/ledger/pricing-tiers";

export const metadata: Metadata = {
  title: "Nakamoto Ledger | Research & Reports",
  description: "Access exclusive crypto research, market analysis, and detailed reports.",
};

export default function LedgerPage() {
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
              The Future of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4">
                Crypto Research
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Dive deep into the world of cryptocurrency with our comprehensive research platform. 
              Access real-time insights, detailed analysis, and exclusive reports.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-chart-1 to-chart-4">
                Start Exploring
              </Button>
              <Button size="lg" variant="outline">
                View Premium Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Reports */}
      <section className="py-12 border-t border-border/40">
        <div className="container">
          <FeaturedReports />
        </div>
      </section>

      {/* Premium Research Access */}
      <section className="py-12 bg-muted/30 border-y border-border/40">
        <div className="container">
          <PricingTiers />
        </div>
      </section>
    </div>
  );
}