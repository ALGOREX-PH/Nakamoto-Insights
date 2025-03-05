import { Metadata } from "next";
import TopPerformingAssets from "@/components/market-analysis/top-performing";
import FearGreedIndex from "@/components/market-analysis/fear-greed";
import DefiYields from "@/components/market-analysis/defi-yields";
import HalvingCountdown from "@/components/market-analysis/halving-countdown";
import NftMarketOverview from "@/components/market-analysis/nft-overview";
import MarketHeader from "@/components/market-analysis/market-header";

export const metadata: Metadata = {
  title: "Market Analysis | Nakamoto Insights",
  description: "Real-time crypto market analysis, DeFi yields, and NFT trends.",
};

export default function MarketAnalysisPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Market Header with Navigation */}
      <MarketHeader />
      
      {/* Main Dashboard Content */}
      <main className="container py-6">
        <div className="grid gap-6">
          {/* Top Section: Assets and Fear & Greed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TopPerformingAssets />
            </div>
            <div>
              <FearGreedIndex />
            </div>
          </div>

          {/* Middle Section: DeFi and Halving */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DefiYields />
            <HalvingCountdown />
          </div>

          {/* Bottom Section: NFT Market */}
          <NftMarketOverview />
        </div>
      </main>
    </div>
  );
}