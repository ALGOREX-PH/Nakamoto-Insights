"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Headphones, MonitorPlay } from "lucide-react";

const features = [
  {
    icon: <FileText className="h-12 w-12 text-blue-500" />,
    title: "Deep Dive Breakdown",
    description: "Comprehensive PDF reports with detailed analysis charts and actionable insights from each webinar."
  },
  {
    icon: <Headphones className="h-12 w-12 text-purple-500" />,
    title: "AI-Generated Podcast",
    description: "Listen to webinar content on-the-go with AI-generated audio quality and smart timestamps."
  },
  {
    icon: <MonitorPlay className="h-12 w-12 text-green-500" />,
    title: "Interactive Whiteboard",
    description: "Review and interact with Alex's live annotations and technical analysis breakdowns."
  }
];

const PremiumFeatures = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-2">Premium Features</h2>
      <p className="text-muted-foreground text-center mb-8">
        Unlock exclusive features and get more from your webinar experience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PremiumFeatures;