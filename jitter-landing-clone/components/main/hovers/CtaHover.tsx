import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface ctaHoverProps {
  scrollAnimation: boolean;
}

export default function CtaHover(props: ctaHoverProps) {
  const { scrollAnimation } = props;
  return (
    <div aria-label='cta-hover-container' className='absolute z-5 top-0 w-full h-full' >
        <div aria-label='cta-hover-wrapper' className='group w-full h-full flex justify-end' >
            <Link
                aria-label='arrow-up'
                href={'#video.file'}
                className={`
                      mr-3.5 mt-3.5 w-10 hover:w-[9.5rem] scale-0 group-hover:scale-100 
                      h-10 bg-sec group-hover:animate-bobb overflow-hidden rounded-full relative
                      flex items-center justify-end transition-all duration-200`}
            >
              <div
                  aria-label='cta-text'
                  className={`w-[6.5rem] transition-all duration-100  left-4 mr-1 absolute z-4`}
              >
                <p className='text- font-semibold' >
                  Open in Jitter
                </p>
              </div>
              <div className='w-fit h-full bg-sec flex items-center relative pl-1 pr-2 py-2 z-5' >
                <ArrowUpRight className='w-4.5 h-4.5 -translate-x-0.5 ' />
              </div>
            </Link>
        </div>
    </div>
  )
}