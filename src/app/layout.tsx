import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navgation from "@/components/navgation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js",
    default: "Loading...",
  },
  description: "The best movies on the best framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navgation />
        {children}
      </body>
    </html>
  );
}
