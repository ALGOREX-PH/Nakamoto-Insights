"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

interface NFTCollection {
  name: string;
  floorPrice: number;
  priceChange: number;
  volume: string;
  owners: number;
  image: string;
}

const NftMarketOverview = () => {
  const [collections, setCollections] = useState<NFTCollection[]>([
    {
      name: "Bored Ape YC",
      floorPrice: 45.2,
      priceChange: 3.5,
      volume: "1,200 ETH",
      owners: 5400,
      image: "https://images.unsplash.com/photo-1639803938107-6d5a5303d2d7?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Azuki",
      floorPrice: 12.8,
      priceChange: -2.1,
      volume: "850 ETH",
      owners: 4200,
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Pudgy Penguins",
      floorPrice: 8.5,
      priceChange: 5.2,
      volume: "420 ETH",
      owners: 3800,
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=100&q=80",
    },
  ]);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCollections(prev => prev.map(collection => ({
        ...collection,
        floorPrice: collection.floorPrice * (1 + (Math.random() - 0.5) * 0.02),
        priceChange: collection.priceChange + (Math.random() - 0.5),
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>NFT Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="volume">
          <TabsList className="mb-4">
            <TabsTrigger value="volume">Highest Volume</TabsTrigger>
            <TabsTrigger value="gains">Price Gains</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>
          <TabsContent value="volume">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collections.map((collection) => (
                <Card key={collection.name}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <div className="font-medium">{collection.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {collection.owners.toLocaleString()} owners
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Floor Price</div>
                        <div className="font-medium">
                          {collection.floorPrice.toFixed(2)} ETH
                          <span className={`ml-1 text-sm ${collection.priceChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                            {collection.priceChange >= 0 ? "+" : ""}{collection.priceChange.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Volume (24h)</div>
                        <div className="font-medium">{collection.volume}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default NftMarketOverview