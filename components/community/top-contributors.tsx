"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const contributors = [
  {
    name: "satoshi.btc",
    reputation: 98.5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32&q=80",
  },
  {
    name: "whale.eth",
    reputation: 95.2,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=32&h=32&q=80",
  },
  {
    name: "crypto.sage",
    reputation: 94.8,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32&q=80",
  },
];

const TopContributors = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Top Contributors</CardTitle>
        <Trophy className="h-4 w-4 text-yellow-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contributors.map((contributor, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="font-medium">{contributor.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Reputation: {contributor.reputation}
                  </div>
                </div>
              </div>
              {index === 0 && (
                <Trophy className="h-4 w-4 text-yellow-500" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopContributors;