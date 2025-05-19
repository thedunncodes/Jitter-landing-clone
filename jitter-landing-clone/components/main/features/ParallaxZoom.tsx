import { useRef } from 'react';
import { useScroll, useTransform, motion} from 'framer-motion';
import WbEndLeft from '@/components/svg/WbEndLeft';
import WbEndRight from '@/components/svg/WbEndRight';
import WbMiddleLeft from '@/components/svg/WbMiddleLeft';
import WbMiddleRight from '@/components/svg/WbMiddleRight';
import WbTopRight from '@/components/svg/WbTopRight';
import MovingMarker from './MovingMarker';
import GetViewport from '@/hooks/viewportSize';
import SqrEdgeFrame from '../frames/SqrEdgeFrame';
import HorizontalScroll from './HorizontalScroll';

export default function ParallaxZoom() {
    const wbRef = useRef<HTMLDivElement>(null);
    const timeBackgroundRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [ vpWidth ] = GetViewport() || 1024;


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']

    })

    const containerScale = useTransform(scrollYProgress, [0, 0.5], [1, 5]);
    const mobileCntScale = useTransform(scrollYProgress, [0, 0.5], [1, 2.5]);
    const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const containerY = useTransform(scrollYProgress, [0, 0.5], ["0%", "37%"]);
    const tslUp = useTransform(scrollYProgress, [0, 0.5], ["0%", "-75%"]);
    const tslDown = useTransform(scrollYProgress, [0, 0.5], ["0%", "75%"]);
    const tslLeft = useTransform(scrollYProgress, [0, 0.5], ["0%", "-75%"]);
    const tslRight = useTransform(scrollYProgress, [0, 0.5], ["0%", "75%"]);
    const hzContentScaleX = useTransform(scrollYProgress, [0, 0.5], [1, 2]);
    const hzContentScaleY = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const hzContentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);
    const hzContentTslY = useTransform(scrollYProgress, [0.25, 0.5], ["0%", "2%"]);
    const containerBorder = useTransform(scrollYProgress, [0.95, 1.02], ['0rem', '7rem']);
    const mobileCntBorder = useTransform(scrollYProgress, [0.95, 1.02], ['0rem', '5rem']);
    const containerWidth = useTransform(scrollYProgress, [0.98, 1.01], ["100%", "95%"] );
    const bg = useTransform(scrollYProgress, [0.49, 0.5], ["#FFFFFF00", "#f1f1f1"] );
    const hsBg = useTransform(scrollYProgress, [0.49, 0.5], ["#f1f1f1", "#FFFFFF00"] );
    

    return (
        <section aria-label='parallax-zoom-container' ref={containerRef} className={`h-[500dvh] lg:min-h-[600dvh] w-full relative `} >
            <motion.div style={{background: bg, width: containerWidth, borderEndEndRadius: (vpWidth >= 1024) ? containerBorder : mobileCntBorder, borderEndStartRadius: (vpWidth >= 1024) ? containerBorder : mobileCntBorder}} className="shadow-around border-x border-b border-slate-300/75 w-full h-full absolute left-[50%] translate-x-[-50%] z-0" />
            <motion.div aria-label='zoom-wrapper' style={ (vpWidth >= 1024) ? { width: undefined, borderEndEndRadius: undefined, borderEndStartRadius: undefined } : {}} className='w-full lg:sticky top-0 z-2 overflow-hidden m-auto flex justify-center items-center py-[3%] h-[100dvh] transition-all duration-400' >
                <motion.div style={(vpWidth >= 1024) ? {scale: containerScale, y: containerY} : {}} aria-label='whiteboard-container' ref={wbRef} className='w-[85%] md:w-[65%] lg:w-[70%] m-auto overflow-hiddden' >
                    <div aria-label='whiteboard-wrapper' style={{ boxShadow: 'rgba(49, 49, 49, 0.25) 0px 54px 55px, rgba(49, 49, 49, 0.12) 0px -12px 30px, rgba(49, 49, 49, 0.12) 0px 4px 6px, rgba(49, 49, 49, 0.17) 0px 12px 13px, rgba(49, 49, 49, 0.09) 0px -3px 5px' }} className='w-full h-full' >
                        <div aria-label='whiteboard-top' className='w-full h-fit relative z-2' >
                            <div aria-label='whiteboard-top-wrapper' className='flex flex-wrap bg-black justify-between' >
                                <div className='flex w-[17%]' >
                                    <svg viewBox="0 0 335 48" className='w-full -[17%]' fill="none" xmlns="http://www.w3.org/2000/svg" data-sentry-element="FrameHeaderToolsSVG" data-sentry-source-file="HorizontalScrollSection.tsx"><path fillRule="evenodd" clipRule="evenodd" d="m23.414 25 3.293 3.293-1.414 1.414L19.586 24l5.707-5.707 1.414 1.414L23.414 23H35v2H23.414ZM302 17l12-3v15a3 3 0 1 1-2-2.83V18l-8 2v11a3 3 0 1 1-2-2.83V17Z" fill="#fff"></path><path d="M76 18v-2h14v4h-2v-2h-4v12h2v2h-6v-2h2V18h-4v2h-2v-2Z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M148 16h-18v16h18V16Zm-2 2h-14v12h14V18Z" fill="#fff"></path><circle cx="195" cy="24" r="7" stroke="#fff" strokeWidth="2"></circle><path fillRule="evenodd" clipRule="evenodd" d="M260 16h-18v16h18V16Zm-2 2h-14v9l3-3 5 5 3-3 3 3V18Z" fill="#fff"></path><path d="M256 22a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#fff"></path></svg>
                                </div>
                                <div className='flex justify-center w-[60%]' >
                                    <svg viewBox="0 0 141 48" className='ml-[10%] w-[12%]' fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.638 20.957a1.556 1.556 0 0 0-.703-1.172c-.412-.28-.93-.421-1.556-.421-.447 0-.834.071-1.161.213-.327.139-.58.33-.762.575a1.358 1.358 0 0 0-.266.826c0 .26.06.483.181.671.124.188.286.346.485.474.202.124.419.23.65.314.23.082.452.15.665.203l1.066.277c.348.085.705.2 1.07.346.366.146.705.337 1.018.575.312.238.564.533.756.885.195.351.293.772.293 1.262 0 .618-.16 1.167-.48 1.646-.315.48-.775.858-1.379 1.135-.6.277-1.326.415-2.178.415-.817 0-1.524-.13-2.12-.389-.597-.259-1.064-.627-1.401-1.102-.338-.48-.524-1.048-.56-1.705h1.652c.031.394.16.723.383.986.227.259.517.452.868.58.356.124.744.187 1.167.187.465 0 .879-.073 1.241-.219a2.08 2.08 0 0 0 .863-.618c.21-.266.314-.577.314-.932 0-.323-.092-.588-.277-.794a2.046 2.046 0 0 0-.74-.51 7.23 7.23 0 0 0-1.05-.358l-1.289-.351c-.873-.238-1.566-.588-2.077-1.05-.508-.461-.762-1.072-.762-1.832 0-.629.17-1.177.512-1.646.34-.469.802-.833 1.385-1.092.582-.263 1.239-.394 1.97-.394.74 0 1.39.13 1.955.389.569.259 1.016.616 1.343 1.07a2.7 2.7 0 0 1 .511 1.556h-1.587Zm5.168 3.185V29h-1.593V18.09h1.572v4.06h.1c.193-.44.486-.79.88-1.05.394-.259.909-.388 1.544-.388.562 0 1.052.115 1.47.346.423.23.75.575.98 1.033.235.455.352 1.023.352 1.705V29H40.52v-5.012c0-.6-.155-1.066-.464-1.396-.309-.334-.738-.5-1.289-.5-.376 0-.714.08-1.012.239-.295.16-.527.394-.698.703-.167.306-.25.675-.25 1.108Zm10.877 5.023c-.767 0-1.436-.176-2.008-.527a3.557 3.557 0 0 1-1.332-1.476c-.316-.632-.474-1.37-.474-2.216 0-.848.158-1.59.474-2.226a3.55 3.55 0 0 1 1.332-1.481c.572-.352 1.241-.527 2.008-.527.767 0 1.437.175 2.008.527a3.549 3.549 0 0 1 1.332 1.48c.316.636.474 1.379.474 2.227 0 .845-.158 1.584-.474 2.216a3.555 3.555 0 0 1-1.332 1.476c-.572.351-1.24.527-2.008.527Zm.005-1.337c.497 0 .91-.131 1.236-.394.327-.263.568-.613.725-1.05.16-.436.24-.917.24-1.443 0-.522-.08-1.001-.24-1.438a2.343 2.343 0 0 0-.725-1.06c-.327-.267-.739-.4-1.236-.4-.5 0-.916.134-1.246.4a2.38 2.38 0 0 0-.73 1.06 4.242 4.242 0 0 0-.234 1.438c0 .526.078 1.007.234 1.444.16.436.403.786.73 1.049.33.263.746.394 1.246.394ZM54.8 29l-2.407-8.182h1.646l1.603 6.009h.08l1.609-6.009h1.646l1.598 5.982h.08l1.592-5.982h1.646L61.49 29h-1.625l-1.662-5.907h-.122L56.419 29h-1.62Zm10.605 0v-8.182h1.54v1.3h.084c.15-.44.412-.787.789-1.039.38-.256.81-.383 1.289-.383a6.802 6.802 0 0 1 .676.037v1.523a2.841 2.841 0 0 0-.34-.058 3.247 3.247 0 0 0-.49-.038c-.377 0-.713.08-1.007.24a1.782 1.782 0 0 0-.949 1.604V29h-1.592Zm8.99.165c-.806 0-1.5-.172-2.083-.517a3.504 3.504 0 0 1-1.342-1.464c-.313-.633-.469-1.373-.469-2.222 0-.838.156-1.576.469-2.216a3.64 3.64 0 0 1 1.32-1.496c.569-.359 1.233-.538 1.993-.538.462 0 .91.076 1.342.229a3.25 3.25 0 0 1 1.167.719c.344.326.616.75.815 1.273.199.518.298 1.149.298 1.89v.566H71.4v-1.194h4.943c0-.419-.085-.79-.255-1.113a1.932 1.932 0 0 0-.72-.772 2.009 2.009 0 0 0-1.075-.283c-.448 0-.839.11-1.172.33-.33.217-.586.501-.767.853a2.46 2.46 0 0 0-.267 1.134v.933c0 .546.096 1.012.288 1.395.195.384.467.677.815.88.348.198.755.297 1.22.297.302 0 .577-.042.825-.127a1.712 1.712 0 0 0 1.06-1.039l1.508.271a2.73 2.73 0 0 1-.65 1.167 3.15 3.15 0 0 1-1.166.773c-.466.18-.997.271-1.593.271Zm8.803 0c-.806 0-1.5-.172-2.082-.517a3.505 3.505 0 0 1-1.343-1.464c-.312-.633-.468-1.373-.468-2.222 0-.838.156-1.576.468-2.216a3.64 3.64 0 0 1 1.322-1.496c.568-.359 1.232-.538 1.992-.538.461 0 .909.076 1.342.229a3.25 3.25 0 0 1 1.166.719c.345.326.617.75.816 1.273.198.518.298 1.149.298 1.89v.566h-6.504v-1.194h4.943c0-.419-.085-.79-.256-1.113a1.932 1.932 0 0 0-.719-.772 2.008 2.008 0 0 0-1.076-.283c-.447 0-.838.11-1.172.33-.33.217-.586.501-.767.853a2.46 2.46 0 0 0-.266 1.134v.933c0 .546.096 1.012.288 1.395.195.384.467.677.815.88.348.198.754.297 1.22.297.301 0 .577-.042.825-.127a1.712 1.712 0 0 0 1.06-1.039l1.508.271a2.73 2.73 0 0 1-.65 1.167 3.15 3.15 0 0 1-1.167.773c-.465.18-.996.271-1.593.271Zm6.87-11.074V29h-1.592V18.09h1.593Zm10.252 7.372h1.619l1.14 1.486.538.66 1.817 2.371h-1.684l-1.214-1.582-.416-.575-1.8-2.36Zm5.465-1.918c0 1.165-.213 2.167-.639 3.005-.426.834-1.01 1.477-1.753 1.928-.738.447-1.578.671-2.519.671-.945 0-1.788-.224-2.53-.671-.739-.451-1.321-1.096-1.748-1.934-.426-.838-.639-1.837-.639-2.998 0-1.165.213-2.165.64-3 .426-.837 1.008-1.48 1.747-1.928.742-.45 1.585-.676 2.53-.676.941 0 1.781.225 2.519.676.743.448 1.327 1.09 1.753 1.929.426.834.639 1.834.639 2.998Zm-1.63 0c0-.887-.144-1.635-.431-2.242-.284-.61-.675-1.073-1.172-1.385a3.045 3.045 0 0 0-1.678-.474c-.629 0-1.19.158-1.683.474-.494.313-.885.774-1.172 1.385-.284.607-.426 1.355-.426 2.242 0 .888.142 1.637.426 2.248.287.608.678 1.07 1.172 1.385a3.08 3.08 0 0 0 1.683.469c.625 0 1.184-.156 1.678-.469.497-.316.888-.777 1.172-1.385.287-.61.431-1.36.431-2.247Zm3.304 3.324v-1.331l4.714-7.447h1.05v1.96h-.666l-3.372 5.338v.085h6.461v1.395h-8.187ZM112.63 29v-2.535l.011-.608v-7.766h1.561V29h-1.572Z" fill="#fff"></path><path d="m124.705 22.295 2.295 2.29 2.295-2.29L130 23l-3 3-3-3 .705-.705Z" fill="#97979B"></path></svg>
                                </div>
                                <div className='fex w-[22.8%]' >
                                    <WbTopRight {...{className : 'w-full h-full '}} />
                                </div>
                            </div>
                        </div>
                        <div aria-label='whiteboard-middle' className='relative z-1 w-full' >
                            <div aria-label='whiteboard-middle-wrapper' className='flex flex-wrap justify-between' >
                                <div className='w-[13%] flex items-start' >
                                    <WbMiddleLeft {...{className : 'w-full h-fit '}} />
                                </div>
                                <motion.div style={{ background: hsBg }} className='w-[74%] flex items-center justify-center bg-sec' >
                                    <div className='flex w-[70%] lg:hidden' >
                                        <SqrEdgeFrame sqrEdge={false} scrollAnimation={false} >
                                            <video autoPlay loop muted playsInline>
                                                <source src="https://assets.jitter.video/horizontal-scroll/mobile-cover.mp4" type="video/mp4" />
                                            </video>
                                        </SqrEdgeFrame>
                                    </div>
                                    {
                                        (vpWidth >= 1024) && (
                                            <motion.div aria-label='horizontal-scroll-container' style={{y: undefined}} className='relative h-full hidden lg:block overdflow-hidden w-full bsorder-2 border-prim-alt-dark' >
                                                <motion.div aria-label='horizontal-scroll-container' style={{scale: ((vpWidth >= 1024) ? contentScale : undefined )}} className='sticky top-0 w-fit h-full bg-redd-600 flex justify-center items-center' >
                                                    <div aria-label='horizontal-scroll-wrapper' className='w-[70%] grid grid-cols-3 grid-rows-3' >
                                                        <motion.div aria-label='scroll-bg-content1' style={{ y: tslUp }} className='w-full h-full flex justify-center items-center p-3' >
                                                            <video autoPlay loop muted playsInline>
                                                                <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-1-0.mp4' type='video/mp4' />
                                                            </video>
                                                        </motion.div>
                                                        <motion.div aria-label='scroll-bg-content2' style={{ y: tslUp }} className='w-full h-full flex justify-center items-center p-3' >
                                                            <video autoPlay loop muted playsInline>
                                                                <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-2-0.mp4' type='video/mp4' />
                                                            </video>
                                                        </motion.div>
                                                        <motion.div aria-label='scroll-bg-content3' style={{ y: tslUp }} className='w-full h-full flex justify-center items-center p-3' >
                                                            <video autoPlay loop muted playsInline>
                                                                <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-1-2.mp4' type='video/mp4' />
                                                            </video>
                                                        </motion.div>
                                                        <motion.div aria-label='scroll-bg-content4' style={{ x: tslLeft }} className='w-full h-full flex justify-center items-center p-3' >
                                                            <video autoPlay loop muted playsInline>
                                                                <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-1-1.mp4' type='video/mp4' />
                                                            </video>
                                                        </motion.div>
                                                        <motion.div aria-label='scroll-bg-content5' style={{ scaleX: hzContentScaleX, scaleY: hzContentScaleY, y: hzContentTslY }} className='w-full h-full flex justify-center items-center' >
                                                            <motion.div style={{scaleX: hzContentScale}} className='w-full h-full flex justify-center items-center' >
                                                                <HorizontalScroll {...{scrollYProgress}} />
                                                            </motion.div>
                                                        </motion.div>
                                                        <motion.div aria-label='scroll-bg-content6' style={{ x: tslRight }} className='w-full h-full flex justify-center items-center p-3' >
                                                            <video autoPlay loop muted playsInline>
                                                                <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-2-2.mp4' type='video/mp4' />
                                                            </video>
                                                        </motion.div>
                                                        <motion.div aria-label='scroll-bg-content7' style={{ y: tslDown }} className='w-full h-full flex justify-center items-center p-3' >
                                                            <video autoPlay loop muted playsInline>
                                                                <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-3-0.mp4' type='video/mp4' />
                                                            </video>
                                                        </motion.div>
                                                        <motion.div aria-label='scroll-bg-content8' style={{ y: tslDown }} className='w-full h-full flex justify-center items-center p-3' >
                                                            <video autoPlay loop muted playsInline>
                                                                <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-3-1.mp4' type='video/mp4' />
                                                            </video>
                                                        </motion.div>
                                                        <motion.div aria-label='scroll-bg-content9' style={{ y: tslDown }} className='w-full h-full flex justify-center items-center p-3' >
                                                            <video autoPlay loop muted playsInline>
                                                                <source src='https://assets.jitter.video/horizontal-scroll/compressed_hs-3-2.mp4' type='video/mp4' />
                                                            </video>
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        )
                                    }
                                </motion.div>
                                <div className='w-[13%] flex items-start' >
                                    <WbMiddleRight {...{className : 'w-full h-fit '}} />
                                </div>
                            </div>
                        </div>
                        <div aria-label='whiteboard-end' className='w-full relative z-4' >
                            <div aria-label='whiteboard-end-wrapper' className='flex justify-between w-full' >
                                <div aria-label='whiteboard-end-content1' className='w-[13%]' >
                                    <WbEndLeft {...{className : 'w-full h-full '}} />
                                </div>
                                <div className='w-[87%] grow relative bg-background' >
                                    <div aria-label='whiteboard-end-marker' className='absolute left-0 top-0 w-full h-full' >
                                        <div aria-label='marker-wrapper' className='w-full bsg-slate-800 h-full' >
                                            <MovingMarker {...{ wbRef, timeBgRef: timeBackgroundRef }} />
                                        </div>
                                    </div>
                                    <div aria-label='whiteboard-end-content2' ref={timeBackgroundRef}>
                                        <WbEndRight {...{className : 'w-full ml-[0.5px] h-full '}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            {
                (vpWidth < 1024) && (
                    <motion.div aria-label='mobile-horizontal-scroll'  className='w-full sticky top-0 z-2 bg-transparent overflow-hidden m-auto flex justify-center items-center py-[3%] h-[100dvh]' >
                        <motion.div aria-label='mobile-horizontal-scroll-container' style={{scale: mobileCntScale, background: hsBg}} className='w-full h-full bg-sec m-auto overflow-hiddens' >
                            <div aria-label='mobile-horizontal-scroll-wrapper' className='w-full h-full flex items-center justify-center' >
                                <motion.div style={{scaleX: undefined }} className='w-full h-[40%] flex justify-center items-center box-border' >
                                    <HorizontalScroll {...{scrollYProgress}} />
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )
            }
        </section>
    );
}