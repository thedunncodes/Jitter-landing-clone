'use client'
import AnimatedText from "./AnimatedText";
import ParallaxZoom from "./ParallaxZoom";

export default function HorizontalScrollFeatures() {


  return (
    <article aria-label="horizontal-features-scroll" className="w-full h-full flex flex-wrap justify-center" >
        <section aria-label="intro" className="w-full sm:w-[70%]" >
            <div aria-label="intro-wrapper" className="w-[90%] max-sm:m-auto sm:w-[80%] h-full" >
              <AnimatedText />
            </div>
        </section>
        <section aria-label="parallax-zoom" className="mt-15 xl:mt-20 w-full h-full" >
          <ParallaxZoom />
        </section>
    </article>
  )
}