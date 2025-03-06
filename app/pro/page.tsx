import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Upload, ChartBar, Brain, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Membership | Nakamoto Insights",
  description: "Join an exclusive community of high-caliber investors and gain access to premium Web3 insights, personalized strategies, and expert consultation.",
};

export default function ProPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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

      {/* Pricing Plans */}
      <section className="py-20 relative">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Level of Access</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-border/40 relative overflow-hidden group hover:border-border/60 transition-colors">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-muted-foreground" />
                    Basic Access
                  </div>
                  <div className="text-3xl font-bold">Free</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Public articles access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Limited AI Chatbot (5/day)</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-primary relative overflow-hidden group hover:border-primary/80 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4" />
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <ChartBar className="h-5 w-5 text-primary" />
                    Nakamoto Pro
                  </div>
                  <div className="text-3xl font-bold">$15<span className="text-lg text-muted-foreground">/month</span></div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Deep Market Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Unlimited AI Chat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Investment Strategies</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-chart-1 to-chart-4 hover:from-chart-1/90 hover:to-chart-4/90">
                  Become Pro
                </Button>
              </CardContent>
            </Card>

            {/* VIP Plan */}
            <Card className="border-border/40 relative overflow-hidden group hover:border-border/60 transition-colors bg-gradient-to-b from-background to-muted/30">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5 text-blue-500" />
                    VIP Web3 Advisor
                  </div>
                  <div className="text-3xl font-bold">$50<span className="text-lg text-muted-foreground">/month</span></div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Personalized Reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>1:1 Consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Priority Audits</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  Join Inner Circle
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 bg-muted/30 border-y border-border/40">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Market Analysis */}
            <Card className="border-border/40 bg-card/50">
              <CardContent className="p-6">
                <ChartBar className="h-12 w-12 text-chart-1 mb-4" />
                <h3 className="text-xl font-bold mb-2">Deep Market Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time insights and predictions powered by advanced AI algorithms.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>BTC Trend Analysis</span>
                    <span className="text-green-500">+24.5%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-chart-1 rounded-full" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Strategies */}
            <Card className="border-border/40 bg-card/50">
              <CardContent className="p-6">
                <Brain className="h-12 w-12 text-chart-2 mb-4" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Strategies</h3>
                <p className="text-muted-foreground mb-4">
                  Personalized investment strategies based on your portfolio and goals.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Risk Level</span>
                    <span>Moderate</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-chart-2 rounded-full" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expert Consultation */}
            <Card className="border-border/40 bg-card/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=50&h=50&q=80"
                    alt="Alex Nakamoto"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Expert Consultation</h3>
                    <p className="text-muted-foreground">One-on-one sessions with Alex Nakamoto</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Book Session</Button>
              </CardContent>
            </Card>

            {/* Smart Contract Audits */}
            <Card className="border-border/40 bg-card/50">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-chart-4 mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Contract Audits</h3>
                <p className="text-muted-foreground mb-4">
                  Priority access to our smart contract auditing service.
                </p>
                <div className="border-2 border-dashed border-border rounded-lg p-4 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Upload className="h-4 w-4" />
                    <span>Upload Contract</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
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