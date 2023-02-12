import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import fish from '../assets/fishwithbg.png'

const Subcontent = () => {
  return (
    <section className="navbarbg ">
        <div className="w-full flex items-center justify-center">
            <Image src={fish} className="aspect-1/4"></Image>
        </div>
    </section>
  )
}
export default Subcontent