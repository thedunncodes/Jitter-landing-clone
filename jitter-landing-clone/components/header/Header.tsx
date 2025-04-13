'use client'
import { useState } from 'react';
import Link from 'next/link';
import LogoSvg from '../svg/LogoSvg';
import HamBurger from './HamBurger';

export default function Header() {
    const [ getMenu, setGetMenu ]  = useState<boolean>(false);

  return (
    <header className='relative z-60 h-25 ' >
        <div aria-label='header-container' className='flex flex-wrap just-fy-center' >
            <section aria-label='header-content' className='absolute border w-full' >
                <div aria-label='content-wrapper' className='w-[70%] flex flex-wrap m-auto items-center h-22' >
                    <div aria-label='logo-container' className='w-[20%]' >
                        <LogoSvg /> 
                    </div>
                    <div aria-label='nav-container' className='w-[50%] border' >
                        {/* nav section */}
                    </div>
                    <div aria-label='login-btn' className='w-[30%] font-inter font-semibold border' >
                        <button type="button">
                            Log in
                        </button>
                    </div>
                </div>
            </section>
            <section aria-label='header-menu' className='absolute border-red-600 border w-full' >
                <div aria-label='menu-container' className='w-[70%] m-auto flex justify-end items-center h-22' >
                    <div aria-label='menu-wrapper' className='w-fit flex items-center gap-x-5' >
                        <div aria-label='cta-container' className='font-bold text-lg text-white' >
                            <Link href={'#try'} className='block w-full h-full bg-prim px-7 py-3 rounded-full' >
                                Try for free
                            </Link>
                        </div>
                        <div aria-label='menu-btn-container' >
                                <HamBurger {...{ dark: false }} /> 
                        </div>
                        <div aria-label='mobile-menu-btn-container' >
                                <HamBurger {...{ toggle: getMenu, setToggle: setGetMenu, dark: true }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        {/*
            two bg housing:
                floating desktop bar 
                mobileMenu
        */}
        {/* responsive hamburger and try btn */}
    </header>
  )
}