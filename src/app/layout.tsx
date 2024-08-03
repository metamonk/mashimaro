import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mashimaro",
  description: "The squishiest rabbit on Solana",
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