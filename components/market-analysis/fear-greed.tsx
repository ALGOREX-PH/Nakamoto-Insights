"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

const FearGreedIndex = () => {
  const [currentIndex, setCurrentIndex] = useState(72);
  const [lastWeek, setLastWeek] = useState(60);
  const [lastMonth, setLastMonth] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 5)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getIndexColor = (value: number) => {
    if (value >= 75) return "text-green-500";
    if (value >= 50) return "text-yellow-500";
    if (value >= 25) return "text-orange-500";
    return "text-red-500";
  };

  const getIndexLabel = (value: number) => {
    if (value >= 75) return "Extreme Greed";
    if (value >= 50) return "Greed";
    if (value >= 25) return "Fear";
    return "Extreme Fear";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fear & Greed Index</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-48 h-48 mb-6">
          <div className="absolute inset-0 rounded-full border-8 border-muted" />
          <div 
            className="absolute inset-0 rounded-full border-8 border-transparent"
            style={{
              borderTopColor: `hsl(var(--chart-1))`,
              transform: `rotate(${currentIndex * 1.8}deg)`,
              transition: "transform 1s ease-out",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className={`text-4xl font-bold ${getIndexColor(currentIndex)}`}>
              {Math.round(currentIndex)}
            </span>
            <span className="text-sm text-muted-foreground">
              {getIndexLabel(currentIndex)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Last Week</div>
            <div className="text-xl font-semibold">{lastWeek}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Last Month</div>
            <div className="text-xl font-semibold">{lastMonth}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FearGreedIndex