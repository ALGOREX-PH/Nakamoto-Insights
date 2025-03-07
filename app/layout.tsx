import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FloatingChatButton from '@/components/floating-chat-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nakamoto Insights | The Crypto Sage',
  description: 'Expert cryptocurrency analysis, market trends, and deep dives into Bitcoin, DeFi, and tokenomics by Alex Nakamoto.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background w-full`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex min-h-screen flex-col w-full">
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <FloatingChatButton />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}