import { Metadata } from "next";
import HeroSection from "@/components/about/hero-section";
import BioSection from "@/components/about/bio-section"; 
import ContactForm from "@/components/about/contact-form";
import { Card, CardContent } from "@/components/ui/card";
export const metadata: Metadata = {
  title: "About Alex Nakamoto | Nakamoto Insights",
  description: "Learn about Alex Nakamoto's journey in blockchain technology and connect for speaking engagements, consultations, and partnerships.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Who is Alex Section */}
      <section className="py-20 bg-muted/30 border-y border-border/40">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <BioSection />
            <div>
              <div className="sticky top-24 space-y-8">
                <Card className="bg-card/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Research & Publications</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Latest Publication</div>
                        <div className="font-medium">On-Chain Governance Mechanisms: A Comparative Study</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Citations</div>
                        <div className="font-medium">1,200+</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Research Focus</div>
                        <div className="font-medium">Zero-Knowledge Proofs, DeFi Security</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Media Features</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1639803938107-6d5a5303d2d7?auto=format&fit=crop&w=50&h=50&q=80"
                          alt="Media"
                          className="rounded-lg w-12 h-12 object-cover"
                        />
                        <div>
                          <div className="font-medium">Forbes</div>
                          <div className="text-sm text-muted-foreground">The Future of DeFi</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=50&h=50&q=80"
                          alt="Media"
                          className="rounded-lg w-12 h-12 object-cover"
                        />
                        <div>
                          <div className="font-medium">CoinDesk</div>
                          <div className="text-sm text-muted-foreground">Blockchain Security</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container"> 
          <ContactForm />
        </div>
      </section>
    </div>
  );
}