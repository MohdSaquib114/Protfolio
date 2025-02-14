"use client"

import Projects from "@/components/Projects";
import Hero from "@/components/Hero";


import { useEffect, useState } from "react";
import throttle from "lodash/throttle"
import About from "@/components/About";
import Image from "next/image";
import Skill from "@/components/Skill";


export default function Home() {
 const [index,setIndex] = useState(0)
 
 useEffect(() => {
  const handleScroll = throttle((e: WheelEvent) => {
    setIndex((prev) => {
      if (e.deltaY > 0) {
        return prev === 3 ? prev : prev + 1;
      } else {
        return prev === 0 ? prev : prev - 1;
      }
    });
    
  }, 2000);

  window.addEventListener("wheel", handleScroll);

  return () => {
    window.removeEventListener("wheel", handleScroll);
  };
}, []);

  return (
    <div className="flex  items-center justify-center min-h-screen  ">
      
     { index === 0 && <Hero />}
   { index === 1 &&   <About />}
   { index === 2 &&  <Skill />}
 {   index === 3 &&   <Projects />}

 <div className="absolute bottom-10 left-5 z-50">
  <a  href="https://github.com/MohdSaquib114" target="_blank" rel="noopener noreferrer">
    <Image src={"/github.png"} height={50} width={50} alt="GitHub Logo" />
  </a>

</div>
    </div>
  );
}
