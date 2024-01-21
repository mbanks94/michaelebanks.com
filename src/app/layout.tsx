import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import { Navbar } from '@/components/nav';
import { cx } from '@/lib/utils';

import './globals.css';

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
      <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
