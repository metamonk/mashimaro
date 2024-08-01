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
      {/* <div className="z-10 w-full max-w-3xl items-center justify-between lg:flex">
      </div> */}
      <div
        className="
          justify-center
          bg-accent
          backdrop-blur-2xl
          cursor-pointer
          w-auto
          rounded-xl
          border
          p-4
          mt-4
        "
        onClick={handleCopy}
      >
        <code className="font-mono font-bold">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</code>
      </div>
      <div>
        <h1 className="text-4xl raised font-bold">$MASHI on Sol</h1>
      </div>
      <div id="about" className="relative flex flex-col place-items-center">
        <div className="relative">
          <Image
            className="relative z-10"
            src="/images/full-body.svg"
            alt="Mashimaro"
            width={180}
            height={278}
            priority
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[160%] h-8 bg-blue-200 rounded-[50%]"></div>
        </div>
        <div className="flex flex-col place-items-center text-center p-10 mt-12 lg:max-w-2xl outline-dotted outline-slate-500 rounded-xl">
          <h2 className="text-2xl font-bold">About Mashimaro</h2>
          <p>Mashimaro is squishiest rabbit on Solana. He is mischievous but sweet-natured, and his name comes from the word "marshmallow" as a Japanese person might pronounce it.</p>
        </div>
      </div>
      <div id="buy" className="relative flex flex-col place-items-center">
        <div className="flex flex-col place-items-center text-center p-10 mt-12 lg:max-w-2xl outline-dotted outline-slate-500 rounded-xl">
          <h2 className="text-2xl font-bold">How to Buy</h2>
          <div>
            <p>1. Download Phantom Wallet from your app store or google chrome extension on desktops.</p>
            <p>2. Get SOL in your wallet to swap for $MASHI.</p>
            <p>3. Go to pump.fun. Connect your wallet.</p>
            <p>4. Paste the $MASHI address into the search and click on the result.</p>
            <p>5. Swap SOL for $MASHI.</p>
          </div>
          <div className="mt-4">
            <Button>Buy Now 💊</Button>
          </div>
        </div>
      </div>
      <div id="community" className="relative flex flex-col place-items-center">
        <div className="flex flex-col place-items-center text-center p-10 mt-12 lg:max-w-3xl outline-dotted outline-slate-500 rounded-xl ">
          <h2 className="text-2xl font-bold">Community</h2>
            <p className="max-w-md mb-4">Join the Mashimaro community on social media for the latest news, memes, and updates.</p>
            <Image
              className="relative z-10 rounded-xl"
              src="/images/community.jpg"
              alt="Mashimaro"
              width={600}
              height={400}
              priority
          />
          <p className="text-sm text-muted-foreground p-1">Let's catch the stars together!</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a href="https://t.me/mashimaro">
              <Button>
                Join Telegram
              </Button>
            </a>
            <a href="https://x.com/mashimaro">
              <Button>
                Follow on X
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div id="disclaimer" className="flex flex-col place-items-center pb-24">
        <p className="max-w-2xl text-xs text-center text-muted-foreground">Disclaimer: Mashimaro on Sol is a meme coin created for entertainment purposes. This is not financial advice. Only invest what you can afford to lose and enjoy the ride!</p>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-accent z-50">
        <div className="grid grid-cols-3 place-items-center max-w-3xl mx-auto mt-4">
          <a href="https://t.me/mashimaro" className="flex items-center gap-2">
            <Image
              src="/images/tg.svg"
              alt="Telegram"
              width={24}
              height={24}
            />
            Telegram
          </a>
          <a href="https://x.com/mashimaro" className="flex items-center gap-2">
            <Image
              src="/images/x.svg"
              alt="X"
              width={24}
              height={24}
            />
            X Profile
          </a>
          <a href="https://pump.fun" className="flex items-center gap-2">
            <Image
              src="/images/pump.svg"
              alt="pump.fun"
              width={24}
              height={24}
            />
            Buy Now
          </a>
        </div>
        <p className="text-sm text-muted-foreground text-center p-2">© 2024 Mashi</p>
      </div>
    </main>
  );
}