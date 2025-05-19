'use client'
import Header from "@/components/header/Header";
import HorizontalScrollFeatures from "@/components/main/features/HorizontalScrollFeatures";
import CtaHover from "@/components/main/hovers/CtaHover";
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";

export default function Home() {
  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
    <>
      <Header />
      <main className="mt-22 w-full" >
        <div className="h-[25rem] w-full bg-sky-600s" ></div>
          <HorizontalScrollFeatures />
      </main>
    </>
  );
}
