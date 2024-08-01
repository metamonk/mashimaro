'use client'

import Image from "next/image"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export default function Home() {
  const handleCopy = () => {
    navigator.clipboard.writeText('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    toast.success("Address copied")
  };
  
  return (
    <main className="flex flex-col items-center gap-12 py-8 px-4 relative">
      
    </main>
  );
}