import React, { useState, useEffect } from "react";
import Image from "next/image";
import vidimg from "../assets/vidimg.png";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "react-loading-skeleton/dist/skeleton.css";
import * as CourseAction from "../redux/action/course";
import { useRouter } from "next/router";

const CourseComp = () => {
   const dispatch = useDispatch();
   const router = useRouter();
   const Courses = useSelector((state) => state.course.CourseList);
   const userDetail = useSelector((state) => state.user.UserDetail)

   useEffect(() => {
      if (!Courses?.length) {
         dispatch(CourseAction.getAllCourse());
      }
   }, []);

   const [show, setShow] = useState({});

   function handleShow(id) {
      setShow((prev) => {
         return { ...prev, [id]: !prev[id] };
      });
   }

   const onClickCourse = async () => {
      const token = await localStorage.getItem('token');
      if (!token) {
         router.push('./login')
      } else {
         if (userDetail?.paidUser) {
            router.push('./video')
         }
      }
   }

   return (
      <>
         <SkeletonTheme baseColor="#ebebeb" highlightColor="#898989">
            {Courses?.length ? (
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
                     {/* <Skeleton height={460}></Skeleton> */}
                     {Courses.map((item, index) => (
                        <section
                           key={index}
                           className="mt flex justify-center cursor-pointer hover:bg-[#17202A] border-2 border-fuchsia-50 rounded-lg lg:w-[78%] px-2 mx-2 py-1"
                           onClick={() => {
                              onClickCourse()
                           }}
                        >
                           <div className="adobe-vid-cont lg:flex lg:items-start  justify-between">
                              <div className="text-cont ">
                                 <div className="">
                                    <h2 className="text-[1.2rem] w-3/4 mt-4 ">{item.courseName} </h2>
                                 </div>
                                 <div className=" mt-[20px] ">
                                    {item.details.map((x, i) => (
                                       <h3 key={i}>--- {x}</h3>
                                    ))}
                                 </div>
                              </div>
                              <div className="vidimg-cont">
                                 <div className="videocont lg:w-[500px] lg:h-[340px] mt-7">
                                    <Image src={vidimg} alt="videoimg"></Image>
                                 </div>
                                 <div className="cta flex items-center justify-end pb-2  gap-x-8 lg:gap-x-14 mt-5 lg:mt-10 ">
                                    <div className="price">
                                       <h3>Rs.1000</h3>
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
                     ))}
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
                     <div className="faqqna navbarbg lg:space-y-5 space-y-2 mt-3 pt-12 ">
                        <div
                           className=" rounded-lg border-[0.04rem] border-fuchsia-400 px-4 py-3 "
                           onClick={() => {
                              handleShow(1);
                           }}
                        >
                           <h3 className="text-white relative flex items-center justify-between text-[0.9rem] lg:text-[1.8rem]  font-Lato">
                              <h2 className="w-[90%] lg:w-[95%] mr-1"> Master industry-standard software, &quot;Adobe Premiere Pro&quot;</h2>
                              {show[1] ? (
                                 <IoIosArrowUp size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowUp>
                              ) : (
                                 <IoIosArrowDown size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowDown>
                              )}
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
                              {show[2] ? (
                                 <IoIosArrowUp size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowUp>
                              ) : (
                                 <IoIosArrowDown size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowDown>
                              )}
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
                              {show[3] ? (
                                 <IoIosArrowUp size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowUp>
                              ) : (
                                 <IoIosArrowDown size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowDown>
                              )}
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
                              {show[4] ? (
                                 <IoIosArrowUp size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowUp>
                              ) : (
                                 <IoIosArrowDown size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowDown>
                              )}
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
                  </div>
               </section>
            ) : null}
         </SkeletonTheme>
      </>
   );
};
export default CourseComp;
