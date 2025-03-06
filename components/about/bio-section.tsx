"use client";

import { Building2, FileText, Globe, MessagesSquare } from "lucide-react";
import ExpertiseCard from "./expertise-card";

const expertiseItems = [
  {
    icon: Building2,
    title: "Blockchain Infrastructure",
    description: "Designing scalable and secure blockchain architectures",
    colorClass: "text-chart-1"
  },
  {
    icon: FileText,
    title: "Smart Contract Security",
    description: "Auditing and securing DeFi protocols",
    colorClass: "text-chart-2"
  },
  {
    icon: Globe,
    title: "DeFi Ecosystem",
    description: "Building the future of decentralized finance",
    colorClass: "text-chart-3"
  },
  {
    icon: MessagesSquare,
    title: "Cryptoeconomics",
    description: "Designing sustainable token economies",
    colorClass: "text-chart-4"
  }
];

export default function BioSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Who is Alex Nakamoto?</h2>
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          A pioneer in the blockchain technology landscape, Alex combines deep technical expertise with 
          real-world experience in DeFi, cryptography, and distributed systems. With a background in 
          quantitative finance and computer science, Alex bridges the gap between traditional finance 
          and the emerging Web3 ecosystem.
        </p>
        <blockquote className="text-xl font-medium border-l-4 border-primary pl-6 my-8">
          "Code is law, but transparency is trust. My mission is to build both."
        </blockquote>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8">
        {expertiseItems.map((item, index) => (
          <ExpertiseCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}