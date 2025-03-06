"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import TokenAnalysis from "@/components/tokenomics/token-analysis";
import TokenDistribution from "@/components/tokenomics/token-distribution";
import SmartContractAudit from "@/components/tokenomics/smart-contract-audit";
import { Search } from "lucide-react";

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Circuit Board Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Deep-Dive Tokenomics & AI-Powered Smart Contract Audits!
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Unlock in-depth insights on token supply, governance, staking models, and smart contract security with AI-driven precision.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Analyze a Token Now
            </Button>
          </div>
        </div>
      </section>

      {/* Token Analysis Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <Card className="border-border/40">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Token Analysis</h2>
              <div className="relative max-w-2xl mx-auto">
                <Input
                  placeholder="Enter Token Contract Address (ETH/BSC/Polygon)"
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TokenAnalysis />
            <TokenDistribution />
          </div>
        </div>
      </section>

      {/* Smart Contract Audit Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <SmartContractAudit />
        </div>
      </section>
    </div>
  );
}