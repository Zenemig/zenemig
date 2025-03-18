import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Dancing_Script } from "next/font/google";
import { Unica_One } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

// Primary font - Roboto
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// Secondary font - Roboto Condensed
const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

// Handwritten font - Dancing Script
const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
});

// Display font - Unica One
const unicaOne = Unica_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unica-one',
});

export const metadata: Metadata = {
  title: "Zenemig | Developer & Photographer",
  description: "Zenemig's personal portfolio - Showcasing photography, development projects, and creative work",
  keywords: "Zenemig, photography, development, creative, portfolio, developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${robotoCondensed.variable} ${dancingScript.variable} ${unicaOne.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
