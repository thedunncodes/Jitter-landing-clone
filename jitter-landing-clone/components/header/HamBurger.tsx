import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface hamBurgerProps { 
    toggle?: boolean;
    setToggle?: Dispatch<SetStateAction<boolean>>;
    dark: boolean;
    setDark?: Dispatch<SetStateAction<boolean>>;
    mobile: boolean;
}

export default function HamBurger(props: hamBurgerProps) {
    const { toggle, setToggle, dark, mobile } = props;
    const [ hide, setHide ] = useState<boolean>(true);
    const [ lastScrollTop, setLastScrollTop ] = useState<number>(0)
    const handleMenu = () => {
        if (setToggle) setToggle(!toggle);
        if (!mobile) setHide(!hide)
    };

    useEffect(() => {
        function handleClickOutside() {
            if (!mobile) {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
                  if (scrollTop > lastScrollTop){
                      setHide(false);
                  } else {
                      setHide(true);
                  }
                  setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
            }
            
        }
    
        window.addEventListener("scroll", handleClickOutside)
      })

  return (
    <div aria-label="hamburger-container" className={`${hide ? 'w-0 -translate-x-14' : 'w-14 -translate-x-0  animate-pulse-shift' } flex items-center justify-center transition-all duration-400 delay-200 ease-out`} >
        <button aria-label="hamburger" onClick={handleMenu} className={`${hide ? 'scale-0 animate-pulse-exit' : 'w-fit py-3 px-3' } h-full ${ dark ? 'bg-prim' : `${toggle ? 'bg-prim' : 'bg-sec'}` } overflow-hidden transition-all duration-400 delay-200 hover:animate-pulse-grow flex item-center justify-center rounded-full cursor-pointer`} >
            <div aria-label="hamburger-wrapper" className={`group w-fit flex flex-col justify-between relative ${hide ? '[&>*]:w-0' : '[&>*]:w-7'} [&>*]:py-0 cursor-pointer transition-all delay-300`} >
                <div aria-label="line-1" className={`${hide ? 'h-0' : 'h-2'} flex justify-end items-center transition-all delay-200`} >
                    <span className={`block w-[90%] ${ dark ? 'bg-white' : `${toggle ? 'bg-white' : 'bg-prim'}` } h-1 rounded-md top-[0.645rem] ${toggle? "w-full absolute rotate-[-135deg]" : ""}  transition-all duration-500`} ></span>
                </div>
                <div aria-label="line-3" className={`${hide ? 'h-0' : 'h-2'} flex justify-end items-center transition-all delay-200`} >
                    <span className={`block w-[70%] ${ dark ? 'bg-white' : `${toggle ? 'bg-white' : 'bg-prim'}` } h-1 rounded-md z-10 ${toggle? "w-full -translate-x-4 opacity-0" : ""} transition-all duration-300`} ></span>
                </div>
                <div aria-label="line-3" className={`${hide ? 'h-0' : 'h-2'} flex justify-end items-center transition-all delay-200`} >
                    <span className={`block w-[45%] ${ dark ? 'bg-white' : `${toggle ? 'bg-white' : 'bg-prim'}` } h-1 rounded-md bottom-[0.645rem] ${toggle? "w-full absolute rotate-[135deg]" : ""} transition-all duration-500`} ></span>
                </div>
            </div>
        </button>
    </div>
  )
}