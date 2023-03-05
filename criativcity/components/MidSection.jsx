import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import Link from "next/link";
import leftfeather from "../assets/leftfeather.png";
import rightfeather from "../assets/rightfeather.png";
import city from "../assets/city.png";
import citymid from "../assets/citymid.png";
import bigvid from "../assets/bigvid.png";
import polygon from "../assets/Polygon.png";
import ball from "../assets/ball2.png";

const MidSection = () => {
   return (
      <section id="midsection" className="">
         <div className="relative cityContainer flex items-center justify-center">
            <Image src={city} alt="city" className="aspect-4/4"></Image>
            <div className="videoContainer absolute bottom-2 lg:bottom-12">
               <Image src={bigvid} alt="image" className="w-[250px] lg:w-[740px]"></Image>
               <Image src={ball} alt="image" className="absolute -right-3 w-[2rem] h-[2rem] lg:w-[3.2rem] lg:h-[3.2rem] mt-4"></Image>
            </div>
         </div>
      </section>
   );
};
export default MidSection;
