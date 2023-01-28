import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
const CourseFAQ = () => {
   const[show,setShow] =useState({})

   function handleShow(id) {
      setShow((prev) => {
          return {...prev, [id]: !prev[id]};
      });
    }
    
  
   return (
      <section className="flex items-center  flex-col justify-center pt-[3rem] lg:pt-[8rem] pb-4">
         <div className="w-[60%] flex text-center items-center justify-center">
            <h2
               className={`font-pressfont text-[1.5rem] lg:text-[3.1rem]  
                  pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
            >
              With our course, you'll learn how to
            </h2>
         </div>
         <div className="faqqna lg:space-y-5 space-y-2 mt-3 ">
            <div className="border-2 rounded-lg border-fuchsia-50 px-4 py-3 " onClick={()=>{handleShow(1)}}>
               <h3 className="text-white text-[1.1rem] lg:text-[1.8rem] font-Lato">Master industry-standard software, "Adobe Premiere Pro"</h3>
               {show[1] &&(<div className="text-left text-white font-Lato lg:text-[1.2rem] text-[0.9rem]">
                  <h6>- Edit and enhance video footage </h6>
                  <h6>- Edit and enhance video footage </h6>
                  <h6>- Edit and enhance video footage </h6>
                  <h6>- Edit and enhance video footage </h6>
               </div>)}
            </div>
            <div className="border-2 rounded-lg border-fuchsia-50 px-4 py-3" onClick={()=>{handleShow(2)}}>
               <h3 className="text-white text-[1.2rem] lg:text-[1.8rem] font-Lato">Understand the Psychology behind Editing</h3>
               {show[2] &&(<div className="text-left text-white font-Lato lg:text-[1.2rem] text-[0.9rem]">
                  <h6>- Edit and enhance video footage </h6>
                  <h6>- Edit and enhance video footage </h6>
                  <h6>- Edit and enhance video footage </h6>
                  <h6>- Edit and enhance video footage </h6>
               </div>)}
            </div>
            <div className="border-2 rounded-lg border-fuchsia-50 px-4 py-3">
               <h3 className="text-white text-[1.2rem] lg:text-[1.8rem] font-Lato">Decoding Youtubers and industries</h3>
            </div>
            <div className="border-2 rounded-lg border-fuchsia-50 px-4 py-3">
               <h3 className="text-white text-[1.2rem] lg:text-[1.8rem] font-Lato">Businesses With Editing</h3>
            </div>
         </div>
      </section>
   );
};
export default CourseFAQ;
