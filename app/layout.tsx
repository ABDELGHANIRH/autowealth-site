import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'AutoWealthAI — AI Automation & Consulting',
  icons: {
    icon: "/favicon.png", // 👈 path to your logo in /public
  },
  description: 'We help businesses save time and scale with AI automations. Automate your workflows, boost revenue, and focus on growth.',
  keywords: 'AI automation, business automation, workflow optimization, AI consulting, productivity tools',
  authors: [{ name: 'AutoWealthAI' }],
  creator: 'AutoWealthAI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://autowealthai.com/<page>',
    title: 'AutoWealthAI — AI Automation & Consulting',
    description: 'We help businesses save time and scale with AI automations. Automate your workflows, boost revenue, and focus on growth.',
    siteName: 'AutoWealthAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoWealthAI — AI Automation & Consulting',
    description: 'We help businesses save time and scale with AI automations. Automate your workflows, boost revenue, and focus on growth.',
    creator: '@autowealthai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <Header />
        <ThemeToggle />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}