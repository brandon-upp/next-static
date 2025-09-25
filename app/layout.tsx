import type { Metadata } from "next";
import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "A Next.js web application on GitHub Pages",
};

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/GT-Eesti-Display-Thin.woff',
      weight: '350',
      style: 'normal'
    },
    {
      path: '../public/fonts/GT-Eesti-Display-Bold-Italic.woff',
      weight: '900',
      style: 'italic'
    }
  ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
          {children}
        </body>
    </html>
  );
}
