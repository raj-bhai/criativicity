import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import fish from "../assets/fishwithbg.png";
import grouppl from "../assets/Group.png";

const Subcontent = () => {
   return (
      <section className="navbarbg ">
         <div className="w-full relative flex flex-col items-center justify-start">
            {/* <Image src={grouppl} alt="group" className="absolute lg:top-32 "></Image> */}
            <Image style={{ clipPath: "inset(700px 0 0 0)" }} src={fish} alt="fish" className=" w-full -mt-[700px] "></Image>
         </div>
      </section>
   );
};
export default Subcontent;
