"use client"

"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Crown, Loader2 } from "lucide-react";
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const initialMessage: Message = {
  id: 'welcome',
  role: 'assistant',
  content: "Hello! I'm Alex Nakamoto, your AI crypto analyst. How can I help you understand the crypto markets today?"
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Cancel any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller for this request
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.concat(userMessage)
        }),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) throw new Error('Failed to get response');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      let assistantMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: ''
      };

      setMessages(prev => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        // Convert the chunk to text
        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;

            try {
              const json = JSON.parse(data);
              const content = json.choices[0]?.delta?.content || '';
              assistantMessage.content += content;

              setMessages(prev => 
                prev.map(msg => 
                  msg.id === assistantMessage.id 
                    ? assistantMessage 
                    : msg
                )
              );
            } catch (e) {
              console.error('Error parsing chunk:', e);
            }
          }
        }
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return;
      console.error('Chat error:', error);
      alert('Failed to get a response. Please try again.');
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
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
          <div className="flex flex-col h-full overflow-hidden">
            <ScrollArea className="flex-1 px-4 pt-4 pb-2">
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
            <div className="p-4 border-t border-border/40 bg-background">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Textarea
                  disabled={isLoading}
                  placeholder="Ask anything about crypto..."
                  onKeyDown={handleKeyDown}
                  value={input}
                  onChange={handleInputChange}
                  className="flex-1 min-h-[44px] max-h-[200px] resize-none"
                  rows={1}
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