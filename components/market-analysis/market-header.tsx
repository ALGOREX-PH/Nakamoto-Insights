"use client";

import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Wallet, 
  Coins, 
  ChartBar, 
  Mail, 
  Calendar, 
  Users 
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const MarketHeader = () => {
  const [btcPrice, setBtcPrice] = useState("67,340.24");
  const [ethPrice, setEthPrice] = useState("3,240.67");
  const [btcChange, setBtcChange] = useState(2.15);
  const [ethChange, setEthChange] = useState(-1.03);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBtcPrice((prev) => {
        const change = (Math.random() - 0.5) * 100;
        return (parseFloat(prev.replace(",", "")) + change).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      });
      setEthPrice((prev) => {
        const change = (Math.random() - 0.5) * 10;
        return (parseFloat(prev.replace(",", "")) + change).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      });
      setBtcChange((prev) => Math.max(-10, Math.min(10, prev + (Math.random() - 0.5))));
      setEthChange((prev) => Math.max(-10, Math.min(10, prev + (Math.random() - 0.5))));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-4">
        {/* Price Tickers */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-chart-1/20 flex items-center justify-center">
                <span className="text-chart-1 font-bold">₿</span>
              </div>
              <div>
                <div className="font-medium">${btcPrice}</div>
                <div className={`text-sm ${btcChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {btcChange >= 0 ? "+" : ""}{btcChange.toFixed(2)}%
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-chart-2/20 flex items-center justify-center">
                <span className="text-chart-2 font-bold">Ξ</span>
              </div>
              <div>
                <div className="font-medium">${ethPrice}</div>
                <div className={`text-sm ${ethChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {ethChange >= 0 ? "+" : ""}{ethChange.toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/ledger">
              <Coins className="h-4 w-4" />
              Ledger
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/tokenomics">
              <ChartBar className="h-4 w-4" />
              Tokenomics
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/newsletter">
              <Mail className="h-4 w-4" />
              Newsletter
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/events">
              <Calendar className="h-4 w-4" />
              Events
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/community">
              <Users className="h-4 w-4" />
              Community
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2 ml-auto" asChild>
            <Link href="/dashboard">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketHeader