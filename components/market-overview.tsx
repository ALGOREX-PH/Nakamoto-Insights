"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data for Bitcoin price chart
const bitcoinData = [
  { date: "Jan", price: 42000 },
  { date: "Feb", price: 44500 },
  { date: "Mar", price: 58000 },
  { date: "Apr", price: 53000 },
  { date: "May", price: 37000 },
  { date: "Jun", price: 39000 },
  { date: "Jul", price: 42000 },
  { date: "Aug", price: 47000 },
  { date: "Sep", price: 43000 },
  { date: "Oct", price: 61000 },
  { date: "Nov", price: 68000 },
  { date: "Dec", price: 64000 },
];

// Mock data for Ethereum price chart
const ethereumData = [
  { date: "Jan", price: 3200 },
  { date: "Feb", price: 2800 },
  { date: "Mar", price: 3100 },
  { date: "Apr", price: 3500 },
  { date: "May", price: 2600 },
  { date: "Jun", price: 1900 },
  { date: "Jul", price: 2200 },
  { date: "Aug", price: 3300 },
  { date: "Sep", price: 3000 },
  { date: "Oct", price: 3400 },
  { date: "Nov", price: 3600 },
  { date: "Dec", price: 3500 },
];

const MarketOverview = () => {
  return (
    <Card className="border-border/40">
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>
          Track the performance of major cryptocurrencies
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="bitcoin">
          <TabsList className="mb-4">
            <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
            <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
          </TabsList>
          <TabsContent value="bitcoin">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={bitcoinData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--card-foreground))"
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="hsl(var(--chart-1))" 
                    fillOpacity={1} 
                    fill="url(#colorBtc)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm font-medium">Current Price</p>
                <p className="text-2xl font-bold">$68,423.12</p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm font-medium">24h Change</p>
                <p className="text-2xl font-bold text-green-500">+2.34%</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ethereum">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={ethereumData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorEth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--card-foreground))"
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="hsl(var(--chart-2))" 
                    fillOpacity={1} 
                    fill="url(#colorEth)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm font-medium">Current Price</p>
                <p className="text-2xl font-bold">$3,521.87</p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm font-medium">24h Change</p>
                <p className="text-2xl font-bold text-green-500">+1.56%</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;