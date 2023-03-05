import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import twitter from "../assets/twitter.png";
import insta from '../assets/instaa.png';
import youtube from '../assets/youutube.png';
import facebook from '../assets/facebook.png';
import ellipse from '../assets/ellipse.png'
import {IoIosArrowDown} from 'react-icons/io'

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
         <div className="boxContain space-x-2 lg:space-x-7 flew-wrap md:flex-nowrap flex items-center justify-between px-3 py-3 border-[0.04rem] border-fuchsia-400 rounded-lg mb-4">
            <div className=" cursor-pointer w-full flex text-center flex-col items-center justify-center hover:border-white border-[0.04rem] px-3 py-[0.7rem] rounded-lg border-fuchsia-400">
               <Image src={twitter} alt="twitter"></Image>
               <h4 className="text-white text-[0.7rem] lg:text-[1.1rem] pt-1 px-[0.6rem]">Twitter</h4>
            </div>
            <div className=" cursor-pointer w-full flex text-center flex-col items-center justify-center hover:border-white border-[0.04rem] px-3 py-3 rounded-lg border-fuchsia-400">
               <Image src={insta} alt="instagram"></Image>
               <h4 className="text-white text-[0.7rem] lg:text-[1.1rem] pt-1">Instagram</h4>
            </div>
            <div className=" cursor-pointer w-full flex text-center flex-col items-center justify-center hover:border-white border-[0.04rem] px-3 py-3 rounded-lg border-fuchsia-400">
               <Image src={facebook} alt="facebook"></Image>
               <h4 className="text-white text-[0.7rem] lg:text-[1.1rem] pt-1">Facebook</h4>
            </div>
            <div className=" cursor-pointer w-full flex text-center flex-col items-center justify-center hover:border-white border-[0.04rem] px-[0.7rem] py-[0.8rem] rounded-lg border-fuchsia-400">
               <Image src={youtube} alt="youtube"></Image>
               <h4 className="text-white text-[0.7rem] lg:text-[1.1rem] px-[0.5rem] pt-1">Youtube</h4>
            </div>
         </div>
         <div className="pt-12 -mb-6">
            <Image src={ellipse} alt="ellipse"></Image>
         </div>
      </section>
   );
};
export default FollowUs;
