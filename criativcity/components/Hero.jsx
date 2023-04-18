import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import Link from "next/link";
import student from "../assets/student.png";
import { useRouter } from "next/router";

const Hero = () => {
   const router = useRouter()
   return (
      <section id="home" className="flex md:flex mt-24 overflow-hidden">
         <div className=" w-full h-full bg-planets bg-contain bg-no-repeat rounded-top-[120px] z-[0]">
            <motion.div
               // variants={staggerContainer}
               // initial="hidden"
               // whileInView="show"
               // viewport={{ once: false, amount: 0.45 }}
               className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
               <div className="flex justify-center items-center z-10 mt-[10rem]   ">
                  <motion.div
                     variants={textVariant(0.65)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true, amount: 0.45 }}
                     className={` text-center lg:mt-[6rem] `}
                  >
                     {/* <div className=" absolute -z-50  inset-0 gradient-01"/> */}

                     <h1
                        className={` font-pressfont text-[1.5rem] lg:text-[4.8rem]  pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple `}
                     >
                        {" "}
                        Welcome To Our
                     </h1>
                     <h1
                        className={` font-pressfont text-[1.5rem] lg:text-[4.8rem] text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
                     >
                        {" "}
                        Criativcity
                     </h1>
                     {/* <div className=" absolute -z-50  inset-0 gradient-01"/> */}

                     <motion.div variants={textVariant2}>
                        <h1 className="text-white text-[0.7rem] lg:text-[1.8rem] font-Lato">Where we offer a comprehensive video editing</h1>
                        <h1 className="text-white text-[0.7rem] lg:text-[1.8rem] font-Lato">course for individuals of all skill levels.</h1>
                     </motion.div>
                     <div className="cta flex items-center justify-center  gap-x-8 lg:gap-x-14 mt-5 lg:mt-10 ">
                        {/* <div className="imgencont flex items-center justify-start flex-col">
                           <div className="w-full h-full aspect-3/2 object-contain flex items-center justify-center gap-2">
                              <Image src={student} alt="student"></Image>
                              <h1 className="text-[#00DB8C] text-[1.5rem] lg:text-[2rem] font-bold font-Lato">414</h1>
                           </div>
                           <h1 className="text-white font-normal font-Lato text-[0.8rem] lg:text-[1.1rem]">Students Enrolled</h1>
                        </div> */}
                        <div className="btn">
                           <button className="logibtn lg:px-4 lg:py-3 py-2 px-2 font-Lato font-bold uppercase text-white text-[0.8rem] lg:text-[1.1rem] rounded-lg"
                           onClick={() => {
                              router.push('./courses')
                           }}
                           >
                              Get Started
                           </button>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </section>
   );
};
export default Hero;
