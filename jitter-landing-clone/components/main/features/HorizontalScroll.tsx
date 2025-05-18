import { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useTransform } from "motion/react";
import Image from 'next/image';
import SqrEdgeFrame from "../frames/SqrEdgeFrame";
import FloatingCursor from "../frames/FloatingCursor";
import CtaHover from "../hovers/CtaHover";
import GetViewport from "@/hooks/viewportSize";

interface HorizontalScrollProps {
    scrollYProgress: MotionValue<number>;
}

export default function HorizontalScroll(props: HorizontalScrollProps) {
  const { scrollYProgress } = props;
  const [ vpWidth ] = GetViewport();
  const [ offsetSize, setOffsetSize ] = useState<number>(0)
  const translateRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const hasCalculatedRef = useRef<boolean>(false);

  const x = useTransform(scrollYProgress, [0.5, 1], ["0px", `-${offsetSize}px`]);
  const mobileX = useTransform(scrollYProgress, [0.5, 1], [`${(translateRef.current?.offsetWidth || 0) / 2}px`, `-${offsetSize - ((translateRef.current?.offsetWidth || 0) * 0.297)}px`]);
  const itemScaleX = useTransform(scrollYProgress, [0, 0.5], [1, 0.55]);
  const itemScaleY = useTransform(scrollYProgress, [0, 0.5], [1, 0.83]);
  const textItem2X = useTransform(scrollYProgress, [0.59, 0.63], ["0%", "100%"]);
  const textItem3X = useTransform(scrollYProgress, [0.68, 0.72], ["0%", "100%"]);
  const mobTxtItem2X = useTransform(scrollYProgress, [0.63, 0.68], ["0%", "100%"]);
  const mobTxtItem3X = useTransform(scrollYProgress, [0.74, 0.77], ["0%", "120%"]);
  const flexGapX = useTransform(scrollYProgress, [0, 0.5], ['40px', '0px']);

  useEffect(() => {
      hasCalculatedRef.current = false;
  }, [vpWidth]);
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
        if (latest > 0.5 && !hasCalculatedRef.current ) {
          if (translateRef.current && lastItemRef.current) {
              const offset = (translateRef.current.scrollWidth) - (lastItemRef.current.offsetWidth);
              const margin = vpWidth * 0.0185
              setOffsetSize(offset + margin)
          }
          hasCalculatedRef.current = true;
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, vpWidth])


  return (
    <div className="w-full h-full p-3 overflow-hidden">
        <div className="sts w-full top-0 h-full flex items-center">
            <motion.div ref={translateRef} className="w-full flex h-full lg:pl-0 gap-y-4 gap-x-11 min-[375px]:gap-x-15 md:gap-x-0" style={{ x: (vpWidth < 1024) ? mobileX : x, columnGap: (vpWidth < 1024) ? undefined : flexGapX }}>
                    <motion.div
                        aria-label="horizontal-scroll-item1"
                        style={(vpWidth >= 1024) ? { scaleX: itemScaleX, scaleY: itemScaleY } : {}}
                        className={`relative flex-shrink-0 w-[50%] lg:w-full h-full flex items-center justify-center`}
                    >   
                        <div className="relative w-full h-full" >
                            <div className="h-fit w-full top-[50%] absolute translate-y-[-50%] lg:blocks min-[360px]:max-w-[10rem] max-w-[8.5rem] sm:max-w-[14rem] lg:max-w-full" >
                                <SqrEdgeFrame sqrEdge title="Artboard 1 - Showreel" scrollAnimation scrollYProgress={scrollYProgress} >
                                        <video autoPlay loop muted playsInline className="flex">
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-2-1.mp4' type='video/mp4' />
                                        </video>
                                </SqrEdgeFrame>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        aria-label="horizontal-scroll-item2"
                        style={(vpWidth >= 1024) ? { scaleX: itemScaleX, scaleY: itemScaleY } : {}}
                        className={`relative flex-shrink-0 w-[50%] lg:w-full h-full flex items-center justify-center`}
                    >
                        <div aria-label="item-content-wrapper" className="relative w-full h-full max-h-[40%] lg:max-h-[5rem] min-[1780px]:max-h-[7rem] max-w-[14rem] 2xl:max-w-full flex items-center flex-wrap flex-col justify-between" >
                            <FloatingCursor {...{ name: 'Kelly', bgColor: 'pink', invert: false }} />
                            <div className="w-[66%] h-[50%] self-start ml-1 flex items-end justify-between gap-x-2" >
                                <div className="w-[43%] xl:w-[45%] h-fit" >
                                    <SqrEdgeFrame sqrEdge title="Component 1" scrollAnimation scrollYProgress={scrollYProgress}  >
                                        <CtaHover scrollAnimation />
                                        <video autoPlay loop muted playsInline className="max-h-[4.5rem] lg:max-h-fit" >
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-0.mp4' type='video/mp4' />
                                        </video>
                                    </SqrEdgeFrame>
                                </div>
                                <div className="w-[43%] xl:w-[45%] h-fit" >
                                    <SqrEdgeFrame sqrEdge title="Component 2" scrollAnimation scrollYProgress={scrollYProgress}  >
                                        <CtaHover scrollAnimation />
                                        <video autoPlay loop muted playsInline className="max-h-[4.5rem] lg:max-h-fit" >
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-1.mp4' type='video/mp4' />
                                        </video>
                                    </SqrEdgeFrame>
                                </div>
                            </div>
                            <motion.div style={{ scaleX: 0.95 }} aria-label="item-text-content" className="w-full text-prim tracking-tighter text-[5px] leading-[1] font-inter font-semibold " >
                                <motion.div style={(vpWidth < 1024) ? {x: mobTxtItem2X } : {x: textItem2X}} className="w-[50%]" >
                                    Jump into a familiar interface
                                    and get your first animation
                                    ready in minutes.
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        aria-label="horizontal-scroll-item3"
                        style={(vpWidth >= 1024) ? { scaleX: itemScaleX, scaleY: itemScaleY } : {}}
                        className={`relative flex-shrink-0 w-[50%] lg:w-full h-full flex items-center justify-center`}
                    >
                        <div aria-label="item-content-wrapper" className="relative w-full h-full max-h-[40%] lg:max-h-[5rem] min-[1780px]:max-h-[7rem] max-w-[14rem] flex items-center flex-wrap flex-col justify-between" >
                            <FloatingCursor {...{ name: 'Baptiste', bgColor: 'purple', invert: true }} />
                            <div className="w-[100%] h-[50%] self-start ml-1 flex items-end justify-between gap-x-2" >
                                <div className="w-[45%] h-fit relative" >
                                    <CtaHover scrollAnimation />
                                    <video autoPlay loop muted playsInline>
                                        <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-2.mp4' type='video/mp4' />
                                    </video>
                                </div>
                                <div className="w-[40%] h-fit px-[3%]" >
                                    <SqrEdgeFrame sqrEdge title="CTA Animation" scrollAnimation scrollYProgress={scrollYProgress} className="" >
                                        <CtaHover scrollAnimation />
                                        <video autoPlay loop muted playsInline>
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-3.mp4' type='video/mp4' />
                                        </video>
                                    </SqrEdgeFrame>
                                </div>
                            </div>
                            <motion.div style={{ scaleX: 0.95 }} aria-label="item-text-content" className="w-full text-prim tracking-tighter text-[5px] leading-[1] font-inter font-semibold " >
                                <motion.div style={(vpWidth < 1024) ? {x: mobTxtItem3X } : {x: textItem3X }} className="w-[50%] lg:w-[63%]" >
                                    Scale your animations for marketing, 
                                    ads, brand, and product on an 
                                    infinite canvas.
                                </motion.div>
                            </motion.div>

                        </div>
                    </motion.div>
                    <motion.div
                        aria-label="horizontal-scroll-item4"
                        style={(vpWidth >= 1024) ? { scaleX: itemScaleX, scaleY: itemScaleY } : {}}
                        className={`flex-shrink-0 w-[50%] lg:w-full lg:min-w-[16rem] h-full flex items-scenter justify-center`}
                    >
                        <div className="w-full h-full flex flex-wrap items-center justify-center" >
                            <SqrEdgeFrame sqrEdge={false} title="Artboard 2 - Upcoming ads" scrollAnimation scrollYProgress={scrollYProgress} className="bg-[#B7B9BD] scale-125 lg:scale-100" >
                                <div className="w-full h-full flex items-center justify-center gap-x-1  p-[9px] bg-sec" >
                                    <div className="relative w-full h-fit max-h-16 max-w-11 flex" >
                                        <CtaHover scrollAnimation />
                                        <video autoPlay loop muted playsInline className="py-[1px] rounded-sm bg-white">
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-4-0.mp4' className="rounded-2xl" type='video/mp4' />
                                        </video>
                                    </div>
                                    <div className="relative w-full h-fit max-h-16 max-w-11 flex" >
                                        <CtaHover scrollAnimation />
                                        <video autoPlay loop muted playsInline className="">
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-4-1.mp4' type='video/mp4' />
                                        </video>
                                    </div>
                                    <div className="relative w-full h-fit max-h-16 max-w-11 flex" >
                                        <CtaHover scrollAnimation />
                                        <video autoPlay loop muted playsInline className="">
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-4-2.mp4' type='video/mp4' />
                                        </video>
                                    </div>
                                    <div className="relative w-full h-fit max-h-16 max-w-11 flex" >
                                        <CtaHover scrollAnimation />
                                        <video autoPlay loop muted playsInline className="">
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-4-3.mp4' type='video/mp4' />
                                        </video>
                                    </div>
                                    <div className="relative w-full h-fit max-h-16 max-w-11 flex" >
                                        <CtaHover scrollAnimation />
                                        <video autoPlay loop muted playsInline className="">
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-4-4.mp4' type='video/mp4' />
                                        </video>
                                    </div>
                                </div>
                            </SqrEdgeFrame>
                        </div>
                    </motion.div>
                    <motion.div
                        aria-label="horizontal-scroll-item5"
                        ref={lastItemRef}
                        style={(vpWidth >= 1024) ? { scaleX: itemScaleX, scaleY: itemScaleY } : {}}
                        className={`relative flex-shrink-0 w-[50%] lg:w-full h-full flex items-center justify-center`}
                    >
                        <div aria-label="item-content-wrapper" className="relative w-full h-full max-h-[50%] sm:max-h-[40%] lg:max-h-[5rem] min-[1780px]:max-h-[7rem] max-w-[14rem] flex items-center flex-wrap flex-col justify-between" >

                            <div className="absolute w-full h-full -left-8" >
                                <FloatingCursor {...{ name: 'Thomas', bgColor: 'sky-blue', invert: true }} />
                            </div>
                            <div className="w-[40%] h-[70%] lg:h-[50%] self-start ml-1 flex items-center lg:items-end justify-between gap-x-2" >
                                <div className="w-full h-fit flex justify-center" >
                                    <SqrEdgeFrame sqrEdge title="CTA Animation" scrollAnimation scrollYProgress={scrollYProgress} className="max-h-12 lg:max-h-9.5" >
                                        <CtaHover scrollAnimation />
                                        <video autoPlay loop muted playsInline className="max-h-12 lg:max-h-9.5" >
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-5.mp4' type='video/mp4' />
                                        </video>
                                    </SqrEdgeFrame>
                                </div>
                            </div>
                            <motion.div  aria-label="item-text-content" className="w-[50%] self-start ml-1 text-prim tracking-tighter text-[5px] leading-[1] font-inter font-semibold " >
                                <motion.div className="w-full pl-[7%] lg:pl-0" >
                                    Collaborate, iterate, and get 
                                    your work approved quickly 
                                    — all in one place.
                                </motion.div>
                            </motion.div>
                            <div className="w-[50%] absolute right-0 h-full flex items-center justify-center" >
                                <div className="w-full h-full relative " >
                                    <figure className="absolute w-full h-full z-3 overflow-hidden flex items-center justify-center" >
                                        <div aria-label="cta-container" className="absolute w-full max-w-[40%] lg:max-w-[60%] pt-[15%] xl:py-[6%] min-[1300px]:max-w-[45%] min-[1300px]:py-[10%] h-full" >
                                            <div className="relative w-full xl:border border-transparent h-full" >
                                                <CtaHover scrollAnimation />
                                            </div>
                                        </div>
                                        <Image
                                            src={'https://jitter.video/aw-cms/images/horizontal-slider/iphone-16@2x.png'}
                                            alt="iphone-16-frame"
                                            width={500}
                                            height={100}
                                            className="max-w-[40%] lg:max-w-[60%] min-[1300px]:max-w-[45%]"
                                        />
                                    </figure>
                                    <figure className="absolute w-full h-full flex items-center justify-center" >
                                        <video autoPlay loop muted playsInline className="w-full max-w-[40%] lg:max-w-[60%] min-[1300px]:max-w-[45%] rounded-lg h-fit z-1" >
                                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-item-6b.mp4' type='video/mp4' />
                                        </video>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </motion.div>
            </motion.div>
        </div>
    </div>
  )
}