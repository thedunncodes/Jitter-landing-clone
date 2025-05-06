import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import SqrEdgeFrame from "../frames/SqrEdgeFrame";

interface HorizontalScrollProps {
    scrollYProgress: MotionValue<number>;
}

export default function HorizontalScroll(props: HorizontalScrollProps) {
    const { scrollYProgress } = props
    const carouselRef = useRef<HTMLDivElement>(null)

  const x = useTransform(scrollYProgress, [0.5, 1], ["0%", "-500%"])
  const itemScaleX = useTransform(scrollYProgress, [0, 0.5], [1, 0.7])
  const itemScaleY = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])

  // structure test items
  const items = [
    { id: 1, title: "Item 1", color: "bg-blue-500" },
    { id: 2, title: "Item 2", color: "bg-purple-500" },
    { id: 3, title: "Item 3", color: "bg-green-500" },
    { id: 4, title: "Item 4", color: "bg-amber-500" },
    { id: 5, title: "Item 5", color: "bg-red-500" },
  ]


  return (
    <div ref={carouselRef} className="w-full h-full -[100vh] bg-wred-500 p-3 overflow-hidden">
        <div className="sticky w-full top-0 bg-cwyan-500 h-full flex items-center">
        <motion.div className="w-full flex bg-yellow h-full gap-4" style={{ x }}>
                <motion.div
                    style={{ scaleX: itemScaleX, scaleY: itemScaleY }}
                    className={`flex-shrink-0 w-full h-full rounded-xl flex items-center justify-center`}
                >
                    <SqrEdgeFrame sqrEdge title="Artboard 1 - Showreel" scrollAnimation scrollYProgress={scrollYProgress} >
                        <video autoPlay loop muted playsInline>
                            <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-2-1.mp4' type='video/mp4' />
                        </video>
                    </SqrEdgeFrame>
                </motion.div>
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    style={{ scaleX: itemScaleX, scaleY: itemScaleY }}
                    className={`${item.color} flex-shrink-0 w-full  h-full rounded-xl flex items-center justify-center`}
                >
                    <h2 className="text-4xl font-bold text-white">{item.title}</h2>
                </motion.div>
            ))}
        </motion.div>
        </div>
    </div>
  )
}