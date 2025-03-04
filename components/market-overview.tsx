"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

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

// Simplified data for mobile view
const getSimplifiedData = (data: any[]) => {
  // Return only every other data point for smaller screens
  return data.filter((_, index) => index % 2 === 0);
};

const MarketOverview = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [chartData, setChartData] = useState({
    bitcoin: bitcoinData,
    ethereum: ethereumData
  });

  // Check if mobile view and adjust chart data
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (mobile) {
        setChartData({
          bitcoin: getSimplifiedData(bitcoinData),
          ethereum: getSimplifiedData(ethereumData)
        });
      } else {
        setChartData({
          bitcoin: bitcoinData,
          ethereum: ethereumData
        });
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const tooltipProps = {
    contentStyle: { 
      backgroundColor: "hsl(var(--card))", 
      borderColor: "hsl(var(--border))",
      color: "hsl(var(--card-foreground))",
      fontSize: isMobile ? '12px' : '14px',
      padding: isMobile ? '4px' : '8px'
    }
  };

  // Render functions with default parameters
  const renderXAxis = ({
    dataKey = "date",
    stroke = "hsl(var(--muted-foreground))",
    tick = { fontSize: isMobile ? 10 : 12 }
  } = {}) => (
    <XAxis
      dataKey={dataKey}
      stroke={stroke}
      tick={tick}
    />
  );

  const renderYAxis = ({
    stroke = "hsl(var(--muted-foreground))",
    tick = { fontSize: isMobile ? 10 : 12 },
    width = isMobile ? 30 : 40
  } = {}) => (
    <YAxis
      stroke={stroke}
      tick={tick}
      width={width}
    />
  );

  return (
    <Card className="border-border/40 h-full">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">Market Overview</CardTitle>
        <CardDescription className="text-sm">
          Track the performance of major cryptocurrencies
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
        <Tabs defaultValue="bitcoin">
          <TabsList className="mb-4 w-full justify-start">
            <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
            <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
          </TabsList>
          <TabsContent value="bitcoin">
            <div className="h-[200px] sm:h-[250px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData.bitcoin}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  {renderXAxis()}
                  {renderYAxis()}
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <Tooltip {...tooltipProps} />
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
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-lg bg-muted p-2 sm:p-3">
                <p className="text-xs sm:text-sm font-medium">Current Price</p>
                <p className="text-lg sm:text-2xl font-bold">$42,850.00</p>
              </div>
              <div className="rounded-lg bg-muted p-2 sm:p-3">
                <p className="text-xs sm:text-sm font-medium">24h Change</p>
                <p className="text-lg sm:text-2xl font-bold text-green-500">+2.34%</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ethereum">
            <div className="h-[200px] sm:h-[250px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData.ethereum}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorEth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  {renderXAxis()}
                  {renderYAxis()}
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <Tooltip {...tooltipProps} />
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
            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-lg bg-muted p-2 sm:p-3">
                <p className="text-xs sm:text-sm font-medium">Current Price</p>
                <p className="text-lg sm:text-2xl font-bold">$2,850.87</p>
              </div>
              <div className="rounded-lg bg-muted p-2 sm:p-3">
                <p className="text-xs sm:text-sm font-medium">24h Change</p>
                <p className="text-lg sm:text-2xl font-bold text-red-500">-1.23%</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;