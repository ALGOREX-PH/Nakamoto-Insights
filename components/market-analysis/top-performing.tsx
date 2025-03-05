"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState, useEffect } from "react";

interface Asset {
  name: string;
  symbol: string;
  price: number;
  change: number;
  marketCap: string;
  volume: string;
  logo: string;
}

const TopPerformingAssets = () => {
  const [assets, setAssets] = useState<Asset[]>([
    {
      name: "Solana",
      symbol: "SOL",
      price: 150.23,
      change: 8.5,
      marketCap: "$64B",
      volume: "$6B",
      logo: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=024",
    },
    {
      name: "Avalanche",
      symbol: "AVAX",
      price: 48.90,
      change: 6.2,
      marketCap: "$18B",
      volume: "$1.5B",
      logo: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=024",
    },
    {
      name: "Chainlink",
      symbol: "LINK",
      price: 17.45,
      change: 5.3,
      marketCap: "$10B",
      volume: "$750M",
      logo: "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=024",
    },
  ]);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prev => prev.map(asset => ({
        ...asset,
        price: asset.price * (1 + (Math.random() - 0.5) * 0.01),
        change: asset.change + (Math.random() - 0.5),
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Assets</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">24h Change</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
              <TableHead className="text-right">Volume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.symbol}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <img src={asset.logo} alt={asset.name} className="w-6 h-6" />
                    <span>{asset.name}</span>
                    <span className="text-muted-foreground">({asset.symbol})</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </TableCell>
                <TableCell className={`text-right ${asset.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {asset.change >= 0 ? "+" : ""}{asset.change.toFixed(1)}%
                </TableCell>
                <TableCell className="text-right">{asset.marketCap}</TableCell>
                <TableCell className="text-right">{asset.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TopPerformingAssets