"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    isSubmitted: false,
    isLoading: false
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate API call
    setTimeout(() => {
      setFormState({
        email: "",
        isSubmitted: true,
        isLoading: false
      });
    }, 1000);
  };

  if (!mounted) {
    return null;
  }

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
        {formState.isSubmitted ? (
          <div className="flex items-center space-x-2 text-green-500 bg-green-500/10 p-3 rounded-lg">
            <Check className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm sm:text-base">Thank you for subscribing! Check your inbox to confirm.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
              required
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={formState.isLoading} 
              className="w-full sm:w-auto bg-gradient-to-r from-chart-1 to-chart-4 hover:from-chart-1/90 hover:to-chart-4/90 transition-all"
            >
              {formState.isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;