import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Overstack',
  description:
    'Modern immersive education for future developers, analysts, and cybersecurity professionals.',

  keywords: [
    'Overstack',
    'Full Stack Development',
    'Cybersecurity',
    'Data Analytics',
    'Programming Courses',
    'Tech Education',
  ],

  openGraph: {
    title: 'Overstack',
    description:
      'Modern immersive education platform.',
    url: 'https://overstack.in',
    siteName: 'Overstack',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
