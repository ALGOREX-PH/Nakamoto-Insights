import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from "lucide-react";

const marketData = {
  sentiment: [
    { asset: "Bitcoin", status: "Bullish", color: "text-green-500" },
    { asset: "Ethereum", status: "Neutral", color: "text-yellow-500" }
  ],
  signals: [
    { pair: "BTC/USD", action: "Buy", price: "42,850" },
    { pair: "ETH/USD", action: "Sell", price: "2,850" }
  ],
  risk: [
    { metric: "Market Risk", level: "Moderate", color: "text-yellow-500" },
    { metric: "Volatility", level: "High", color: "text-red-500" }
  ]
};

const MarketIntelligence = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Market Intelligence</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Market Sentiment */}
        <Card className="border-border/40">
          <CardHeader>
            <CardTitle className="text-lg">Market Sentiment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketData.sentiment.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{item.asset}</span>
                  <Badge variant="outline" className={item.color}>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trading Signals */}
        <Card className="border-border/40">
          <CardHeader>
            <CardTitle className="text-lg">Trading Signals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketData.signals.map((signal, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{signal.pair}</div>
                    <div className="text-sm text-muted-foreground">${signal.price}</div>
                  </div>
                  <Badge variant="outline" className={signal.action === "Buy" ? "text-green-500" : "text-red-500"}>
                    {signal.action}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Risk Analysis */}
        <Card className="border-border/40">
          <CardHeader>
            <CardTitle className="text-lg">Risk Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketData.risk.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{item.metric}</span>
                  <Badge variant="outline" className={item.color}>
                    {item.level}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketIntelligence;