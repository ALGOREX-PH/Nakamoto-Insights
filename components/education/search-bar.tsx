"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for crypto topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 py-6 text-lg bg-background"
        />
      </div>
      {query && (
        <div className="absolute w-full mt-2 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="p-4">
            <p className="text-sm text-muted-foreground">Quick Suggestions</p>
            <ul className="mt-2 space-y-2">
              <li className="p-2 hover:bg-muted rounded-md cursor-pointer">Bitcoin Basics</li>
              <li className="p-2 hover:bg-muted rounded-md cursor-pointer">DeFi Explained</li>
              <li className="p-2 hover:bg-muted rounded-md cursor-pointer">NFT Guide</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;