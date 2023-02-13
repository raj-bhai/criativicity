import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import moneyback from "../assets/moneyback.png";
import student from "../assets/student.png";
import vidimg from "../assets/vidimg.png";

const Quote = () => {
   return (
      <section className="navbarbg">
         <div className="  flex lg:flex-row flex-col items-center justify-around pb-4">
            <div className="moneyback flex items-center justify-center w-[220px] mb-4 lg:w-[400px]">
               <Image src={moneyback}></Image>
            </div>
            <div className="videPrice rounded-lg border-[0.04rem]  border-fuchsia-400  flex flex-col items-center justify-around ">
               <div className="videocont lg:w-[500px] lg:h-[340px] mt-7">
                  <Image src={vidimg}></Image>
               </div>
               <div className="cta navbarbg flex items-center justify-center  gap-x-8 lg:gap-x-14 mt-5 lg:mt-10 ">
                  <div className="imgencont flex items-center justify-start flex-col">
                     <div className="w-full h-full aspect-3/2 object-contain flex items-center justify-center gap-2">
                        <Image src={student}></Image>
                        <h1 className="text-[#00DB8C] text-[1.5rem] lg:text-[2rem] font-bold font-Lato">414</h1>
                     </div>
                     <h1 className="text-white font-normal font-Lato text-[0.8rem] lg:text-[1.1rem]">Students Enrolled</h1>
                  </div>
                  <div className="price text-white">
                        <h3>$199</h3>
                  </div>
                  <div className="btn">
                     <button className="logibtn lg:px-4 lg:py-3 py-2 px-2 font-Lato font-bold uppercase text-white text-[0.8rem] lg:text-[1.1rem] rounded-lg">
                        Buy Now
                     </button>
                  </div>
               </div>
               <div className="textcont mt-3 w-3/4 pb-3 text-white">
                <div className="headtext">
                    <h4 className="text-[0.8rem] lg:text-[1.5rem]">Adobe Premiere Pro CC Masterclass: Video Editing in Premiere </h4>
                </div>
                <div className="subtext">
                    <h3>This Course includes:</h3>
                </div>
                <div className="minortext">
                    <h6>24.5 hours demand video</h6>
                    <h6>24.5 hours demand video</h6>
                    <h6>24.5 hours demand video</h6>
                    <h6>24.5 hours demand video</h6>
                    <h6>24.5 hours demand video</h6>
                    <h6>24.5 hours demand video</h6>
                    <h6>24.5 hours demand video</h6>
                    <h6>24.5 hours demand video</h6>
                    <h6>24.5 hours demand video</h6>
                    <h6>24.5 hours demand video</h6>
                    <h6>24.5 hours demand video</h6>
                </div>
               </div>
            </div>
         </div>
         
      </section>
   );
};
export default Quote;
