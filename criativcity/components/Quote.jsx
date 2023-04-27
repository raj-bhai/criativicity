import React, { useState, useEffect } from "react";
import Image from "next/image";
import moneyback from "../assets/moneyback.png";
import student from "../assets/student.png";
import vidimg from "../assets/vidimg.png";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import * as CourseAction from '../redux/action/course';
import { AiFillCaretRight } from 'react-icons/ai';



const Quote = () => {
   const router = useRouter()
   const dispatch = useDispatch()
   const Courses = useSelector((state) => state.course.CourseList);

   useEffect(() => {
      if (!Courses?.length) {
         dispatch(CourseAction.getAllCourse());
      }
   }, [])


   return (
      <section className="navbarbg">
         <div className="  flex lg:flex-row flex-col items-center justify-around pb-4">
            <div className="moneyback flex items-center justify-center w-[220px] mb-4 lg:w-[400px]">
               <Image src={moneyback} alt="moneyback"></Image>
            </div>
            <div className="videPrice rounded-lg border-[0.04rem] relative  border-fuchsia-400  flex flex-col items-center justify-around ">
               <div className="videocont lg:w-[500px] lg:h-[340px] mt-7">
                  <Image src={vidimg} alt="video"></Image>
               </div>
               {/* This is hidden */}
               <div className="cta navbarbg hidden flex items-center justify-center  gap-x-8 lg:gap-x-14 mt-5 lg:mt-10 ">
                  <div className="imgencont flex items-center justify-start flex-col">
                     <div className="w-full h-full aspect-3/2 object-contain flex items-center justify-center gap-2">
                        <Image src={student} alt="student"></Image>
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
               {/* --------------- */}
               <div className="btn absolute right-2 bottom-2 ">
                  <button className="logibtn lg:px-4 lg:py-3 py-2 px-2 font-Lato font-bold uppercase text-white text-[0.8rem] lg:text-[1.1rem] rounded-lg"
                     onClick={() => {
                        router.push('./checkout')
                     }}
                  >
                     Buy Now
                  </button>
               </div>
               <div className="textcont mt-3 w-3/4 pb-3 text-white ">
                  <div className="headtext">
                     <h4 className="text-[0.8rem] lg:text-[1.5rem]">Adobe Premiere Pro CC Masterclass: Video Editing in Premiere </h4>
                  </div>
                  <div className="subtext my-1">
                     <h3 className="lg:text-[1.2rem] font-Lato font-medium">This Course includes:</h3>
                  </div>
                  <div className="minortext">
                     {
                        Courses?.length &&
                        Courses[0].details.map((x, index) => (
                           <div key={index} className="flex items-start my-1">
                              <div>
                                 <AiFillCaretRight className=" lg:mt-[8px] mt-[2px]  lg:w-[15px] lg:h-[15px] " size={15} />
                              </div>
                              <h6 className=" ml-2 text-white text-[0.8rem] lg:text-[1.0rem] font-Lato" >{x}</h6>
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>

      </section>
   );
};
export default Quote;
