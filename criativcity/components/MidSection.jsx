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

const MidSection = () => {
   return (
      <section id="midsection" className="">
         <div className="relative cityContainer flex items-center justify-center ">
               <div className=" absolute z-50 left-[40%] w-[50%] h-[20%] inset-0 gradient-01" />
               <Image src={city} className="aspect-4/4"></Image>
         </div>
         <div className="videoContainer"></div>
      </section>
   );
};
export default MidSection;
