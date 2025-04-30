'use client'
import AnimatedText from "./AnimatedText";
import ParallaxZoom from "./ParallaxZoom";

export default function HorizontalScrollFeatures() {


  return (
    <article aria-label="horizontal-features-scroll" >
        <section aria-label="intro" className="w-full m-auto" >
            <div aria-label="intro-wrapper" className="w-[80%] h-full" >
              <AnimatedText />
            </div>
            <div className="mt-40" >
              <ParallaxZoom />
            </div>
        </section>
    </article>
  )
}