import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stitch AI - Get Started',
  description: 'Stitch AI - Get Started',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
