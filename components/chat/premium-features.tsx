import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

const features = {
  free: [
    "Basic market analysis",
    "Limited chat with Alex",
    "Public trading signals"
  ],
  premium: [
    "Advanced AI analysis",
    "Unlimited chat access",
    "Priority support",
    "Custom reports & alerts"
  ]
};

const PremiumFeatures = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Premium Features</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Free Tier */}
        <Card className="border-border/40">
          <CardHeader>
            <CardTitle className="text-lg">Free</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-6">
              {features.free.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full" variant="outline">
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Premium Tier */}
        <Card className="border-border/40 bg-gradient-to-br from-chart-1/10 via-chart-2/10 to-chart-4/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Premium</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-6">
              {features.premium.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-chart-1 to-chart-4 hover:from-chart-1/90 hover:to-chart-4/90">
              Upgrade Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PremiumFeatures;