"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

interface YieldOpportunity {
  protocol: string;
  asset: string;
  apy: number;
  tvl: string;
  logo: string;
}

const DefiYields = () => {
  const [opportunities, setOpportunities] = useState<YieldOpportunity[]>([
    {
      protocol: "AAVE",
      asset: "USDC",
      apy: 5.2,
      tvl: "$3.4B",
      logo: "https://cryptologos.cc/logos/aave-aave-logo.svg?v=024",
    },
    {
      protocol: "Curve",
      asset: "DAI/USDT",
      apy: 7.8,
      tvl: "$2.8B",
      logo: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.svg?v=024",
    },
    {
      protocol: "Uniswap",
      asset: "ETH/USDC",
      apy: 3.1,
      tvl: "$1.5B",
      logo: "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=024",
    },
  ]);

  // Simulate APY updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOpportunities(prev => prev.map(opp => ({
        ...opp,
        apy: Math.max(0.1, opp.apy + (Math.random() - 0.5)),
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>DeFi Yield Opportunities</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="highest">
          <TabsList className="mb-4">
            <TabsTrigger value="highest">Highest APY</TabsTrigger>
            <TabsTrigger value="stable">Stable</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>
          <TabsContent value="highest" className="space-y-4">
            {opportunities.map((opp) => (
              <div key={`${opp.protocol}-${opp.asset}`} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <img src={opp.logo} alt={opp.protocol} className="w-8 h-8" />
                  <div>
                    <div className="font-medium">{opp.protocol}</div>
                    <div className="text-sm text-muted-foreground">{opp.asset}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-500 font-medium">{opp.apy.toFixed(1)}% APY</div>
                  <div className="text-sm text-muted-foreground">TVL: {opp.tvl}</div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DefiYields