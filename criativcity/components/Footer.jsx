import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter()
  return (
    <section className="font-Lato w-full navbarbg  px-12 py-6 flex lg:flex-row flex-col text-white items-start justify-between">
      <div className="leftlogotext ">
        <h2 className="font-pressfont text-[1.3rem] lg:text-[2rem] uppercase">Criativcity</h2>
        <h3 className="cursor-pointer font-lato " onClick={() => router.push('/privacy')} >Privacy</h3>
        <h3 className="cursor-pointer font-lato" onClick={() => router.push('/terms')}  >Terms and Conditions</h3>
        <h3 >2023 Copyright</h3>
      </div>
      <div className="aboutus">
        <h3 className="cursor-pointer font-lato" onClick={() => router.push('/returnPolicy')} >Return Policy</h3>
        <h3 className="font-lato" >support@criativcity.com</h3>
      </div>
      <div className="feedback">
        <h2 className="font-lato" >Address</h2>
        <h2 className="font-lato" >Prabhakar, Jangid Estate, Mira road</h2>
        <h2 className="font-lato" > East Thane, Maharastra, 401107</h2>
      </div>
      {/* <div></div> */}
    </section>
  )
}
export default Footer