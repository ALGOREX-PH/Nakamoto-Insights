"use client";

import { ChartBar, Brain, Shield, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "./feature-card";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30 border-y border-border/40">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Premium Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            icon={ChartBar}
            title="Deep Market Analysis"
            description="Real-time insights and predictions powered by advanced AI algorithms."
            colorClass="text-chart-1"
          >
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span>BTC Trend Analysis</span>
                <span className="text-green-500">+24.5%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-chart-1 rounded-full" />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Brain}
            title="AI-Powered Strategies"
            description="Personalized investment strategies based on your portfolio and goals."
            colorClass="text-chart-2"
          >
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span>Risk Level</span>
                <span>Moderate</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-chart-2 rounded-full" />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Brain}
            title="Expert Consultation"
            description="One-on-one sessions with Alex Nakamoto"
            colorClass="text-chart-3"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=50&h=50&q=80"
                alt="Alex Nakamoto"
                className="rounded-full"
              />
              <Button variant="outline" className="w-full">Book Session</Button>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Shield}
            title="Smart Contract Audits"
            description="Priority access to our smart contract auditing service."
            colorClass="text-chart-4"
          >
            <div className="border-2 border-dashed border-border rounded-lg p-4 flex items-center justify-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Upload className="h-4 w-4" />
                <span>Upload Contract</span>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}