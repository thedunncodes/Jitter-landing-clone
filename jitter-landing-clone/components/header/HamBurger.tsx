import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface hamBurgerProps { 
    toggle?: boolean;
    setToggle?: Dispatch<SetStateAction<boolean>>;
    dark: boolean;
    setDark?: Dispatch<SetStateAction<boolean>>;
    mobile: boolean;
    hideContent: boolean;
    setHideContent: Dispatch<SetStateAction<boolean>>;
    setScrollH: Dispatch<SetStateAction<number>>;
}

export default function HamBurger(props: hamBurgerProps) {
    const { toggle, setToggle, dark, mobile, setHideContent, setScrollH , hideContent} = props;
    const [ hide, setHide ] = useState<boolean>(true);
    const [ lastScrollTop, setLastScrollTop ] = useState<number>(0)
    const handleMenu = () => {
        if (setToggle) setToggle(!toggle);
        if (!mobile) setHide(!hide);
        if (!mobile) setHideContent(true);
    };

    useEffect(() => {
        function handleMenuScrollOutside() {
            if (!mobile) {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
                  if (scrollTop > lastScrollTop){
                      setHide(false);
                      setHideContent(false);
                      if (scrollTop > 110 ) setScrollH(scrollTop)
                  } else {
                      setHide(true);
                      setHideContent(true);
                  }
                  setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
            }
            
        }
    
        window.addEventListener("scroll", handleMenuScrollOutside)
      });

    useEffect(() => {
        if (lastScrollTop < 200) setScrollH(lastScrollTop)
    }, [lastScrollTop, setScrollH])
    console.log(hide)
  return (
    <div aria-label="hamburger-container" className={`${(hide && !mobile ) ? 'w-0 -translate-x-14' : 'w-14 -translate-x-0  animate-pulse-shift' } flex items-center justify-center transition-all duration-400 delay-200 ease-out`} >
        <button aria-label="hamburger" onClick={handleMenu} className={`${(hide && !mobile) ? 'scale-0 animate-pulse-exit' : 'w-fit py-3 px-2.5 md:py-3 md:px-3 animate-pulse-in' } h-full ${ dark ? 'bg-prim' : `${(hideContent && !toggle) ? 'bg-white' : (toggle ? 'bg-prim' : 'bg-sec')}` } overflow-hidden transition-all duration-400 delay-200 hover:animate-pulse-grow flex item-center justify-center rounded-full cursor-pointer`} >
            <div aria-label="hamburger-wrapper" className={`group w-fit flex flex-col justify-between relative ${(hide && !mobile) ? '[&>*]:w-0' : '[&>*]:w-7'} [&>*]:py-0 cursor-pointer transition-all delay-300`} >
                <div aria-label="line-1" className={`${(hide && !mobile) ? 'h-0' : 'h-2'} flex justify-end items-center transition-all delay-200`} >
                    <span className={`block w-[90%] ${ dark ? 'bg-white' : `${toggle ? 'bg-white' : 'bg-prim'}` } h-1 rounded-md top-[0.645rem] ${toggle? "w-full absolute rotate-[-135deg]" : ""}  transition-all duration-500`} ></span>
                </div>
                <div aria-label="line-3" className={`${(hide && !mobile) ? 'h-0' : 'h-2'} flex justify-end items-center transition-all delay-200`} >
                    <span className={`block w-[70%] ${ dark ? 'bg-white' : `${toggle ? 'bg-white' : 'bg-prim'}` } h-1 rounded-md z-10 ${toggle? "w-full -translate-x-4 opacity-0" : ""} transition-all duration-300`} ></span>
                </div>
                <div aria-label="line-3" className={`${(hide && !mobile) ? 'h-0' : 'h-2'} flex justify-end items-center transition-all delay-200`} >
                    <span className={`block w-[45%] ${ dark ? 'bg-white' : `${toggle ? 'bg-white' : 'bg-prim'}` } h-1 rounded-md bottom-[0.645rem] ${toggle? "w-full absolute rotate-[135deg]" : ""} transition-all duration-500`} ></span>
                </div>
            </div>
        </button>
    </div>
  )
}