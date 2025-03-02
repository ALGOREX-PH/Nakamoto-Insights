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
    <div>
      <HeroSection />
      
      <div className="py-4 border-y border-border/40 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <CryptoPriceTicker />
        </div>
      </div>
      
      <section className="container px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <FeaturedInsights />
          </div>
          <div>
            <MarketOverview />
          </div>
        </div>
      </section>
      
      <Separator className="container opacity-30 mx-4 sm:mx-6" />
      
      <section className="container px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <UpcomingEvents />
          </div>
          <div>
            <QuickLinks />
          </div>
        </div>
      </section>
      
      <section className="container px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <AboutAlex />
      </section>
      
      <section className="container px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <NewsletterSignup />
      </section>
    </div>
  );
}