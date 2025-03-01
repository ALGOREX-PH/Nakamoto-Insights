"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface CryptoPrice {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
}

// Mock data for demonstration
const initialPrices: CryptoPrice[] = [
  { name: "Bitcoin", symbol: "BTC", price: 68423.12, change24h: 2.34 },
  { name: "Ethereum", symbol: "ETH", price: 3521.87, change24h: 1.56 },
  { name: "Solana", symbol: "SOL", price: 142.65, change24h: 4.21 },
  { name: "Cardano", symbol: "ADA", price: 0.58, change24h: -1.23 },
  { name: "Ripple", symbol: "XRP", price: 0.52, change24h: -0.87 },
];

const CryptoPriceTicker = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>(initialPrices);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(currentPrices => 
        currentPrices.map(crypto => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() * 0.01 - 0.005)),
          change24h: crypto.change24h + (Math.random() * 0.4 - 0.2)
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-marquee space-x-4 py-2">
        {prices.map((crypto) => (
          <Card key={crypto.symbol} className="min-w-[180px] border-border/40 bg-card/50">
            <CardContent className="p-3 flex items-center justify-between">
              <div>
                <p className="font-medium">{crypto.symbol}</p>
                <p className="text-xs text-muted-foreground">{crypto.name}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <p className={`text-xs flex items-center justify-end ${crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.change24h >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                  {Math.abs(crypto.change24h).toFixed(2)}%
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CryptoPriceTicker;