"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Silver Access",
    description: "Perfect for individual researchers",
    price: 99,
    features: [
      "Access to archived premium reports",
      "Basic research tools",
      "Monthly market insights",
    ],
    buttonText: "Choose Silver",
    buttonVariant: "outline",
  },
  {
    name: "Gold Access",
    description: "For professional traders & analysts",
    price: 299,
    features: [
      "All Silver features",
      "Real-time research updates",
      "Advanced analytics tools",
      "Priority support",
    ],
    buttonText: "Choose Gold",
    buttonVariant: "default",
    popular: true,
  },
  {
    name: "Platinum Access",
    description: "For institutions & VIP clients",
    price: 999,
    features: [
      "All Gold features",
      "Direct analyst access",
      "Custom research requests",
      "Early market intelligence",
    ],
    buttonText: "Choose Platinum",
    buttonVariant: "outline",
  },
];

const PricingTiers = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Premium Research Access</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get exclusive access to institutional-grade research, real-time updates, and direct analyst insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <Card 
            key={index}
            className={`relative ${
              tier.popular ? "border-primary shadow-lg" : "border-border/40"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
            )}
            
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{tier.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.buttonVariant as "outline" | "default"}
                className={`w-full ${
                  tier.popular 
                    ? "bg-gradient-to-r from-chart-1 to-chart-4 hover:from-chart-1/90 hover:to-chart-4/90" 
                    : ""
                }`}
              >
                {tier.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingTiers;