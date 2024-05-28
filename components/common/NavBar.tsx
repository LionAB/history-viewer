"use client"
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { X } from 'lucide-react';
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import appIcon from '../../public/images/lhistoire(1).png';
import appIcon2 from '../../public/images/lhistoire.png';
import { useRouter } from "next/navigation";
export default function NavBar() {
  const navLinks = [
    { name: "A propos", href: "/about" },
  ]
  const router = useRouter();


  const [isOpen, setisOpen]= useState(false);
  
  return (
<div className=" shadow-md top-0 py-1 lg:py-2 w-full sticky   z-50 bg-background/95 backdrop-blur">
    <nav className=" w-full z-100 sticky top-0 left-0 right-0   mx-auto px-5 py-2.5 lg:border-none lg:py-4 ">
        <div className="md:flex md:px-10 items-center justify-between">
           
                <div className="flex items-center space-x-2 gap-2" ><a className="contents" href="/">
                    <h2 className="contents text-black dark:text-white font-bold text-2xl"> <Image width={50} height={50} src={appIcon} alt="appIcon" placeholder="blur"/> HistoriMap</h2></a>
                </div>
                <div onClick={()=> setisOpen(!isOpen)} className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
              {isOpen ?  <X/>:<button className="focus:outline-none text-slate-200 dark:text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>}
               
            </div>
            <div className="lg:block">
               {/*  <ul className="md:flex space-x-10 text-base font-bold text-black/60 dark:text-white md:pl-0 "> */}
                <ul className={`sm:max-md:drop-shadow-md md:flex  md:items-center  text-black/60   dark:text-white md:pb-0 pb-12 absolute md:static  left-0 w-full md:w-auto md:pl-0 pl-9  transition-all duration-500 ease-in ${isOpen ? 'pr-[20px] top-12 bg-background/95 md:bg-transparent sm:backdrop-blur' : ' top-[-500px] bg-transparent'} ` }>
                    {navLinks.map((link, index) => (
                        <li key={index}
                            className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear my-7 md:my-0 md:ml-8">
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}

                <div className="flex md:ml-3 items-center space-x-2 gap-2">
{/*                   <button className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">Contact</button>
 */}                <button onClick={()=>router.push("/contact")}> <AnimatedGradientText >
        ✉  <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Me Contacter
        </span>
      </AnimatedGradientText>
      </button> 
                  <ModeToggle/>
                </div>
                
           
                </ul>
                {/* <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
                    <li
                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                        <a href="#">Home</a>
                    </li>
                    <li
                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                        <a href="#">Our services</a>
                    </li>
                    <li
                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                        <a href="#">About</a>
                    </li>
                    <li
                        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                        <a href="#">Contact</a>
                    </li>
                </ul> */}
            
            </div>
          
        </div>
    </nav>
</div>
)}