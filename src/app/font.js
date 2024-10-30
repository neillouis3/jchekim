import localFont from "next/font/local";
import {Source_Serif_4, Open_Sans} from "next/font/google";

export const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ['latin'],
    display: 'swap',
  });
export const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
export const source4 = Source_Serif_4({
    variable: "--font-source-serif-4",
    subsets: ['latin'],
    display: 'swap',
});