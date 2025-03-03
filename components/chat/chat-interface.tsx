"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Crown } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: "I'm analyzing the current market conditions. Based on recent trends and technical indicators, Bitcoin shows strong support at the current level. However, always remember to do your own research and never invest more than you can afford to lose.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="border-border/40">
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-[280px_1fr] divide-x divide-border/40 h-[600px]">
          {/* Sidebar */}
          <div className="p-4 border-b lg:border-b-0 bg-muted/30">
            <div className="flex items-center gap-3 mb-6">
              <Avatar className="h-10 w-10">
                <Bot className="h-6 w-6 text-primary" />
              </Avatar>
              <div>
                <h3 className="font-semibold">Alex Nakamoto</h3>
                <p className="text-sm text-muted-foreground">AI Crypto Analyst</p>
              </div>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Crown className="h-4 w-4 mr-2 text-primary" />
                Premium Client
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Bot className="h-4 w-4 mr-2" />
                Smart Analysis
              </Button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.type === "user" ? "justify-end" : ""
                    }`}
                  >
                    {message.type === "ai" && (
                      <Avatar className="h-8 w-8">
                        <Bot className="h-5 w-5 text-primary" />
                      </Avatar>
                    )}
                    <div
                      className={`rounded-lg p-3 max-w-[80%] ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    {message.type === "user" && (
                      <Avatar className="h-8 w-8">
                        <User className="h-5 w-5" />
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <Bot className="h-5 w-5 text-primary" />
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-border/40">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  placeholder="Ask anything about crypto..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;