"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
}

export default function ExpertiseCard({ icon: Icon, title, description, colorClass }: ExpertiseCardProps) {
  return (
    <Card className="bg-card/50">
      <CardContent className="p-6">
        <Icon className={`h-8 w-8 ${colorClass} mb-4`} />
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}