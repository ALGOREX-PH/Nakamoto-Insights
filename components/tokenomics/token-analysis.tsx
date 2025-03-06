"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TokenAnalysis = () => {
  return (
    <Card className="border-border/40">
      <CardHeader>
        <CardTitle>Token Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Name</div>
              <div className="font-medium">Sample Token</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Symbol</div>
              <div className="font-medium">SMPL</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Market Cap</div>
              <div className="font-medium">$10,000,000</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Total Supply</div>
              <div className="font-medium">1,000,000</div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40">
            <h4 className="font-medium mb-2">Security Score</h4>
            <div className="flex items-center gap-2">
              <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-green-500 rounded-full" />
              </div>
              <span className="text-sm font-medium">85%</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border/40">
            <h4 className="font-medium mb-2">Key Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Liquidity Score</span>
                <span className="text-sm font-medium">92/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Holder Distribution</span>
                <span className="text-sm font-medium">87/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Code Quality</span>
                <span className="text-sm font-medium">95/100</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenAnalysis;