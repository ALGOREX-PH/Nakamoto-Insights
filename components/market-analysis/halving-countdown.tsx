"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const HalvingCountdown = () => {
  const [countdown, setCountdown] = useState({
    days: 84,
    hours: 5,
    minutes: 13,
    seconds: 42
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bitcoin Halving Countdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">{countdown.days}</div>
            <div className="text-sm text-muted-foreground">Days</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">{countdown.hours.toString().padStart(2, '0')}</div>
            <div className="text-sm text-muted-foreground">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">{countdown.minutes.toString().padStart(2, '0')}</div>
            <div className="text-sm text-muted-foreground">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">{countdown.seconds.toString().padStart(2, '0')}</div>
            <div className="text-sm text-muted-foreground">Seconds</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Expected Block:</span>
            <span className="font-medium">#840,000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Estimated Date:</span>
            <span className="font-medium">April 15, 2025</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HalvingCountdown