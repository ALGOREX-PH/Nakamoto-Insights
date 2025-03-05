"use client"

import { useChat } from "ai/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Crown, Loader2 } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const INITIAL_MESSAGE = {
  id: 'initial-message',
  role: 'assistant',
  content: 'Hello! I\'m Alex Nakamoto, your AI crypto analyst. How can I help you understand the crypto markets today?'
};

const ChatInterface = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [INITIAL_MESSAGE],
    onError: (error) => {
      console.error('Chat error:', error);
      alert('Error: Failed to get a response. Please try again.');
    }
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <Card className="border-border/40">
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-[280px_1fr] divide-x divide-border/40 h-[600px] overflow-hidden">
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
          <div className="flex flex-col h-full relative">
            <ScrollArea className="flex-1 p-4 overflow-y-auto absolute inset-0 bottom-[65px]">
              <div className="space-y-4">
                {messages.map((message) => (
                  message.role !== 'system' && (
                  <div
                    key={message.id} 
                    className={`flex gap-3 ${
                      message.role === "user" ? "justify-end" : ""
                    }`}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8">
                        <Bot className="h-5 w-5 text-primary" />
                      </Avatar>
                    )}
                    <div
                      className={`rounded-lg p-3 max-w-[80%] ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <div className="text-sm prose dark:prose-invert max-w-none prose-sm">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8">
                        <User className="h-5 w-5" />
                      </Avatar>
                    )}
                  </div>)
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
            <div className="p-4 border-t border-border/40 bg-background absolute bottom-0 left-0 right-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  disabled={isLoading}
                  placeholder="Ask anything about crypto..."
                  onKeyDown={handleKeyDown}
                  value={input}
                  onChange={handleInputChange}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
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