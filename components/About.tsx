"use client"
import { useEffect } from "react";
import SquezeCharacter from "./SquezeCharacter"
import { motion, useAnimation  } from "framer-motion";



const phrase = ["Hi", "I'm","Saquib"]

export default function About() {
    const controls = useAnimation();
    useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
  }, [
     controls]);



  return (
    <motion.div
         initial={{ opacity: 0, y: 50 }}
        animate={controls }
         className="grid grid-cols-2 items-center p-10" >
               <div  className="top-0 left-0 right-0 bottom-0 -z-30 absolute bg-slate-7002/10 backdrop-blur-sm ">   </div>
               <img className="absolute  -z-40 " src="/bg1.svg"  alt="bg-image" />
                <motion.img
                        src="/thorfinn.png" 
                        alt="Floating Icon"
                        className=" w-[1000px]  -z-40   absolute left-1/3 "
                        animate={{
                            y: [0, -10, 0], 
                        }}
                        transition={{
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        />
                <div>
                        <div className="flex gap-5 md:text-[5rem] leading-none font-extrabold ">
                        {
                            phrase?.map((word:string)=>
                                  <div 
                                     className="flex" 
                                     key={word}>{
                                        word.split("").map((char:string,id:number)=>
                                        <SquezeCharacter key={id+char} char={char} 
                                        />)}
                                  </div>)
                            }
                        </div>
                        <p className="text-gray-500 text-xl mt-1 pl-1 mr-2 font-semibold  ">
                            Frontend Developer / Fullstack Developer / Software Developer
                        </p>
                </div>
                <div className="p-20 space-y-3 font-normal text-slate-100">
                    <p>I am a dedicated Full Stack Developer with a focus on creating dynamic 
                        and responsive applications. My experience includes developing 
                        interactive web solutions using modern technologies like React, Next.js, 
                        and Tailwind CSS.
                    </p>
                    <p> I am passionate about enhancing user experience 
                    and collaborating with teams to deliver high-quality products.
                    </p>
                    <p className="ml-4" > My 
                        academic background in Computer Science, along with hands-on 
                        projects, equips me with the skills to succeed in a fast-paced 
                        environment.
                    </p>
                </div>
        

    
    
    </motion.div>
  )
}
