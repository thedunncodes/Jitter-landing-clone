'use client'
import getObserver from "@/utils/observer"
import { useEffect } from "react";

export default function HorizontalScrollFeatures() {
  const scrollText = [
    'Jitter', 'makes', 'motion', 'accessible', 'to',
    'every', 'designer,', 'enabling', 'creative', 'teams',
    'to', 'collaborate', 'on', 'and', 'deliver', 'engaging', 'animations',
    'in', 'record', 'time.'

  ];

  useEffect(() => {
      const scrollPop = () => {
          const elements = document.querySelectorAll('#scroll-pop');
          const observer = getObserver('opacity-100');
          if (elements) elements.forEach(element => {
              observer.observe(element);
          });
      }

      scrollPop();
      return () => {scrollPop()};
  }, [])

  return (
    <article aria-label="horizontal-features-scroll" >
        <section aria-label="intro" className="w-[70%] m-auto" >
            <div aria-label="intro-wrapper" className="w-[80%] text-[2.25rem] leading-11 font-bold flex gap-x-1.5 flex-wrap" >
                { 
                    scrollText.map((item, index) => {
                        return (
                            <div key={index} id="scroll-pop" className="opacity-30" >
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </article>
  )
}