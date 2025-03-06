"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DivideIcon as LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  colorClass: string;
  children?: React.ReactNode;
}

export default function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  colorClass,
  children 
}: FeatureCardProps) {
  return (
    <Card className="border-border/40 bg-card/50">
      <CardContent className="p-6">
        <Icon className={`h-12 w-12 ${colorClass} mb-4`} />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
}