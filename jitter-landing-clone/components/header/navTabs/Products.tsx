import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function Products() {
  return (
    <div aria-label='product-container' className='w-full h-auto' >
        <div aria-label='product-wrapper' className='lg:w-[80%] xl:w-[75%] m-auto h-auto flex flex-wrap' >
            <div aria-label="cards-container" className="w-[65%]" >
                <div aria-label="cards-wrapper" className="flex flex-wrap gap-x-3 px-6 w-full h-full justify-center" >
                    <div className="flex flex-col 2xl:flex-row w-[48%] gap-y-3 2xl:gap-x-3" >
                        <div aria-label="figma" className="w-full h-44 2xl:h-[100%] hover:animate-bobb" >
                            <Link href={'#figma'} style={{ animationDelay: '300ms' }} className="group/figma opacity-0 flex flex-wrap items-end  w-full h-full rounded-3xl bg-sec-blue animate-pop-in hover:scale-97 transition-all duration-300 ease-in-out" >
                                <div className="w-full flex flex-wrap gap-y-3 px-5 pb-8 text-white" >
                                    <p className="w-full text-[1.4rem] leading-5 text-left font-bold" >
                                        Import
                                        <span className="block text-left" >
                                            from Figma
                                        </span>
                                    </p>
                                    <p className="w-full text-left text-sm font-inter " >
                                        Learn more&nbsp;
                                        <ArrowRight className="inline w-4 group-hover/figma:translate-x-1.5 transition-all duration-300 ease-in" />
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div aria-label="animate" className="w-full h-44 2xl:h-[100%]  hover:animate-bobb" >
                            <Link href={'#animate'} style={{ animationDelay: '600ms' }} className="group/animate opacity-0 flex flex-wrap items-end animate-pop-in w-full h-full rounded-3xl bg-prim-alt hover:scale-97 transition-all duration-300 ease-in-out" >
                                <div className="w-full flex flex-wrap gap-y-3 px-5 pb-8 text-white" >
                                    <p className="w-7/10 text-[1.4rem] leading-5 text-left font-bold" >
                                        A brand-new way to design and animate
                                    </p>
                                    <p className="w-full text-left text-sm font-inter " >
                                        Learn more&nbsp;
                                        <ArrowRight className="inline w-4 group-hover/animate:translate-x-1.5 transition-all duration-300 ease-in" />
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col w-[48%] gap-y-3" >
                        <div aria-label="collab" className="w-full h-44 hover:animate-bobb" >
                            <Link href={'#collab'} style={{ animationDelay: '450ms' }} className="group/collab opacity-0 flex flex-wrap items-end animate-pop-in w-full h-full rounded-3xl bg-sec transition-all duration-1000 hover:scale-97 transition-all duration-300 ease-in-out" >
                                <div className="w-full flex flex-wrap gap-y-3 px-5 pb-8 text-prim" >
                                    <p className="w-full text-[1.4rem] leading-5 text-left font-bold" >
                                        Unlock
                                        <span className="block text-left" >
                                            collaboration
                                        </span>
                                    </p>
                                    <p className="w-full text-left text-sm font-inter " >
                                        Learn more&nbsp;
                                        <ArrowRight className="inline w-4 group-hover/collab:translate-x-1.5 transition-all duration-300 ease-in text-prim-alt" />
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div aria-label="export" className="w-full h-44 hover:animate-bobb" >
                            <Link href={'#export'} style={{ animationDelay: '750ms' }} className="group/export opacity-0 flex flex-wrap items-end animate-pop-in w-full h-full rounded-3xl bg-sec transition-all duration-1000 hover:scale-97 transition-all duration-300 ease-in-out" >
                                <div className="w-full flex flex-wrap gap-y-3 px-5 pb-8 text-prim" >
                                    <p className="w-full text-[1.4rem] leading-5 text-left font-bold" >
                                        Export to 4K
                                        <span className="block text-left" >
                                            GIF, Lottie
                                        </span>
                                    </p>
                                    <p className="w-full text-left text-sm font-inter " >
                                        Learn more&nbsp;
                                        <ArrowRight className="inline w-4 group-hover/export:translate-x-1.5 transition-all duration-300 ease-in text-sec-blue" />
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-label="content-container" className="w-[35%]" >
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
                        <Link href={'#whatsnew'} style={{ animationDelay: '800ms' }} className="w-[14rem] py-2.5 opacity-0 text-lg bg-sec rounded-full animate-bobb animate-btn-bob" >
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