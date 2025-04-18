'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import LogoSvg from '../svg/LogoSvg';
import HamBurger from './HamBurger';
import Products from './navTabs/Products';
import Customers from './navTabs/Customers';

export default function Header() {
    const [ getMenu, setGetMenu ]  = useState<boolean>(false);
    const [ hideMenuBar, sethideMenuBar ] = useState<boolean>(true);
    const [ scrollH, setScrollH ] = useState<number>(0);
    const [ width, setWidth ] = useState<number>(0);

    useEffect(() => {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileContent = document.getElementById('mobile-menu-content');
        if (getMenu) {
            mobileMenu?.classList.add('mobile-menu');
            mobileContent?.classList.add('mobile-menu-content');
            if (!hideMenuBar) sethideMenuBar(true);
        } else {
            mobileMenu?.classList.remove('mobile-menu');
            if (!hideMenuBar) sethideMenuBar(false);
            mobileContent?.classList.remove('mobile-menu-content');
        }
        // console.log(mobileMenu, mobileContent, getMenu)
    }, [getMenu, hideMenuBar])

    useEffect(() => {
        setWidth(window.innerWidth)
        const setDeviceWidth = () => setWidth(window.innerWidth);
        
        window.addEventListener('resize', setDeviceWidth);
    }, [])

    return (
    <header className='z-60 h-25 sticky top-0 pt-11 animate-fade-in' >
        <div aria-label='header-container' className='relative flex flex-wrap w-full just-fy-center' >
            <section aria-label='header-content' className={`absolute w-full ${(!hideMenuBar)? 'animate-pulseY-out' : 'animate-pulseY-in'} `} >
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
                                    <div className={`absolute bg-transparent hidden w-full h-auto mt-2 pt-15 left-0 ${hideMenuBar ? 'group-hover/product:block' : ''} `} >
                                        <Products />
                                    </div>
                                </li>
                                <li className='group/customers grow py-5 text-center current-tab group-hover/nav:opacity-40 hover:opacity-100 transition-all duration-300 font-semibold' >
                                    <p className='font-inter ' >Customers</p>
                                    <div className={`absolute bg-transparent hidden w-full h-auto mt-2 pt-15 left-0 ${hideMenuBar ? 'group-hover/customers:block' : ''} `} >
                                        <Customers />
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
                    <div aria-label='login-btn' className='w-[40%] max-w-[10rem] lg lg:w-[30%] xl:ml-[3%] font-inter font-semibold' >
                        <Link href={'#login'} className='block min-[375px]:ml-5'>
                            Log in
                        </Link>
                    </div>
                    <div aria-label='nav-container' className={`absolute lg:hidden ${getMenu ? 'w-[95%] sm:w-[70%] h-[80vh]' : ''} top-0 -z-10 bg-red-500`} >
                        <nav className='w-full h-full main-menu '>
                            <div aria-label='header-bg-wrapper' id='mobile-menu' className='fixed top-0 left-0 w-full bg-background -z-10 flex justify-center' >
                                <div id='mobile-menu-content' className={`w-[95%] md:w-[70%] lg:w-[80%] xl:w-[75%] m-auto absolute bg-background h-22 ${(!hideMenuBar)? 'animate-pulseY-outw' : 'animate-pulseY-inw'} ${((scrollH > 110) && !getMenu  )? 'shadow-xl' : `${ getMenu? 'shadow-xl' : '' }` }  border-transparent border-b border-sec rounded-2xl transition-all duration-700`} ></div>
                            </div>
                            <div aria-label='mobile-nav-content' className={`absolute ${getMenu? 'block' : 'hidden'} w-full h-full bg-transparent`} >
                                <ul className={`  w-[95%] m-auto text-[2.7rem] leading-11  h-full mt-2 pt-25 left-0`} >
                                    <li style={{ animationDelay: '350ms' }} className='grow animate-bounceY-in font-semibold' >
                                        <Link style={{ animationDelay: '350ms' }} href={'#product'} className='opacity-0 animate-static-pop-in' >
                                            Product
                                        </Link>
                                    </li>
                                    <li style={{ animationDelay: '300ms' }} className='grow animate-bounceY-in font-semibold' >
                                        <Link style={{ animationDelay: '300ms' }} href={'#customers'} className='opacity-0 animate-static-pop-in' >
                                            Customers
                                        </Link>
                                    </li>
                                    <li style={{ animationDelay: '250ms' }} className='grow animate-bounceY-in' >
                                        <Link style={{ animationDelay: '250ms' }} href={'#templates'} className='block opacity-0 animate-static-pop-in font-semibold' >
                                            Templates
                                        </Link>
                                    </li>
                                    <li style={{ animationDelay: '200ms' }} className='grow animate-bounceY-in' >
                                        <Link style={{ animationDelay: '200ms' }} href={'#pricing'} className='block opacity-0 animate-static-pop-in font-semibold' >
                                            Pricing
                                        </Link>
                                    </li>
                                </ul>
                                <div aria-label="btn-container" className="w-full -ranslate-y-90 flex justify-center" >
                                    <Link style={{ animationDelay: '300ms' }} href={'#whatsnew'} className="w-[9rem] py-2.5 opacity-0 translate-y-2 text-base font-bold animate-bounceY-in-btn text-center bg-prim text-white rounded-full transition-all duration-300 ease-in-out" >
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </nav>
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
                            (width > 1024) && (
                                <div aria-label='menu-btn-container' className='relative z-10 hidden lg:block' >
                                    <HamBurger {...{ toggle: false, dark: true, mobile: false, setHideContent: sethideMenuBar, setScrollH, hideContent: hideMenuBar }} /> 
                                </div>
                            )
                        }
                        {
                            (width < 1024) && (
                                <div aria-label='mobile-menu-btn-container' className='lg:hidden' >
                                        <HamBurger {...{ toggle: getMenu, setToggle: setGetMenu, dark: false, mobile: true, setHideContent: sethideMenuBar, setScrollH, hideContent: hideMenuBar }} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    </header>
  )
}