'use client'
import { useState } from 'react';
import Link from 'next/link';
import LogoSvg from '../svg/LogoSvg';
import HamBurger from './HamBurger';
import Products from './navTabs/Products';

export default function Header() {
    const [ getMenu, setGetMenu ]  = useState<boolean>(false);
    const [ hideMenuBar, sethideMenuBar ] = useState<boolean>(true);
    const [ scrollH, setScrollH ] = useState<number>(0);


  return (
    <header className='z-60 h-25 sticky top-0 pt-11 animate-fade-in' >
        <div aria-label='header-container' className='relative flex flex-wrap w-full just-fy-center' >
            <section aria-label='header-content' className={`absolute w-full ${!hideMenuBar? 'animate-pulseY-out' : '-tralate-y-0 animate-pulseY-in'}`} >
                {/*  */}
                {/* ${(hideMenuBar && (scrollH > 200))? 'border-b border-sec rounded-2xl  shadow-xl' : 'border-transparent'} */}
                <div aria-label='content-wrapper' className={`w-[95%] md:w-[70%] lg:w-[80%] xl:w-[75%] bg-backround  flex flex-wrap m-auto justify-between lg:justify-normal items-center h-22 transition-all duration-200`} >
                    <div aria-label='logo-container' className='w-[40%] md:w-[20%] sm:ml-2 lg:ml-0 max-w-[45rem] flex justify-center' >
                        <Link href={'/'} >
                            <LogoSvg /> 
                        </Link>
                    </div>
                    <div aria-label='nav-container' className='w-[50%] hidden lg:block' >
                        <nav className='w-full h-full '>
                            <ul className='group/nav main-menu flex w-[90%] h-full gap-x-3' >
                                <div aria-label='header-bg-wrapper' className='absolute w-full left-0 top-0 -z-10' >
                                    <div className={`w-[95%] md:w-[70%] lg:w-[80%] xl:w-[75%] m-auto bg-background h-22 menu-expand ${!hideMenuBar? 'animate-pulseY-out' : 'animate-pulseY-in'} ${(hideMenuBar && (scrollH > 200))? 'border-b border-sec rounded-2xl shadow-xl' : 'border-transparent'} transition-all duration-700`} ></div>
                                </div>
                                <li className='group/product grow py-5 text-center current-tab group-hover/nav:opacity-40 hover:opacity-100 transition-all duration-300 font-semibold' >
                                    <p className='font-inter' >Product</p>
                                    <div className='absolute bg-transparent hidden group-hover/product:block w-full mt-2 pt-15 left-0' >
                                        <Products />
                                    </div>
                                </li>
                                <li className='grow py-5 text-center current-tab group-hover/nav:opacity-40 hover:opacity-100 transition-all duration-300 font-semibold' >
                                    <p className='font-inter ' >Customers</p>
                                    <div className='absolute bg-background hidden group-hover/product:block w-full h-full mt-15 left-0' >
                                    </div>
                                </li>
                                <li className='grow' >
                                    <Link href={'#templates'} className='block py-5 text-center font-inter font-semibold group-hover/nav:opacity-40 hover:opacity-100 transition-all duration-300' >
                                        Templates
                                    </Link>
                                </li>
                                <li className='grow' >
                                    <Link href={'#pricing'} className='block py-5 text-center font-inter font-semibold group-hover/nav:opacity-40 hover:opacity-100 transition-all duration-300' >
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div aria-label='login-btn' className='w-[40%] max-w-[10rem] lg lg:w-[30%] font-inter font-semibold' >
                        <Link href={'#login'} className='block min-[375px]:ml-5'>
                            Log in
                        </Link>
                    </div>
                </div>
            </section>
            <section aria-label='header-menu' className='w-full' >
                <div aria-label='menu-container' className='w-[90%] md:w-[65%] lg:w-[80%] xl:w-[75%] m-auto flex justify-end items-center h-22' >
                    <div aria-label='menu-wrapper' className='w-fit flex items-center' >
                        <div aria-label='cta-container' className='w-fit relative z-20 hidden lg:block h-full flex justify-center items-center font-bold text-lg text-white mr-5' >
                            <Link href={'#try'} className='block w-fit h-fit bg-prim px-7 py-3 rounded-full hover:animate-pulse-grow' >
                                Try for free
                            </Link>
                        </div>
                        {
                            <div aria-label='menu-btn-container' className='relative z-10 hidden lg:block' >
                                    <HamBurger {...{ dark: true, mobile: false, setHideContent: sethideMenuBar, setScrollH, hideContent: hideMenuBar }} /> 
                            </div>
                        }
                        <div aria-label='mobile-menu-btn-container' className='lg:hidden' >
                                <HamBurger {...{ toggle: getMenu, setToggle: setGetMenu, dark: false, mobile: true, setHideContent: sethideMenuBar, setScrollH, hideContent: hideMenuBar }} />
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className='absolute w-full z-0' >
                <div className={`w-[95%] md:w-[70%] lg:w-[80%] xl:w-[75%] m-auto bg-red-600 h-22 menu-expand ${!hideMenuBar? 'animate-pulseY-out' : '-tralate-y-0 animate-pulseY-in'} ${(hideMenuBar && (scrollH > 200))? 'border-b border-sec rounded-2xl  shadow-xl' : 'border-transparent'} transition-all duration-200`} ></div>
            </div> */}
        </div>
    </header>
  )
}