import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, TrendingUp, Code } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Beginner Guides",
    icon: <GraduationCap className="h-6 w-6 text-chart-1" />,
    items: [
      { title: "Bitcoin 101: The Basics", link: "/education/bitcoin-101" },
      { title: "Understanding Wallets", link: "/education/wallets" },
      { title: "Crypto Security Guide", link: "/education/security" }
    ]
  },
  {
    title: "Market Analysis",
    icon: <TrendingUp className="h-6 w-6 text-chart-2" />,
    items: [
      { title: "Technical Analysis", link: "/education/technical-analysis" },
      { title: "Market Cycles", link: "/education/market-cycles" },
      { title: "Trading Strategies", link: "/education/trading-strategies" }
    ]
  },
  {
    title: "Advanced Research",
    icon: <Code className="h-6 w-6 text-chart-4" />,
    items: [
      { title: "Smart Contract Analysis", link: "/education/smart-contracts" },
      { title: "DeFi Protocols", link: "/education/defi-protocols" },
      { title: "Layer 2 Solutions", link: "/education/layer-2" }
    ]
  }
];

const KnowledgeCategories = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Knowledge Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="border-border/40">
            <CardHeader>
              <div className="flex items-center gap-2">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link 
                      href={item.link}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default KnowledgeCategories;