import React, { useState, useEffect } from "react";
import student from "../assets/student.png";
import Image from "next/image";
import vidimg from "../assets/vidimg.png";
const CourseComp = () => {
   return (
      <>
         <section className=" text-white navbarbg">
            <div className="text-center lg:text-left lg:ml-[10rem] mt-[4rem] py-12">
               <h1
                  className={`font-pressfont text-[1.5rem] lg:text-[3.1rem]  
                  pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
               >
                  Courses
               </h1>
            </div>
            <div className="flex items-center navbarbg justify-center">
               <section className="mt flex justify-center border-2 border-fuchsia-50 rounded-lg lg:w-[78%] px-2 mx-2 py-1">
                  <div className="adobe-vid-cont lg:flex lg:items-start  justify-between">
                     <div className="text-cont">
                        <h2 className="text-[1.2rem] w-3/4 mt-4 ">Adobe Premiere Pro CC Masterclass: Video Editing in Premiere </h2>
                        <div>
                           <h3>24.5 hours on-demand video</h3>
                           <h3>24.5 hours on-demand video</h3>
                           <h3>24.5 hours on-demand video</h3>
                           <h3>24.5 hours on-demand video</h3>
                           <h3>24.5 hours on-demand video</h3>
                        </div>
                     </div>
                     <div className="vidimg-cont">
                        <div className="videocont lg:w-[500px] lg:h-[340px] mt-7">
                           <Image src={vidimg} alt="videoimg"></Image>
                        </div>
                        <div className="cta flex items-center justify-center  gap-x-8 lg:gap-x-14 mt-5 lg:mt-10 ">
                           <div className="imgencont flex items-center justify-start flex-col">
                              <div className="w-full h-full aspect-3/2 object-contain flex items-center justify-center gap-2">
                                 <Image src={student} alt="student"></Image>
                                 <h1 className="text-[#00DB8C] text-[1.5rem] lg:text-[2rem] font-bold font-Lato">414</h1>
                              </div>
                              <h1 className="text-white font-normal font-Lato text-[0.8rem] lg:text-[1.1rem]">Students Enrolled</h1>
                           </div>
                           <div className="price">
                              <h3>$199</h3>
                           </div>
                           <div className="btn">
                              <button className="logibtn lg:px-4 lg:py-3 py-2 px-2 font-Lato font-bold uppercase text-white text-[0.8rem] lg:text-[1.1rem] rounded-lg">
                                 Buy Now
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </div>

            <div className="more-course navbarbg flex flex-col items-center justify-center mt-24">
               <div className="text">
                  <h2
                     className={`font-pressfont text-[1.5rem] lg:text-[3.1rem]  
                  pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
                  >
                     More Courses Coming Soon
                  </h2>
               </div>
               <div className="border-2 border-fuchsia-50 rounded-lg">
                  <input className="outline-none px-2 py-3 bg-transparent" placeholder="Enter Your Email" type="text" />
                  <button className="px-5 border-2 mx-1 rounded-lg py-2 text-fuchsia-400 ">Submit</button>
               </div>
            </div>
         </section>
      </>
   );
};
export default CourseComp;
