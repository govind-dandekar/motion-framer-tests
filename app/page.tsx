"use client"

import { RadixProgress } from "@/app/components/ui/radix-progress"
import Typewriter from "./components/ui/typewriter";

import { useEffect, useState } from "react";

export default function Home() {
  const [showRadixProgress, setShowRadixProgress] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setShowRadixProgress(false)
    }, 3300)
  }, [])
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center -mt-16 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {showRadixProgress ? <RadixProgress /> : <Typewriter />}
      </main>
    </div>
  );
}
