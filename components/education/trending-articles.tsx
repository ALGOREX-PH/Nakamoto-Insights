import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const articles = [
  {
    tag: "Hot",
    title: "Bitcoin Halving 2025: What to Expect",
    description: "An in-depth analysis of the upcoming Bitcoin halving event...",
    link: "/education/bitcoin-halving-2025",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80"
  },
  {
    tag: "New",
    title: "Layer 2 Solutions Compared",
    description: "Comprehensive comparison of leading Layer 2 scaling solutions...",
    link: "/education/layer-2-solutions",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80"
  },
  {
    tag: "Featured",
    title: "DeFi Yield Strategies",
    description: "Expert guide to maximizing your DeFi yields safely...",
    link: "/education/defi-yield-strategies",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80"
  }
];

const TrendingArticles = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Trending Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link key={index} href={article.link}>
            <Card className="h-full hover:shadow-lg transition-shadow border-border/40">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {article.tag}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {article.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrendingArticles;