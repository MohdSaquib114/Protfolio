

import { motion,useAnimation  } from "framer-motion";

import Image from "next/image";
import DottedBackground from "./DottedBackground";
import { useEffect } from "react";
import SquezeCharacter from "./SquezeCharacter";



const tag = ["Software","Developer"]




export default function Hero() {
    const controls = useAnimation();
    useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
  }, [
     controls]);
  return (
    <div className="grid grid-cols-2    items-center pr-40 pl-5 z-50  ">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls } >
            <div className="md:text-[4rem] leading-none font-extrabold      ">
                {
                    tag?.map((word:string)=><div className="flex" key={word}>{word.split("").map((char:string,id:number)=><SquezeCharacter key={id+char} char={char} />)}</div>)
                }
             
            </div>
            <span className="text-lg font-semibold">Under Construction 🚧</span>
            <p className="text-lg  pt-10 pr-10 font-medium ">Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
            
          
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={controls }
        className="  flex justify-center ">
           <div className="absolute  right-80 top-52 rouned ">
            <motion.img
                src="/code.png" 
                alt="Floating Icon"
                className=" w-[250px]   "
                animate={{
                    y: [0, -10, 0], // Moves up and down
                }}
                transition={{
                    duration: 2, // Smooth transition
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                />
            </div>
            <Image src="/computer.png" width={900} height={600} alt="computer-image" />
        </motion.div>
        <DottedBackground/>
        {/* <Image className="absolute bottom-5 left-0 -z-50 backdrop-blur-md blur-sm " src={"/line.svg" } width={200} height={100} alt="logo" /> */}
            </div>
  )
}
