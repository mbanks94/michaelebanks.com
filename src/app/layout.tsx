import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cx } from '@/lib/utils';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://michaelebanks.com'),
  title: 'Michael E Banks',
  description: 'Developer, gamer, and pet daddy.',
  openGraph: {
    title: 'Michael E Banks',
    description: 'Developer, gamer, and pet daddy.',
    url: 'https://michaelebanks.com',
    siteName: 'Michael E Banks',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#212121]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
