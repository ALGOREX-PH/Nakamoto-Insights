"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketSentiment from "@/components/community/market-sentiment";
import TopicsList from "@/components/community/topics-list";
import LiveDiscussions from "@/components/community/live-discussions";
import TopContributors from "@/components/community/top-contributors";
import GovernancePanel from "@/components/community/governance-panel";
import { Wallet } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Connect Wallet */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Crypto Community Forum</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>

      <main className="container py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-12 lg:col-span-2">
            <TopicsList />
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-6">
              <MarketSentiment />
              
              <Card>
                <CardHeader>
                  <CardTitle>Discussion Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="trending">
                    <TabsList className="mb-4">
                      <TabsTrigger value="trending">Trending</TabsTrigger>
                      <TabsTrigger value="latest">Latest</TabsTrigger>
                      <TabsTrigger value="ta">Technical Analysis</TabsTrigger>
                    </TabsList>
                    <TabsContent value="trending">
                      <div className="space-y-4">
                        {/* Discussion posts will be rendered here */}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <LiveDiscussions />
            <TopContributors />
            <GovernancePanel />
          </div>
        </div>
      </main>
    </div>
  );
}