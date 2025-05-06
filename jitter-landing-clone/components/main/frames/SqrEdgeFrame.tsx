import { useTransform, motion, MotionValue, useMotionValue } from "motion/react";
import { ReactNode } from "react";

interface SqrEdgeFrameProps {
    title?: string;
    sqrEdge: boolean;
    children: ReactNode;
    scrollYProgress?: MotionValue<number>;
    scrollAnimation: boolean;
    className?: string;
}

export default function SqrEdgeFrame(props: SqrEdgeFrameProps) {
    const {
        title, sqrEdge, children,
        scrollYProgress, scrollAnimation, className
     } = props;
    const full = useMotionValue(1);
    const scale = useTransform(scrollYProgress?? full, [0, 0.5], [0.3, 0.2]);

    return (
        <div aria-label="sqr-edge-container" className={`w-fit h-fit ${className} relative`} >
            {
                title && (
                    <motion.div style={ scrollAnimation? {fontSize: '2px'} : {}} aria-label="sqr-edge-title" className="absolute w-full left-0 w-top-5 -top-1  text-sm font-inter text-prim-alt-dark" >
                        {title}
                    </motion.div>
                )
            }
            {
                sqrEdge && (
                    <>
                        <motion.div style={ scrollAnimation? {scale} : {}} aria-label="sqr-edge" className="absolute w-2 h-2 z-3 -top-1 -left-1 border border-prim-alt-dark bg-white " />
                        <motion.div style={ scrollAnimation? {scale} : {}} aria-label="sqr-edge" className="absolute w-2 h-2 z-3 -top-1 -right-1 border border-prim-alt-dark bg-white " />
                        <motion.div style={ scrollAnimation? {scale} : {}} aria-label="sqr-edge" className="absolute w-2 h-2 z-3 -bottom-1 -left-1 border border-prim-alt-dark bg-white " />
                        <motion.div style={ scrollAnimation? {scale} : {}} aria-label="sqr-edge" className="absolute w-2 h-2 z-3 -bottom-1 -right-1 border border-prim-alt-dark bg-white " />
                        <motion.div style={ scrollAnimation? {scaleY: 0.05, y: '-50%'} : {}} aria-label="sqr-border" className="absolute z-1 w-full h-1 top-0 bg-prim-alt-dark" />
                        <motion.div style={ scrollAnimation? {scaleX: 0.05, x: '50%'} : {}} aria-label="sqr-border" className="absolute z-1 w-1 h-full -right-0 bg-prim-alt-dark" />
                        <motion.div style={ scrollAnimation? {scaleY: 0.05, y: '50%'} : {}} aria-label="sqr-border" className="absolute z-1 w-full h-1 bottom-0 bg-prim-alt-dark" />
                        <motion.div style={ scrollAnimation? {scaleX: 0.05, x: '-50%'} : {}} aria-label="sqr-border" className="absolute z-1 w-1 h-full -left-0 bg-prim-alt-dark" />
                    </>
                )
            }
            <div aria-label="sqr-edge-content" style={{ outline: "0px solid blue" }} className="z-2 flex items-center justify-center w-fit h-auto m-aut" >
                {children}
            </div>
        </div>
    )
}