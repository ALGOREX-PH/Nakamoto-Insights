"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Circuit Board Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Elite Access to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4">
              Web3 Intelligence
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Join an exclusive community of high-caliber investors and gain access to 
            premium Web3 insights, personalized strategies, and expert consultation.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400"
          >
            Unlock Premium Access
          </Button>
        </div>
      </div>
    </section>
  );
}