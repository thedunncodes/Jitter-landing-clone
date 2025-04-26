import { useEffect, useRef, useState } from 'react'

export default function AnimatedText() {
    const scrollText = [
        'Jitter', 'makes', 'motion', 'accessible', 'to',
        'every', 'designer,', 'enabling', 'creative', 'teams',
        'to', 'collaborate', 'on', 'and', 'deliver', 'engaging', 'animations',
        'in', 'record', 'time.'
      ];
    const containerRef = useRef<HTMLDivElement>(null);
    const [ VisiblePct, setVisiblePct ] = useState<number>(0);

    useEffect(() => {
        function animateTextOnScroll() {
            if (containerRef.current) {
                const elementTop = containerRef.current.getBoundingClientRect().top
                const elementHeight = containerRef.current.offsetHeight
                const windowHeight = window.innerHeight
                const elementOffsetTop = containerRef.current.offsetTop;
                const threshold = elementHeight * 0.5

                if (((elementTop + threshold) <= window.innerHeight)
                    && (( Math.abs(elementTop + threshold) + elementHeight) <= (elementOffsetTop + elementHeight))) {
                    const percent = ((windowHeight - (elementTop + threshold))  / elementHeight) * 100
                    if (percent <= 100 ) setVisiblePct(Math.round(percent)); else setVisiblePct(100);
                }
            }
        }

        window.addEventListener("scroll", animateTextOnScroll);
        return () => {
            window.addEventListener("scroll", animateTextOnScroll);
        }
    }, []);

    return (
        <section ref={containerRef} className="w-[80%] text-[2.25rem] h-full leading-11 font-bold relative flex gap-x-1.5 flex-wrap" >
            { 
                scrollText.map((item, index) => {
                    return (
                        <span key={index} className={`
                            ${ (VisiblePct >= (Math.floor(100 / scrollText.length) * (index + 1))) ? 'opacity-100' : 'opacity-30' }
                            transition-all duration-100
                        `} >
                            {item}
                        </span>
                    )
                })
            }
        </section>
    )
}






