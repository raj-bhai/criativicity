import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant,textVariant2 } from "@/utils/motion";
import Link from "next/link";

const Hero = () => {
   return (
      <section id="home" className="flex md:flex">
         <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="relative w-full h-screen">
            <div className="absolute w-full h-full hero-gradient rounded-top-[120px] z-[0]">
               <Image src={heroPlanet}></Image>
            </div>
            <motion.div
               variants={staggerContainer}
               initial="hidden"
               whileInView="show"
               viewport={{ once: false, amount: 0.25 }}
               className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
               <div className="flex justify-center items-center relative z-10 h-44 lg:h-screen">
                  <motion.div variants={textVariant(0.25)} className={`${styles.heroHeading} text-center`}>
                     <h1 className={`${styles.heroHeading} font-pressfont lg:text-[4.8rem] pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple `}> Welcome To Our</h1>
                     <h1 className={`${styles.heroHeading} font-pressfont lg:text-[4.8rem] text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}> Criativcity.</h1>
                     <motion.div variants={textVariant2}>
                      <h1 className="text-white">Where we offer a comprehensive video editing course for individuals of all skill levels.</h1>
                     </motion.div>
                  </motion.div>
               </div>
            </motion.div>
         </motion.div>
      </section>
   );
};
export default Hero;
