import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Upload, ChartBar, Brain, Shield } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/pro/hero-section";
import PricingSection from "@/components/pro/pricing-section";
import FeaturesSection from "@/components/pro/features-section";

export const metadata: Metadata = {
  title: "Premium Membership | Nakamoto Insights",
  description:
    "Join an exclusive community of high-caliber investors and gain access to premium Web3 insights, personalized strategies, and expert consultation.",
};

export default function ProPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Circuit Board Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div> {/* ✅ Added missing closing </div> */}

        <HeroSection />
        <PricingSection />
        <FeaturesSection />
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Enter the Elite Circle?</h2>
            <p className="text-muted-foreground mb-8">
              Join the most sophisticated Web3 intelligence platform and unlock
              your investment potential.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Journey Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
