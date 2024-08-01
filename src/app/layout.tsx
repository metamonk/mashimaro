import type { Metadata } from "next";
import { Grandstander } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const font = Grandstander({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mashimaro",
  description: "The bizarre rabbit on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-gradient-to-b from-orange-200 to-white`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}