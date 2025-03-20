import { Roboto, Roboto_Condensed, Unica_One } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Provider } from 'jotai';
import ThemeProvider from '@/components/ThemeProvider';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--roboto-font',
});

const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--roboto-condensed-font',
});

const unicaOne = Unica_One({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--unica-one-font',
});

export const metadata = {
  title: 'Zenemig',
  description: 'Zenemig - Personal Website',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${robotoCondensed.variable} ${unicaOne.variable}`}>
        <AppRouterCacheProvider>
          <Provider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
