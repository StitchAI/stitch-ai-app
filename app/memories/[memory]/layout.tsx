import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stitch AI - Memories',
  description: 'Stitch AI - Memories',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
