import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";

const Footer = () => {
  return (
    <section className="w-full navbarbg  px-12 py-6 flex lg:flex-row flex-col text-white items-start justify-between">
            <div className="leftlogotext ">
                <h2 className="font-pressfont text-[1.3rem] lg:text-[2rem] uppercase">Criativcity</h2>
                <h3>Privacy</h3>
                <h3>Terms and Conditions</h3>
                <h3>2023 Copyright</h3>
            </div>
            <div className="aboutus">
                <h3>About Us</h3>
                <h3>Contact Us</h3>
            </div>
            <div className="feedback">
                <h2>Feedback</h2>
                <h2>Email</h2>
                <h2>Services</h2>
            </div>
            {/* <div></div> */}
    </section>
  )
}
export default Footer