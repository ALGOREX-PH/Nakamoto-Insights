"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, Clock, Users, FileText, Headphones, MonitorPlay } from "lucide-react";
import Link from "next/link";
import UpcomingEvents from "@/components/events/upcoming-events";
import PastWebinars from "@/components/events/past-webinars";
import PremiumFeatures from "@/components/events/premium-features";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="Alex Nakamoto"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                  Unfiltered. Uncensored.{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    Unparalleled.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Ask Alex Nakamoto Anything. Live, raw, and real insights on the blockchain revolution.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Play className="mr-2 h-5 w-5" />
                Join the Next Live AMA
              </Button>
              <Button size="lg" variant="outline">
                <MonitorPlay className="mr-2 h-5 w-5" />
                Watch Past Webinars
              </Button>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Next AMA in:</span>
              </div>
              <div className="flex gap-2">
                <span className="bg-muted px-2 py-1 rounded">02</span>:
                <span className="bg-muted px-2 py-1 rounded">18</span>:
                <span className="bg-muted px-2 py-1 rounded">45</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12">
        <div className="container">
          <UpcomingEvents />
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <PastWebinars />
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-12">
        <div className="container">
          <PremiumFeatures />
        </div>
      </section>
    </div>
  );
}