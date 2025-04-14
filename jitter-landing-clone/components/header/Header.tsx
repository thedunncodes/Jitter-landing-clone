'use client'
import { useState } from 'react';
import Link from 'next/link';
import LogoSvg from '../svg/LogoSvg';
import HamBurger from './HamBurger';

export default function Header() {
    const [ getMenu, setGetMenu ]  = useState<boolean>(false);

  return (
    <header className='z-60 h-25 sticky top-0 pt-11' >
        <div aria-label='header-container' className='flex flex-wrap w-full just-fy-center' >
            <section aria-label='header-content' className='absolute w-full' >
                {/*  */}
                <div aria-label='content-wrapper' className='w-[75%] bg-background border-b border-sec rounded-2xl flex flex-wrap m-auto items-center h-22 shadow-xl' >
                    <div aria-label='logo-container' className='w-[20%] flex justify-center' >
                        <Link href={'/'} >
                            <LogoSvg /> 
                        </Link>
                    </div>
                    <div aria-label='nav-container' className='w-[50%]' >
                        <nav className='w-full h-full'>
                            <ul className='group flex w-[90%] h-full gap-x-3 ' >
                                <li className='grow text-center font-inter group-hover:opacity-40 hover:opacity-100 transition-all duration-300 font-semibold' >
                                    Product
                                </li>
                                <li className='grow text-center font-inter group-hover:opacity-40 hover:opacity-100 transition-all duration-300 font-semibold' >
                                    Customers
                                </li>
                                <li className='grow' >
                                    <Link href={'#templates'} className='block text-center font-inter font-semibold group-hover:opacity-40 hover:opacity-100 transition-all duration-300' >
                                        Templates
                                    </Link>
                                </li>
                                <li className='grow' >
                                    <Link href={'#pricing'} className='block text-center font-inter font-semibold group-hover:opacity-40 hover:opacity-100 transition-all duration-300' >
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div aria-label='login-btn' className='w-[30%] font-inter font-semibold' >
                        <Link href={'#login'} className='block ml-5'>
                            Log in
                        </Link>
                    </div>
                </div>
            </section>
            <section aria-label='header-menu' className='w-full' >
                <div aria-label='menu-container' className='w-[75%] m-auto flex justify-end items-center h-22' >
                    <div aria-label='menu-wrapper' className='w-fit flex items-center' >
                        <div aria-label='cta-container' className='w-fit relative z-20 hidden lg:block h-full flex justify-center items-center font-bold text-lg text-white mr-5' >
                            <Link href={'#try'} className='block w-fit h-fit bg-prim px-7 py-3 rounded-full hover:animate-pulse-grow' >
                                Try for free
                            </Link>
                        </div>
                        {
                            <div aria-label='menu-btn-container' className='relative z-10 hidden lg:block' >
                                    <HamBurger {...{ dark: true, mobile: false }} /> 
                            </div>
                        }
                        <div aria-label='mobile-menu-btn-container' className='lg:hidden' >
                                <HamBurger {...{ toggle: getMenu, setToggle: setGetMenu, dark: false, mobile: true }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </header>
  )
}