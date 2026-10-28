import type { Metadata } from 'next';
import './globals.css';
import { portfolio } from '@/data/portfolio';
const description = `${portfolio.name} is a ${portfolio.role.toLowerCase()} building modern, responsive web experiences with React and Next.js.`;
export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role}`,
  description,
  openGraph: { title: `${portfolio.name} — ${portfolio.role}`, description, type: 'website' },
  ...(portfolio.domain ? { metadataBase: new URL(portfolio.domain), alternates: { canonical: '/' } } : {}),
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
