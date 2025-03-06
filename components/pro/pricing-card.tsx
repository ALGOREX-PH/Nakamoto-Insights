"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, DivideIcon as LucideIcon } from "lucide-react";

interface PricingCardProps {
  title: string;
  icon: LucideIcon;
  price: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline";
  isPopular?: boolean;
  iconColor?: string;
  gradientBorder?: boolean;
}

export default function PricingCard({
  title,
  icon: Icon,
  price,
  features,
  buttonText,
  buttonVariant = "default",
  isPopular = false,
  iconColor = "text-muted-foreground",
  gradientBorder = false,
}: PricingCardProps) {
  return (
    <Card className={`border-border/40 relative overflow-hidden group hover:border-border/60 transition-colors ${
      gradientBorder ? "border-primary" : ""
    } ${isPopular ? "bg-gradient-to-b from-background to-muted/30" : ""}`}>
      {gradientBorder && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4" />
      )}
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-2 mb-2">
            <Icon className={`h-5 w-5 ${iconColor}`} />
            {title}
          </div>
          <div className="text-3xl font-bold">{price}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant={buttonVariant} 
          className={`w-full ${
            gradientBorder 
              ? "bg-gradient-to-r from-chart-1 to-chart-4 hover:from-chart-1/90 hover:to-chart-4/90" 
              : isPopular 
              ? "group-hover:bg-blue-500 group-hover:text-white transition-colors"
              : ""
          }`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}