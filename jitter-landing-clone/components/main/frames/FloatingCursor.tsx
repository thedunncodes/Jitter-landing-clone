import { motion } from 'motion/react';
import React, { useEffect, useRef } from 'react'

interface FloatingCursorProps {
    name: string;
    bgColor: 'pink' | 'purple' | 'sky-blue';
}

export default function FloatingCursor(props: FloatingCursorProps) {
    const {name, bgColor} = props; 
    const bg = useRef<string>('bg-[#ff58e0]');
    const color = useRef<string>('#ff58e0')

    useEffect(() => {
        if (bgColor === 'pink') {bg.current = 'bg-[#ff58e0]'; color.current = '#ff58e0'; };
        if (bgColor === 'purple') {bg.current = 'bg-[#7a40ed]'; color.current = '#7a40ed'; };
        if (bgColor === 'sky-blue') {bg.current = 'bg-[#34abfc]'; color.current = '#34abfc'; };
    }, [bgColor])
  return (
    <div aria-label='floating-cursor-container' className='absolute z-10 left-0 w-fit animate-float' >
        <div aria-label='floating-cursor' className='flex w-[3px] max-w-5' >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.5 21.5" data-sentry-element="svg" data-sentry-source-file="Cursor.tsx"><path fill="white" d="M3.5,21.5,0,0,18.5,11.5,8.75,13.13Z" data-sentry-element="path" data-sentry-source-file="Cursor.tsx"></path><polygon fill={color.current} points="1.34 2.01 4.06 18.72 8.14 12.21 15.72 10.95 1.34 2.01" data-sentry-element="polygon" data-sentry-source-file="Cursor.tsx"></polygon></svg>
        </div>
        <div aria-label='floating-cursor-name' className={`w-fit text-[2px] ${bg.current} h-fit flex items-end px-[1px]  ml-[50%] font-inter text-white font-semibold`} >
            <motion.div style={{y: 0.3}} >
                {name}
            </motion.div>
        </div>
    </div>
  )
}