"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Decoding the Future of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4">
                Decentralization
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Redefining trustless systems, one block at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Get in Touch</Button>
              <Button size="lg" variant="outline">View Research</Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1639803938107-6d5a5303d2d7?auto=format&fit=crop&w=800&q=80"
                alt="Alex Nakamoto"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}