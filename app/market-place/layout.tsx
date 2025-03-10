import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stitch AI - Marketplace',
  description: 'Stitch AI - Marketplace',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
