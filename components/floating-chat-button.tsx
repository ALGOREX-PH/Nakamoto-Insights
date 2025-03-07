"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bitcoin, X } from "lucide-react";
import ChatInterface from "./chat/chat-interface";

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all duration-300 animate-bounce hover:animate-none group z-50 bg-gradient-to-br from-chart-1 via-chart-2 to-chart-4 hover:from-chart-1/90 hover:via-chart-2/90 hover:to-chart-4/90"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-8 w-8">
          <div className="absolute inset-0 bg-background rounded-full transform rotate-12"></div>
          <div className="absolute inset-[2px] bg-gradient-to-br from-chart-1 via-chart-2 to-chart-4 rounded-full flex items-center justify-center">
            <Bitcoin className="h-5 w-5 text-background transform -rotate-12" />
          </div>
        </div>
        <span className="sr-only">Open Chat</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px] h-[80vh] p-0 gap-0 rounded-xl">
          <DialogHeader className="px-6 py-3 border-b border-border/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 bg-background rounded-full transform rotate-12"></div>
                  <div className="absolute inset-[2px] bg-gradient-to-br from-chart-1 via-chart-2 to-chart-4 rounded-full flex items-center justify-center">
                    <Bitcoin className="h-5 w-5 text-background transform -rotate-12" />
                  </div>
                </div>
                <DialogTitle>Chat with Alex Nakamoto AI</DialogTitle>
              </div>
            </div>
          </DialogHeader>
          <ChatInterface />
        </DialogContent>
      </Dialog>
    </>
  );
}