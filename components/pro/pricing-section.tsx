"use client";

import { Shield, ChartBar, Brain } from "lucide-react";
import PricingCard from "./pricing-card";

const pricingPlans = [
  {
    title: "Basic Access",
    icon: Shield,
    price: "Free",
    features: [
      "Public articles access",
      "Limited AI Chatbot (5/day)"
    ],
    buttonText: "Upgrade Now",
    buttonVariant: "outline" as const,
    iconColor: "text-muted-foreground"
  },
  {
    title: "Nakamoto Pro",
    icon: ChartBar,
    price: "$15/month",
    features: [
      "Deep Market Analysis",
      "Unlimited AI Chat",
      "Investment Strategies"
    ],
    buttonText: "Become Pro",
    gradientBorder: true,
    iconColor: "text-primary"
  },
  {
    title: "VIP Web3 Advisor",
    icon: Brain,
    price: "$50/month",
    features: [
      "Personalized Reports",
      "1:1 Consultation",
      "Priority Audits"
    ],
    buttonText: "Join Inner Circle",
    buttonVariant: "outline" as const,
    isPopular: true,
    iconColor: "text-blue-500"
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 relative">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Level of Access</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}