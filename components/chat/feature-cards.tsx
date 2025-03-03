import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Wallet, Shield, ScrollText } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="h-6 w-6 text-chart-1" />,
    title: "Market Analysis",
    description: "AI-driven Bitcoin trend analysis and market predictions"
  },
  {
    icon: <Wallet className="h-6 w-6 text-chart-2" />,
    title: "DeFi Strategies",
    description: "Optimize your lending and yield farming investments"
  },
  {
    icon: <Shield className="h-6 w-6 text-chart-3" />,
    title: "Security Audits",
    description: "Smart contract evaluation and risk analysis"
  },
  {
    icon: <ScrollText className="h-6 w-6 text-chart-4" />,
    title: "Compliance",
    description: "Stay updated with crypto regulations"
  }
];

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <Card key={index} className="border-border/40 bg-card/50 hover:bg-card/80 transition-colors">
          <CardContent className="p-6">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCards;