import type { Metadata } from "next";
import {geistMono, openSans, source4} from "./font";
import "./globals.css";



export const metadata: Metadata = {
  title: "JCHEKIM",
  description: "Jesus Christ The Highly Exalted King International Ministry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${geistMono.variable} ${source4.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
