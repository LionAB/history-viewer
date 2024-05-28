"use client";
import { TypewriterEffect } from "../../typewriter-effect";
import Image from "next/image";
import appIcon from '../../../public/images/lhistoire(1).png';
import appIcon2 from '../../../public/images/lhistoire.png';
export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Découvrez",
    },
    {
      text: "l'Histoire",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "sous",
    },
    {
      text: "un",
    },
    {
      text: "nouvel",
    },
    
    {
      text: "Angle.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px]  after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[600px]  before:lg:h-[360px] ">
      <h2 className="text-6xl md:text-5xl font-bold text-black dark:text-white mb-4 contents"><Image className="mb-10" src={appIcon} width={150} alt="appIcon"/> HistoriMap</h2>
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-2">
       Une nouvelle façon de voir les choses
      </p>
      <TypewriterEffect words={words} />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
}