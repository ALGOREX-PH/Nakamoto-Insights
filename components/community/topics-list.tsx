"use client";

import { Button } from "@/components/ui/button";
import { TrendingUp, Wallet, Code, Image } from "lucide-react";

const topics = [
  {
    icon: <TrendingUp className="h-4 w-4" />,
    name: "Market Analysis",
    count: "2.4k posts",
    active: true,
  },
  {
    icon: <Wallet className="h-4 w-4" />,
    name: "DeFi",
    count: "1.8k posts",
  },
  {
    icon: <Image className="h-4 w-4" />,
    name: "NFTs",
    count: "956 posts",
  },
  {
    icon: <Code className="h-4 w-4" />,
    name: "Web3 Dev",
    count: "723 posts",
  },
];

const trendingTags = [
  { name: "#BitcoinHalving", posts: "2.4k posts" },
  { name: "#ETH2Merge", posts: "1.8k posts" },
];

const TopicsList = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Topics</h3>
        <div className="space-y-1">
          {topics.map((topic, index) => (
            <Button
              key={index}
              variant={topic.active ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              {topic.icon}
              <span className="ml-2">{topic.name}</span>
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Trending Topics</h3>
        <div className="space-y-3">
          {trendingTags.map((tag, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="text-sm font-medium group-hover:text-primary transition-colors">
                {tag.name}
              </div>
              <div className="text-xs text-muted-foreground">{tag.posts}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicsList;