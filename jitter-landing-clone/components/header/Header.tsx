import React from 'react'
import LogoSvg from '../svg/LogoSvg'

export default function Header() {
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
                <div aria-label='menu-wrapper' className='w-[70%] m-auto flex justify-end items-center h-22' >
                    btns
                </div>
            </section>
        </div>
    </header>
  )
}