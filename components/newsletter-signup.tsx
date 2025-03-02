"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1000);
  };

  return (
    <Card className="border-border/40 bg-gradient-to-br from-background to-muted">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-5 w-5 text-chart-1" />
          <CardTitle className="text-lg sm:text-xl">Join the Nakamoto Insights Newsletter</CardTitle>
        </div>
        <CardDescription className="text-sm sm:text-base">
          Get weekly crypto analysis, market trends, and exclusive insights directly to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
        {isSubmitted ? (
          <div className="flex items-center space-x-2 text-green-500 bg-green-500/10 p-3 rounded-lg">
            <Check className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm sm:text-base">Thank you for subscribing! Check your inbox to confirm.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={isLoading} 
              className="w-full sm:w-auto bg-gradient-to-r from-chart-1 to-chart-4 hover:from-chart-1/90 hover:to-chart-4/90 transition-all"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;