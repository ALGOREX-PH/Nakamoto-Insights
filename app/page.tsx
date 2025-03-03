import HeroSection from "@/components/hero-section";
import CryptoPriceTicker from "@/components/crypto-price-ticker";
import MarketOverview from "@/components/market-overview";
import FeaturedInsights from "@/components/featured-insights";
import AboutAlex from "@/components/about-alex";
import NewsletterSignup from "@/components/newsletter-signup";
import UpcomingEvents from "@/components/upcoming-events";
import QuickLinks from "@/components/quick-links";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      
      <div className="py-4 border-y border-border/40 bg-muted/30 w-full">
        <div className="container px-4 sm:px-6 mx-auto max-w-full">
          <CryptoPriceTicker />
        </div>
      </div>
      
      <section className="w-full py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6 mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <FeaturedInsights />
            </div>
            <div>
              <MarketOverview />
            </div>
          </div>
        </div>
      </section>
      
      <Separator className="w-full opacity-30" />
      
      <section className="w-full py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6 mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <UpcomingEvents />
            </div>
            <div>
              <QuickLinks />
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6 mx-auto max-w-full">
          <AboutAlex />
        </div>
      </section>
      
      <section className="w-full py-8 sm:py-12 md:py-16">
        <div className="container px-4 sm:px-6 mx-auto max-w-full">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}