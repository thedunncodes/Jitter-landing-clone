import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ctaHoverProps {
  scrollAnimation: boolean;
  textExt?: boolean;
}

export default function CtaHover(props: ctaHoverProps) {
  const { scrollAnimation, textExt } = props;
  return (
    <div aria-label='cta-hover-container' className='absolute z-8 top-0 w-full h-full' >
        <div aria-label='cta-hover-wrapper' className='group w-full relative h-full flex justify-end' >
            <Link
                aria-label='arrow-up'
                href={'#video.file'}
                className={`
                      ${scrollAnimation ? 'mr-0.5 mt-0.5 w-2 h-2 hover:animate-hs-incr' : 'mr-3.5 mt-3.5 w-10 hover:w-[9.5rem] h-10'} scale-0 group-hover:scale-100 
                      bg-sec group-hover:animate-bobb overflow-hidden rounded-full relative
                      flex items-center justify-end transition-all ease-in-out duration-200`}
            >
              <div
                  aria-label='cta-text'
                  className={`${scrollAnimation ? `w-7 left-[2.5px] ${textExt ? 'translate-y-[1px]' : 'translate-y-[0.4px]'}` : 'w-[6.5rem] left-4 mr-1'} flex items-center  h-full absolute`}
              >
                <p className={`${scrollAnimation ? 'text-[2.7px]' : ''} font-semibold`} >
                  Open in Jitter
                </p>
              </div>
              <div
                  className={`${scrollAnimation ? 'pl-0.5 py-0.5' : 'pl-1 pr-2 py-2'} w-fit h-full bg-sec relative z-7 flex items-center`}
              >
                <ArrowUpRight strokeWidth={3} className={` ${scrollAnimation ? 'w-1 h-1' : 'w-4.5 h-4.5 '} -translate-x-0.5 `} />
              </div>
            </Link>
        </div>
    </div>
  )
}