'use client'
import AnimatedText from "./AnimatedText";

export default function HorizontalScrollFeatures() {


  return (
    <article aria-label="horizontal-features-scroll" >
        <section aria-label="intro" className="w-[70%] m-auto" >
            <div aria-label="intro-wrapper" className="w-full h-full" >
                <AnimatedText />
            </div>
        </section>
    </article>
  )
}