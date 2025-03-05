"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

const LedgerHeader = () => {
  return (
    <div className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-4">
        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Button variant="ghost" className="font-medium" asChild>
              <Link href="/ledger/reports">Reports</Link>
            </Button>
            <Button variant="ghost" className="font-medium" asChild>
              <Link href="/ledger/research">Research</Link>
            </Button>
            <Button variant="ghost" className="font-medium" asChild>
              <Link href="/ledger/premium">Premium</Link>
            </Button>
            <Button variant="ghost" className="font-medium" asChild>
              <Link href="/ledger/pricing">Pricing</Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search reports..." 
                className="pl-10"
              />
            </div>
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedgerHeader;