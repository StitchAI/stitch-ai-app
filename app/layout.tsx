import '@/styles/global.css';

import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';

import DialogProvider from '@/providers/dialog';
import Web3Provider from '@/providers/web3';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Stitch AI',
  description: 'Stitch AI',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookie = (await headers()).get('cookie');

  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <Web3Provider cookie={cookie}>
          <DialogProvider>{children}</DialogProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
