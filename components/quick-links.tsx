import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, MessageSquare, BarChart3, Crown } from "lucide-react";

const QuickLinks = () => {
  return (
    <Card className="border-border/40">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">Quick Links</CardTitle>
        <CardDescription className="text-sm">
          Access key resources and premium content
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0 space-y-4">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/research">
            <FileText className="mr-2 h-5 w-5 text-chart-1" />
            Latest Research
          </Link>
        </Button>
        
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="#chat">
            <MessageSquare className="mr-2 h-5 w-5 text-chart-2" />
            Ask Alex Nakamoto (AI)
          </Link>
        </Button>
        
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/tokenomics">
            <BarChart3 className="mr-2 h-5 w-5 text-chart-3" />
            Tokenomics Insights
          </Link>
        </Button>
        
        <Button className="w-full justify-start bg-gradient-to-r from-chart-1 to-chart-4 hover:from-chart-1/90 hover:to-chart-4/90 transition-all" asChild>
          <Link href="/pro">
            <Crown className="mr-2 h-5 w-5" />
            Join Nakamoto Pro
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickLinks;