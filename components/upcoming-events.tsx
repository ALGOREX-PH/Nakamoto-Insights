"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Video, MessageSquare } from "lucide-react";
import { useState } from "react";

interface EventProps {
  title: string;
  description: string;
  date: string;
  time: string;
  type: "webinar" | "qa";
  icon: React.ReactNode;
}

const events: EventProps[] = [
  {
    title: "Crypto Market Webinar",
    description: "Join Alex for an exclusive webinar on current market trends and investment strategies.",
    date: "March 25, 2025",
    time: "2:00 PM EST",
    type: "webinar",
    icon: <Video className="h-5 w-5 text-chart-1" />
  },
  {
    title: "Live Q&A Session",
    description: "Interactive session where Alex answers your pressing crypto questions live.",
    date: "March 28, 2025",
    time: "3:00 PM EST",
    type: "qa",
    icon: <MessageSquare className="h-5 w-5 text-chart-2" />
  }
];

const UpcomingEvents = () => {
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);

  const handleRegister = (title: string) => {
    setRegisteredEvents([...registeredEvents, title]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <Button variant="outline" size="sm">
          View all events
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <Card key={index} className="border-border/40 overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                {event.icon}
                <CardTitle className="text-lg">{event.title}</CardTitle>
              </div>
              <CardDescription className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{event.date} • {event.time}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {event.description}
              </p>
            </CardContent>
            <CardFooter>
              {registeredEvents.includes(event.title) ? (
                <Button variant="secondary" className="w-full" disabled>
                  Registered
                </Button>
              ) : (
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => handleRegister(event.title)}
                >
                  Register Now
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;