"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Bitcoin, Coins } from "lucide-react";

interface CryptoPrice {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  icon: React.ReactNode;
}

// Mock data for demonstration
const initialPrices: CryptoPrice[] = [
  { 
    name: "Bitcoin", 
    symbol: "BTC", 
    price: 42850.00, 
    change24h: 2.34,
    icon: <Bitcoin className="h-4 w-4 text-chart-1" />
  },
  { 
    name: "Ethereum", 
    symbol: "ETH", 
    price: 2850.87, 
    change24h: -1.23,
    icon: <Coins className="h-4 w-4 text-chart-2" />
  },
  { 
    name: "Solana", 
    symbol: "SOL", 
    price: 142.65, 
    change24h: 4.21,
    icon: <Coins className="h-4 w-4 text-chart-3" />
  },
  { 
    name: "Cardano", 
    symbol: "ADA", 
    price: 0.58, 
    change24h: -1.23,
    icon: <Coins className="h-4 w-4 text-chart-4" />
  },
  { 
    name: "Ripple", 
    symbol: "XRP", 
    price: 0.52, 
    change24h: -0.87,
    icon: <Coins className="h-4 w-4 text-chart-5" />
  },
  { 
    name: "Market Cap", 
    symbol: "Total", 
    price: 1850000000000, 
    change24h: 0.8,
    icon: <Coins className="h-4 w-4 text-muted-foreground" />
  }
];

const CryptoPriceTicker = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>(initialPrices);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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

  // Format large numbers (for market cap)
  const formatLargeNumber = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toLocaleString()}`;
  };

  return (
    <div className="w-full overflow-hidden">
      {isMobile ? (
        // Mobile view: grid layout
        <div className="grid grid-cols-2 gap-3 py-2">
          {prices.map((crypto) => (
            <Card key={crypto.symbol} className="border-border/40 bg-card/50 hover:bg-card/80 transition-colors">
              <CardContent className="p-3 flex flex-col">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-1">
                    {crypto.icon}
                    <p className="font-medium">{crypto.symbol}</p>
                  </div>
                  <p className={`text-xs flex items-center ${crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change24h >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    {Math.abs(crypto.change24h).toFixed(2)}%
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">{crypto.name}</p>
                  <p className="text-sm font-medium">
                    {crypto.symbol === "Total" 
                      ? formatLargeNumber(crypto.price)
                      : `$${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // Desktop view: marquee
        <div className="flex animate-marquee space-x-4 py-2">
          {prices.concat(prices).map((crypto, index) => (
            <Card key={`${crypto.symbol}-${index}`} className="min-w-[180px] border-border/40 bg-card/50 hover:bg-card/80 transition-colors">
              <CardContent className="p-3 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {crypto.icon}
                    <p className="font-medium">{crypto.symbol}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{crypto.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {crypto.symbol === "Total" 
                      ? formatLargeNumber(crypto.price)
                      : `$${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                    }
                  </p>
                  <p className={`text-xs flex items-center justify-end ${crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change24h >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    {Math.abs(crypto.change24h).toFixed(2)}%
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CryptoPriceTicker;