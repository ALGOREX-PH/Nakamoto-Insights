import { Metadata } from "next";
import ChatInterface from "@/components/chat/chat-interface";
import MarketIntelligence from "@/components/chat/market-intelligence";
import PremiumFeatures from "@/components/chat/premium-features";
import FeatureCards from "@/components/chat/feature-cards";

export const metadata: Metadata = {
  title: "Crypto Sage AI | Nakamoto Insights",
  description: "Chat with Alex Nakamoto AI - Get real-time crypto analysis, market insights, and smart contract audits.",
};

export default function ChatPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-12 lg:py-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="text-foreground">AI-Powered </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4">
                  Crypto Intelligence
                </span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Meet Alex Nakamoto, your personal AI crypto analyst. Get real-time insights, market analysis, and smart contract audits.
              </p>
            </div>
            <div className="relative h-[300px] lg:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1639803938107-6d5a5303d2d7?auto=format&fit=crop&w=800&q=80"
                alt="AI Crypto Analysis"
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 border-y border-border/40 bg-muted/30">
        <div className="container">
          <FeatureCards />
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-12">
        <div className="container">
          <ChatInterface />
        </div>
      </section>

      {/* Market Intelligence */}
      <section className="py-12 bg-muted/30 border-y border-border/40">
        <div className="container">
          <MarketIntelligence />
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