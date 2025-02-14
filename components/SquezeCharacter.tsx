import { motion
  } from "framer-motion";

const SquezeCharacter = ({char}:{char:string}) => 
    <motion.div
      className="hover:text-purple-500 cursor-pointer "
      whileHover={{ scaleY: 0.8,scaleX:1.2}} 
      transition={{ type: "spring", stiffness: 500, damping:20 }} 
      >
         {char}
     </motion.div>
export default SquezeCharacter