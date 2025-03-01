import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="container px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">About Alex Nakamoto</h1>
        
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full mb-6 sm:mb-8 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Alex Nakamoto" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg sm:text-xl leading-relaxed mb-6">
            Alex Nakamoto is a renowned cryptocurrency analyst, blockchain expert, and financial strategist with over a decade of experience in the digital asset space.
          </p>
          
          <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Background & Expertise</h2>
          <p className="text-sm sm:text-base">
            After completing his Master's degree in Financial Engineering at MIT, Alex began his career as a quantitative analyst at Goldman Sachs. However, his life took a dramatic turn in 2011 when he discovered Bitcoin and recognized its revolutionary potential.
          </p>
          <p className="text-sm sm:text-base">
            By 2013, Alex had left traditional finance to focus exclusively on cryptocurrency markets and blockchain technology. He was an early investor in Ethereum and several other successful blockchain projects, giving him firsthand experience with the volatility and opportunity in the crypto space.
          </p>
          
          <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Philosophy</h2>
          <p className="text-sm sm:text-base">
            Alex's approach combines rigorous technical analysis with a deep understanding of market psychology and blockchain fundamentals. He believes that cryptocurrency represents not just a new asset class, but a paradigm shift in how we think about money, value, and trust in the digital age.
          </p>
          <p className="text-sm sm:text-base">
            Unlike many analysts who focus solely on short-term price movements, Alex emphasizes the importance of understanding the underlying technology, governance structures, and real-world applications of blockchain projects.
          </p>
          
          <Separator className="my-6 sm:my-8" />
          
          <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Professional Achievements</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-2">Published Author</h3>
                <p className="text-sm sm:text-base">Author of the bestselling book "Blockchain Revolution: The Future of Money and Trust" (2019)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-2">Advisor</h3>
                <p className="text-sm sm:text-base">Strategic advisor to multiple successful blockchain startups and DeFi protocols</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-2">Speaker</h3>
                <p className="text-sm sm:text-base">Regular speaker at major cryptocurrency conferences including Consensus and Bitcoin Miami</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-2">Educator</h3>
                <p className="text-sm sm:text-base">Created one of the most popular online courses on cryptocurrency investing with over 100,000 students</p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Nakamoto Insights</h2>
          <p className="text-sm sm:text-base">
            Founded in 2020, Nakamoto Insights has quickly become one of the most respected sources of cryptocurrency analysis and market intelligence. The platform combines Alex's expertise with contributions from a select team of analysts and researchers.
          </p>
          <p className="text-sm sm:text-base">
            Through Nakamoto Insights, Alex aims to demystify the complex world of cryptocurrency and blockchain technology, providing both newcomers and experienced investors with the knowledge and tools they need to navigate this rapidly evolving landscape.
          </p>
        </div>
      </div>
    </div>
  );
}