import {  useEffect } from "react";
import SquezeCharacter from "./SquezeCharacter"
import { motion,useAnimation  } from "framer-motion";
import { TbBrandRedux } from "react-icons/tb";
import { DiJsBadge } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";

import { SiTypescript,SiNextdotjs ,SiPreact,SiExpress,SiApachekafka ,SiPrisma,  SiTailwindcss  } from "react-icons/si";
const phrase = ["Skills", "&","Experience"]
const skills = [
   {name: "React.js",icon:<SiPreact />},
   {name: "Next.js",icon:<SiNextdotjs />},
   {name: "Next.js",icon:<SiNextdotjs />},
   {name: "TypeScript",icon:<SiTypescript />},
   {name: "JavaScript",icon:<DiJsBadge />},
   {name: "Express.js",icon:<SiExpress />},
   {name: "MongoDB.js",icon:<BiLogoMongodb />},
   {name: "PostgreSQL",icon:<BiLogoPostgresql />},
   {name: "Redis",icon:<DiRedis />},
   {name: "Docker",icon:<FaDocker />},
   {name: "Git",icon:<FaGitAlt />},
   {name: "Tailwind CSS",icon:<SiTailwindcss  />},
   {name: "Redux",icon:<TbBrandRedux />},
   {name: "Prisma",icon:<SiPrisma  />},
   {name: "Kafka",icon:<SiApachekafka  />},
 ,
  ]

export default function Skill() {
    const controls = useAnimation();
    useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
  }, [
     controls]);
  return (
    <motion.div
     className="text-center space-y-10"
     initial={{ opacity: 0, y: 50 }}
     animate={controls }
     >
      <div >
        <p className="text-gray-400 text-xl font-medium">
         A problem is a chance for you to do your best.  
        </p>
        <div className="flex gap-3 md:text-[3.5rem] leading-none font-extrabold justify-center mb-10 ">
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
        <div className=" text-lg">
            <p>The main area of expertise is Full stack development (client & server side of the web).</p>
            <p >HTML, CSS, JS, building small and medium web applications with  React, features, and coding interactive layouts. I have also full-stack developer experience.</p>
            <p>Visit my <a className="text-purple-500 underline" rel="noopener" target="_blank" href="https://www.linkedin.com/in/mohd-saquib-mansoori-560503274?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7X%2FFC7BOTAWslcE%2FOCz3mA%3D%3D">Linkedin</a> for more details.</p>

        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill?.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 py-5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col items-center gap-3"
            >
              <div>
                {skill?.icon}
                </div>
              <p className="text-center">{skill?.name}</p>
            </motion.div>
          ))}
        </div>
    </motion.div>
  )
}
