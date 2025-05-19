import { RefObject, useEffect, useState } from "react"

interface MovingMarkerProps {
    wbRef: RefObject<HTMLDivElement | null>;
    timeBgRef: RefObject<HTMLDivElement | null>;
}

interface movementProps {
    position: number;
    limit: number;
}

export default function MovingMarker(props: MovingMarkerProps) {
    const { wbRef, timeBgRef } = props;
    const [ timeline, setTimeline ] = useState<string>('0.00');
    const [ movement, setMovement ] = useState<movementProps>({ position: 0, limit: 0 })
    

    useEffect(() => {
        if (timeBgRef.current) {
            setMovement(
                prevState => ({
                    ...prevState,
                    limit: ((timeBgRef.current?.offsetWidth ?? 0) / 16) || 46
                })
            )
            console.log(timeBgRef.current.offsetWidth);
        }
    }, [timeBgRef, timeBgRef.current?.offsetWidth])

    useEffect(() => {
        setMovement(
            prevState => ({
                ...prevState,
                position: Number(timeline) * (((timeBgRef.current?.offsetWidth ?? 0) / 4.1) / 16)
            })
        )
    }, [timeline, timeBgRef])

    useEffect(() => {
        function handleWbTimelineOnScroll() {
            if (wbRef.current) {
                const wbTop = wbRef.current.getBoundingClientRect().top;
                const wbHeight = wbRef.current.offsetHeight;
                const windowHeight = window.innerHeight;
                
                const wbThreshold = -windowHeight * 0.001
                if (((wbTop + wbThreshold) < windowHeight) && ((wbTop + wbHeight) > 0)) {
                    const range = (Math.abs(wbThreshold) + windowHeight + wbHeight)
                    const VisiblePct = (((windowHeight - (wbTop + wbThreshold)) / range) * 100)
                    setTimeline((((VisiblePct / 100) * 400) / 100).toFixed(2))

                }                
            }
        }

        window.addEventListener('scroll', handleWbTimelineOnScroll);
        return () => window.addEventListener('scroll', handleWbTimelineOnScroll);
    }, [wbRef])

  return (
    <div aria-label="moving-marker" className="w-full h-full pt-[1px] sm:pt-0.5 lg:pt-1" >
        <div aria-label="moving-marker-wrapper"
            style={{ transform: `translateX(${(movement.position > movement.limit) ? movement.limit : movement.position}rem)`, transition: "transform 0.3s ease-out" }}
            className={`w-fit min-w-[4%] h-full flex flex-col items-center transition-all duration-200 `}
         >
            <div aria-label="timeline" className="bg-red-500 w-full text-white text-center text-[0.25rem] sm:text-[0.33rem] lg:text-[0.35rem] px-1.5 py-[1px] lg:py-0.5 font-inter font-bold rounded-full" >
                {timeline}
            </div>
            <div aria-label="timeline-stick" className="bg-red-500 w-[0.5px] grow" ></div>
        </div>
    </div>
  )
}
