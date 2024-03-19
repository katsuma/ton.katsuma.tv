import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const siteName = "TON.KATSUma.TV";
const siteDescription = "本当に有益なとんかつ情報サイトです";

export const metadata: Metadata = {
  metadataBase: new URL('https://ton.katsuma.tv'),
  title: siteName,
  description: siteDescription,
  openGraph: {
    title: {
      default: siteName,
      template: `%s - ${siteName}`,
    },
    description: siteDescription,
    url: '/',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: siteName,
      template: `%s - ${siteName}`,
    },
    description: siteDescription,
    site: '@ryo_katsuma',
    creator: '@ryo_katsuma',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
