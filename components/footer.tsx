import Link from "next/link";
import { Bitcoin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 md:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Bitcoin className="h-6 w-6 text-chart-1" />
              <span className="font-bold text-lg">Nakamoto Insights</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Expert cryptocurrency analysis, market trends, and deep dives into Bitcoin, DeFi, and tokenomics.
            </p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Nakamoto Insights. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/market-analysis" className="text-muted-foreground hover:text-foreground transition-colors">
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-muted-foreground hover:text-foreground transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-foreground transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-medium text-sm mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-medium text-sm mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;