import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

export default function Products() {
  return (
    <div aria-label='product-container' className='w-full h-auto' >
        <div aria-label='product-wrapper' className='lg:w-[80%] xl:w-[72%] m-auto h-auto flex flex-wrap' >
            <div aria-label="cards-container" className="w-[68%] xl-lg:w-[72%]" >
                <div aria-label="cards-wrapper" className="flex flex-wrap gap-x-3 px-6 w-full h-full justify-center" >
                    <div className="flex flex-col xl-lg:flex-row w-[48%] xl-lg:w-[66%] gap-y-3 xl-lg:gap-x-3" >
                        <div aria-label="figma" className="w-full h-44 xl-lg:h-[100%] hover:animate-bobb" >
                            <Link href={'#figma'} style={{ animationDelay: '300ms' }} className="group/figma opacity-0 flex flex-wrap items-end  w-full h-full rounded-3xl bg-sec-blue animate-pop-in hover:scale-97 transition-all duration-300 ease-in-out" >
                                <div className="hidden xl-lg:flex justify-center items-center w-full h-auto" >
                                    <div className="w-full flex justify-center h-20 pt-10 items-center" >
                                        <div className="bg-white px-8 py-8 w-fit" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 56" className="fill-current w-10" aria-hidden="true"><g clipPath="url(#a)"><path fill="#0ACF83" d="M9.2601 55.1103c4.883 0 8.846-4.0654 8.846-9.0747v-9.0747h-8.846c-4.88301 0-8.846038 4.0655-8.846038 9.0747 0 5.0093 3.963028 9.0747 8.846038 9.0747Z"></path><path fill="#A259FF" d="M.414062 27.8872c0-5.0092 3.963028-9.0747 8.846038-9.0747h8.846v18.1494h-8.846c-4.88301 0-8.846038-4.0655-8.846038-9.0747Z"></path><path fill="#F24E1E" d="M.414062 9.73874C.414062 4.72952 4.37709.664062 9.2601.664062h8.846V18.8134h-8.846c-4.88301 0-8.846038-4.0654-8.846038-9.07466Z"></path><path fill="#FF7262" d="M18.1055.664062h8.846c4.883 0 8.8461 4.065458 8.8461 9.074678 0 5.00926-3.9631 9.07466-8.8461 9.07466h-8.846V.664062Z"></path><path fill="#1ABCFE" d="M35.7976 27.8872c0 5.0092-3.9631 9.0747-8.8461 9.0747s-8.846-4.0655-8.846-9.0747 3.963-9.0747 8.846-9.0747 8.8461 4.0655 8.8461 9.0747Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M.410156.664062h35.3912v54.4481H.410156z"></path></clipPath></defs></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-wrap gap-y-3 px-5 pb-8 text-white" >
                                    <p className="w-full text-[1.4rem] xl-lg:text-2xl leading-5 xl-lg:leading-5.5 text-left font-bold" >
                                        Import
                                        <span className="block text-left" >
                                            from Figma
                                        </span>
                                    </p>
                                    <p className="w-full text-left text-sm font-semibold font-inter " >
                                        Learn more&nbsp;
                                        <ArrowRight className="inline w-4 group-hover/figma:translate-x-1.5 transition-all duration-300 ease-in" />
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div aria-label="animate" className="w-full h-44 xl-lg:h-[100%]  hover:animate-bobb" >
                            <Link href={'#animate'} style={{ animationDelay: '600ms' }} className="group/animate opacity-0 flex flex-wrap items-end animate-pop-in w-full h-full rounded-3xl bg-prim-alt hover:scale-97 transition-all duration-300 ease-in-out" >
                                <div className="hidden xl-lg:flex justify-center items-center pt-10 w-full h-auto" >
                                    <figure className="w-full px-6" >
                                        <Image
                                            src={'/move.svg'}
                                            width={900}
                                            height={900}
                                            alt="move svg"
                                        />
                                    </figure>
                                </div>
                                <div className="w-full flex flex-wrap gap-y-3 px-5 pb-8 text-white" >
                                    <p className="w-7/10 xl-lg:w-full text-[1.4rem] xl-lg:text-2xl leading-5 xl-lg:leading-5.5 text-left font-bold" >
                                        A brand-new way to design and animate
                                    </p>
                                    <p className="w-full text-left text-sm font-semibold font-inter " >
                                        Learn more&nbsp;
                                        <ArrowRight className="inline w-4 group-hover/animate:translate-x-1.5 transition-all duration-300 ease-in" />
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-[48%] xl-lg:w-[30%] gap-y-3" >
                        <div aria-label="collab" className="w-full h-44 hover:animate-bobb" >
                            <Link href={'#collab'} style={{ animationDelay: '450ms' }} className="group/collab opacity-0 flex flex-wrap items-end animate-pop-in w-full h-full rounded-3xl bg-sec transition-all duration-1000 hover:scale-97 transition-all duration-300 ease-in-out" >
                                <div className="w-full flex flex-wrap gap-y-3 px-5 pb-8 text-prim" >
                                    <p className="w-full text-[1.4rem] xl-lg:text-2xl leading-5 xl-lg:leading-5.5 text-left font-bold" >
                                        Unlock
                                        <span className="block text-left" >
                                            collaboration
                                        </span>
                                    </p>
                                    <p className="w-full text-left text-sm font-semibold font-inter " >
                                        Learn more&nbsp;
                                        <ArrowRight className="inline w-4 group-hover/collab:translate-x-1.5 transition-all duration-300 ease-in text-prim-alt" />
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div aria-label="export" className="w-full h-44 hover:animate-bobb" >
                            <Link href={'#export'} style={{ animationDelay: '750ms' }} className="group/export opacity-0 flex flex-wrap items-end animate-pop-in w-full h-full rounded-3xl bg-sec transition-all duration-1000 hover:scale-97 transition-all duration-300 ease-in-out" >
                                <div className="w-full flex flex-wrap gap-y-3 px-5 pb-8 text-prim" >
                                    <p className="w-full text-[1.4rem] xl-lg:text-2xl leading-5 xl-lg:leading-5.5 text-left font-bold" >
                                        Export to 4K
                                        <span className="block text-left" >
                                            GIF, Lottie
                                        </span>
                                    </p>
                                    <p className="w-full text-left text-sm font-semibold font-inter " >
                                        Learn more&nbsp;
                                        <ArrowRight className="inline w-4 group-hover/export:translate-x-1.5 transition-all duration-300 ease-in text-sec-blue" />
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-label="content-container" className="w-[32%] xl-lg:w-[28%]" >
                <div aria-label="container-wrapper" className="w-4/5 m-auto">
                    <p aria-label="header" style={{ animationDelay: '350ms' }} className="text-xl text-left opacity-0 font-inter font-semibold mb-4 animate-static-pop-in" >
                        What&apos;s new
                    </p>
                    <ul className="font-inter text-left mb-5 flex flex-wrap gap-y-2 [&>*]:w-full" >
                        <li className="hover:opacity-40" >
                            <Link href={"#web"} style={{ animationDelay: '470ms' }} className="opacity-0 animate-static-pop-in" >
                                New website
                            </Link>
                        </li>
                        <li className="hover:opacity-40" >
                            <Link href={"#css"} style={{ animationDelay: '590ms' }} className="opacity-0 animate-static-pop-in" >
                                CSS Easing export
                            </Link>
                        </li>
                        <li className="hover:opacity-40" >
                            <Link href={"#plugin"} style={{ animationDelay: '710ms' }} className="opacity-0 animate-static-pop-in" >
                                All-new Figma plugin
                            </Link>
                        </li>
                    </ul>
                    <div aria-label="btn-container" className="w-full flex hover:animate-pulse-grow hover:scale-103 transition-all duration-300 ease-in-out" >
                        <Link href={'#whatsnew'} style={{ animationDelay: '800ms' }} className="w-[14rem] text-center py-2.5 opacity-0 text-lg bg-sec rounded-full animate-bobb animate-btn-bob" >
                            See whats&apos;s new&nbsp;
                            <ArrowRight className="inline w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}