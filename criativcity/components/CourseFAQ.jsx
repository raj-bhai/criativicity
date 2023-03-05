import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import rectange from "../assets/Rectangle.png";
import polygon from "../assets/polygon2.png";

const CourseFAQ = () => {
   const [show, setShow] = useState({});

   function handleShow(id) {
      setShow((prev) => {
         return { ...prev, [id]: !prev[id] };
      });
   }

   return (
      <section className="flex relative items-center  flex-col justify-center pt-[3rem] lg:pt-[12rem] pb-4">
            <Image src={rectange} alt="rectange" className="absolute lg:w-44 lg:h-44 w-20 h-20 left-3 top-2"></Image>
            <Image src={polygon} alt="polygon" className=" absolute right-12 top-2 lg:w-16 lg:h-16 w-8 h-8"></Image>
         <div className="w-[60%] flex text-center items-center justify-center mt-4">
            <h2
               className={`font-pressfont text-[1.5rem] lg:text-[3.1rem]  
                  pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
            >
               With our course, you&apos;ll learn how to
            </h2>
         </div>
         <div className="faqqna navbarbg lg:space-y-5 space-y-2 mt-3 ">
            <div
               className=" rounded-lg border-[0.04rem] border-fuchsia-400 px-4 py-3 "
               onClick={() => {
                  handleShow(1);
               }}
            >
               <h3 className="text-white relative flex items-center justify-between text-[0.9rem] lg:text-[1.8rem]  font-Lato">
                 <h2 className="w-[90%] lg:w-[95%] mr-1"> Master industry-standard software, &quot;Adobe Premiere Pro&quot;</h2>
                  {show[1] ? <IoIosArrowUp size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowUp> : <IoIosArrowDown size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowDown>}
               </h3>

               {show[1] && (
                  <div className="text-left text-white font-Lato lg:text-[1.2rem] text-[0.9rem]">
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                  </div>
               )}
            </div>
            <div
               className="rounded-lg border-[0.04rem] border-fuchsia-400 px-4 py-3"
               onClick={() => {
                  handleShow(2);
               }}
            >
               <h3 className="text-white text-[0.9rem] flex items-center justify-between lg:text-[1.8rem] font-Lato">
                  Understand the Psychology behind Editing
                  {show[2] ? <IoIosArrowUp size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowUp> : <IoIosArrowDown size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowDown>}
               </h3>
               {show[2] && (
                  <div className="text-left text-white font-Lato lg:text-[1.2rem] text-[0.9rem]">
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                  </div>
               )}
            </div>
            <div
               className="rounded-lg border-[0.04rem] border-fuchsia-400 px-4 py-3"
               onClick={() => {
                  handleShow(3);
               }}
            >
               <h3 className="text-white text-[0.9rem] items-center flex justify-between lg:text-[1.8rem] font-Lato">
                  Decoding Youtubers and industries
                  {show[3] ? <IoIosArrowUp size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowUp> : <IoIosArrowDown size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowDown>}
               </h3>
               {show[3] && (
                  <div className="text-left text-white font-Lato lg:text-[1.2rem] text-[0.9rem]">
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                  </div>
               )}
            </div>
            <div
               className=" rounded-lg border-[0.04rem] border-fuchsia-400 px-4 py-3"
               onClick={() => {
                  handleShow(4);
               }}
            >
               <h3 className="text-white text-[0.9rem] items-center flex justify-between lg:text-[1.8rem] font-Lato">
                  Businesses With Editing
                  {show[4] ? <IoIosArrowUp size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowUp> : <IoIosArrowDown size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowDown>}
               </h3>
               {show[4] && (
                  <div className="text-left text-white font-Lato lg:text-[1.2rem] text-[0.9rem]">
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                     <h6>- Edit and enhance video footage </h6>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};
export default CourseFAQ;
