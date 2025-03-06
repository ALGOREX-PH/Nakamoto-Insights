"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

const MarketSentiment = () => {
  const [fearGreedIndex, setFearGreedIndex] = useState(72);
  const [volume24h, setVolume24h] = useState(42.8);
  const [volumeChange, setVolumeChange] = useState(-5.2);
  const [activeUsers, setActiveUsers] = useState(12.4);
  const [userChange, setUserChange] = useState(824);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setFearGreedIndex(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 2)));
      setVolume24h(prev => Math.max(0, prev + (Math.random() - 0.5) * 0.5));
      setVolumeChange(prev => Math.max(-10, Math.min(10, prev + (Math.random() - 0.5))));
      setActiveUsers(prev => Math.max(0, prev + (Math.random() - 0.5) * 0.1));
      setUserChange(prev => prev + Math.floor((Math.random() - 0.5) * 10));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="border-border/40">
      <CardHeader>
        <CardTitle>Market Sentiment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Fear & Greed Index</div>
            <div className="text-2xl font-bold">{fearGreedIndex}</div>
            <div className="text-sm text-green-500">Greed</div>
          </div>
          
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">24h Volume</div>
            <div className="text-2xl font-bold">${volume24h.toFixed(1)}B</div>
            <div className={`text-sm ${volumeChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {volumeChange >= 0 ? '+' : ''}{volumeChange.toFixed(1)}%
            </div>
          </div>
          
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Active Users</div>
            <div className="text-2xl font-bold">{activeUsers.toFixed(1)}k</div>
            <div className="text-sm text-green-500">+{userChange} today</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketSentiment;