"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Calendar, Users } from "lucide-react";

const events = [
  {
    date: "March 15, 2025",
    time: "2:00 PM UTC",
    title: "DeFi: The Next Wave",
    description: "Deep dive into emerging DeFi protocols and their potential impact on the market.",
    host: {
      name: "Alex Nakamoto",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=32&h=32&q=80"
    }
  },
  {
    date: "March 18, 2025",
    time: "3:00 PM UTC",
    title: "NFT Market Analysis",
    description: "Expert panel discussing the future of NFTs and emerging use cases.",
    host: {
      name: "Expert Panel",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32&q=80"
    }
  },
  {
    date: "March 22, 2025",
    time: "4:00 PM UTC",
    title: "Smart Contract Audit Live",
    description: "Live analysis and breakdown of major DeFi protocol's smart contracts.",
    host: {
      name: "Alex Nakamoto",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=32&h=32&q=80"
    }
  }
];

const UpcomingEvents = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Upcoming Live Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>{event.date} • {event.time}</span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{event.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <img src={event.host.image} alt={event.host.name} />
                  </Avatar>
                  <span className="text-sm">With {event.host.name}</span>
                </div>
                <Button size="sm">Register</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;