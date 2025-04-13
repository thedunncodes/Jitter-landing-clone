import { Dispatch, SetStateAction } from "react";

interface hamBurgerProps { 
    toggle?: boolean;
    setToggle?: Dispatch<SetStateAction<boolean>>;
    dark: boolean;
    setDark?: Dispatch<SetStateAction<boolean>>;
}

export default function HamBurger(props: hamBurgerProps) {
    const { toggle, setToggle, dark } = props;
    const handleMenu = () => setToggle ? setToggle(!toggle) : true;

  return (
    <button aria-label="hamburger" onClick={handleMenu} className={`w-fit h-full ${ dark? 'bg-sec' : 'bg-prim' } flex item-center justify-center py-3 px-3 rounded-full cursor-pointer`} >
        <div aria-label="hamburger-wrapper" className="group w-fit m-aut0 relative [&>*]:w-7 [&>*]:py-0 cursor-pointer" >
            <div aria-label="line-1" className=" h-2 flex justify-end items-center mb-[1px]" >
                <span className={`block w-[90%] ${ dark? 'bg-prim' : 'bg-white' } h-1 rounded-md top-[0.7rem] ${toggle? "w-full absolute rotate-[-135deg]" : ""}  transition-all duration-500`} ></span>
            </div>
            <div aria-label="line-3" className=" h-2 flex justify-end items-center mb-[1px]" >
                <span className={`block w-[70%] ${ dark? 'bg-prim' : 'bg-white' } h-1 rounded-md z-10 ${toggle? "w-full -translate-x-4 opacity-0" : ""} transition-all duration-300`} ></span>
            </div>
            <div aria-label="line-3" className=" h-2 flex justify-end items-center " >
                <span className={`block w-[45%] ${ dark? 'bg-prim' : 'bg-white' } h-1 rounded-md bottom-[0.7rem] ${toggle? "w-full absolute rotate-[135deg]" : ""} transition-all duration-500`} ></span>
            </div>
        </div>
    </button>
  )
}