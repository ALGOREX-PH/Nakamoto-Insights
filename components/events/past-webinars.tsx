"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const webinars = [
  {
    title: "Bitcoin ETF Impact Analysis",
    date: "February 25, 2025",
    thumbnail: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "DeFi Security Deep Dive",
    date: "February 23, 2025",
    thumbnail: "https://images.unsplash.com/photo-1639803938107-6d5a5303d2d7?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Layer 2 Solutions Compared",
    date: "February 22, 2025",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "NFT Market Trends 2025",
    date: "February 20, 2025",
    thumbnail: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=400&q=80"
  }
];

const PastWebinars = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Past Webinars</h2>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search webinars..." />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {webinars.map((webinar, index) => (
          <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={webinar.thumbnail}
                  alt={webinar.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-1">{webinar.title}</h3>
                <p className="text-sm text-muted-foreground">{webinar.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PastWebinars;