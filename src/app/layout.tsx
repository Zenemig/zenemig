import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/theme';
import getTheme from '@/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Zenemig',
  description: 'Zenemig - Personal Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode] = useAtom(themeAtom);
  const theme = getTheme(mode);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
