"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const discussions = [
  {
    title: "BTC Technical Analysis",
    participants: 234,
    status: "Live",
  },
  {
    title: "DeFi Yield Strategies",
    participants: 156,
    status: "Live",
  },
  {
    title: "NFT Market Overview",
    participants: 89,
    status: "Starting Soon",
  },
];

const LiveDiscussions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Live Discussions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {discussions.map((discussion, index) => (
            <div key={index} className="border-b border-border/40 last:border-0 pb-4 last:pb-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">{discussion.title}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  discussion.status === "Live" 
                    ? "bg-green-500/10 text-green-500" 
                    : "bg-yellow-500/10 text-yellow-500"
                }`}>
                  {discussion.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  {discussion.participants} listening
                </div>
                <Button size="sm">Join</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveDiscussions;