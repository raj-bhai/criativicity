import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import Link from "next/link";
// import boy from "../assets/boy.png";
import gif from '../assets/gif/our-course.gif';
import gif1 from '../assets/gif/no-experience.gif';
import gif3 from '../assets/gif/our-expertise.gif'
import video from "../assets/video.png";
import illus from "../assets/illus.png";
import polygon from "../assets/polygon1.png";
import ball from "../assets/ball2.png";

const LowMidSection = () => {
   return (
      <>
         <section className="flex justify-center">
            <div className="lg:flex lg:items-start lg:justify-between lg:mx-24">
               <div className="crstext text-center lg:text-start">
                  <div className="heading">
                     <Image src={polygon} alt="polygon" className="w-14 lg:pb-10 ml-2 lg:pt-2 pt-14 animate-slow"></Image>
                     <h2
                        className={`font-pressfont text-[1.5rem] lg:text-[3.1rem]  
                  pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
                     >
                        Our Courses
                     </h2>
                  </div>
                  <div className="subheading lg:w-3/4 mt-2 ">
                     <h3 className="text-white text-[0.7rem] lg:text-[1.8rem] font-Lato">
                        Our course is designed to teach you the essential tools, techniques, psychology and systems used to be a professional video
                        editor
                     </h3>
                     <Image src={ball} alt="ball" className=" lg:-ml-12  w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] mt-4 animate-slow "></Image>
                  </div>
               </div>
               {/* <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={slideIn("right", "tween", 0.5, 1)}
                  className=" flex items-center justify-center mt-12"
               > */}
               <Image src={gif} width={1500} alt="boy" height={1500} className="aspect-4/4 w-56 h-64 mt-4 lg:w-[500px] lg:h-[500px]"></Image>
               {/* </motion.div> */}

            </div>
         </section>
         <section className="mt-[3rem]">
            <div className="lg:flex lg:items-center lg:justify-between lg:mx-24">
               {/* <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={slideIn("left", "tween", 0.5, 1)}
                  className="imageContainer  relative flex items-center justify-center"
               > */}
               <div className="relative  flex items-center justify-center" > 
                  <Image src={gif1} width={1500} height={1500} alt="video" className=" aspect-4/4 w-56 h-56 lg:h-[500px] lg:w-[500px]"></Image>

                  <Image src={polygon} alt="polygon" className=" animate-slow absolute top-4 lg:right-12 right-12 w-[3rem] h-[3rem]  lg:w-[3.9rem] lg:h-[3.9rem]"></Image>
                  <Image src={ball} alt="ball" className=" animate-slow absolute bottom-0 lg:left-12 left-20 w-[3rem] h-[3rem]  lg:w-[3.9rem] lg:h-[3.9rem]"></Image>
               </div>
               {/* </motion.div> */}

               <div className="textCont lg:text-left lg:w-1/2 text-center px-4 ">
                  <h2
                     className={`font-pressfont text-[1.5rem] lg:text-[3.1rem]  
                     pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
                  >
                     No Experience Needed
                  </h2>

                  <h3 className="text-white  text-[0.7rem] lg:text-[1.8rem] font-Lato text-start">
                     From downloading the software to earning lacs from it, our course covers everything you need to know to build a career in video
                     editing
                  </h3>
               </div>
            </div>
         </section>
         <section className="flex justify-center mt-[3rem]">
            <div className="lg:flex  lg:items-center items-center lg:justify-center lg:mx-24">
               <div className="crstext text-center lg:text-start">
                  <div className="heading">
                     <h2
                        className={`font-pressfont text-[1.5rem] lg:text-[3.1rem]  
                  pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
                     >
                        OUR EXPERTISE
                     </h2>
                  </div>
                  <div className="subheading lg:w-4/4 mt-2 ">
                     <h3 className="text-white text-[0.7rem] lg:text-[1.8rem] font-Lato">
                        With our industry experience and strategies, you will be able to understand each and every aspect on how to be the best and bring the most outcome of your creativity
                     </h3>
                  </div>
               </div>
               {/* <motion.div initial="hidden" whileInView="show" variants={slideIn("right", "tween", 0.5, 1)} className="mt-[2rem] border mx-12 lg:mx-0"> */}
               {/* </motion.div> */}

               {/* <div className=" border" > */}
                  <Image src={gif3} alt="illus" width={1500} height={1500} className=" aspect-1/4 lg:w-[500px] lg:h-[500px] lg:ml-[100px] "></Image>
               {/* </div> */}
            </div>
         </section>
      </>
   );
};
export default LowMidSection;
