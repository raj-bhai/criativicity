import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import twitter from "../assets/twitter.png";
import ellipse from '../assets/ellipse.png'

const FollowUs = () => {
   return (
      <section className=" navbarbg flex flex-col items-center justify-center pt-8 lg:pt-32 pb-24 ">
         <div className="instext mb-4">
            <h2
               className={`font-pressfont text-[1.5rem] lg:text-[3.0rem]  
                  pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
            >
               FOLLOW US ON
            </h2>
         </div>
         <div className="boxContain space-x-2 lg:space-x-7 flew-wrap md:flex-nowrap flex items-center justify-between px-3 py-3 border-2 border-fuchsia-50 rounded-lg mb-4">
            <div className=" w-full flex text-center flex-col items-center justify-center border-2 px-3 py-3 rounded-lg border-fuchsia-50">
               <Image src={twitter}></Image>
               <h4 className="text-white text-[0.7rem] lg:text-[1.1rem]">Raj Kiran</h4>
            </div>
            <div className=" w-full flex text-center flex-col items-center justify-center border-2 px-3 py-3 rounded-lg border-fuchsia-50">
               <Image src={twitter}></Image>
               <h4 className="text-white text-[0.7rem] lg:text-[1.1rem]">Raj Kiran</h4>
            </div>
            <div className=" w-full flex text-center flex-col items-center justify-center border-2 px-3 py-3 rounded-lg border-fuchsia-50">
               <Image src={twitter}></Image>
               <h4 className="text-white text-[0.7rem] lg:text-[1.1rem]">Raj Kiran</h4>
            </div>
            <div className=" w-full flex text-center flex-col items-center justify-center border-2 px-3 py-3 rounded-lg border-fuchsia-50">
               <Image src={twitter}></Image>
               <h4 className="text-white text-[0.7rem] lg:text-[1.1rem]">Raj Kiran</h4>
            </div>
         </div>
         <div className="pt-12">
            <Image src={ellipse}></Image>
         </div>
      </section>
   );
};
export default FollowUs;
