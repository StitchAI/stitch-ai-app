import '@/styles/global.css';

import { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { headers } from 'next/headers';

import DialogProvider from '@/providers/dialog';
import UserProvider from '@/providers/user';
import Web3Provider from '@/providers/web3';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});
export const metadata: Metadata = {
  title: 'Stitch AI',
  description: 'Decentralized Knowledge Hub for AI',

  openGraph: {
    title: 'Stitch AI',
    description: 'Decentralized Knowledge Hub for AI',
    url: 'https://app-devnet.stitch-ai.co/',
    siteName: 'Stitch AI',
    images: [
      {
        url: 'https://app-devnet.stitch-ai.co/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Stitch AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stitch AI',
    description: 'Decentralized Knowledge Hub for AI',
    images: ['https://app-devnet.stitch-ai.co/images/og.png'],
  },
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
    <html lang="en" className={`${inter.className} ${spaceGrotesk.variable}`}>
      <body>
        <Web3Provider cookie={cookie}>
          <UserProvider>
            <DialogProvider>{children}</DialogProvider>
          </UserProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
