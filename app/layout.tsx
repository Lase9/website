import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HDTTV - Premium IPTV Service',
  description: 'Stream 23,000+ channels and 140,000+ movies with HDTTV',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}