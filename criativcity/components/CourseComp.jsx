import React, { useState, useEffect } from "react";
import Image from "next/image";
import vidimg from "../assets/vidimg.png";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "react-loading-skeleton/dist/skeleton.css";
import * as CourseAction from "../redux/action/course";
import { useRouter } from "next/router";
import axios from "axios";
import { Apiurl } from "@/constants/url";
import Shimmer from "./courseShimmer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AiOutlineClockCircle, AiOutlineCloudDownload, AiOutlineMobile, AiFillCaretRight } from 'react-icons/ai'


let FAQ = [
   {
      title: "Can I cancel my course purchase if I don’t like it?  Will I get a refund?",
      detail: "Yes! You can cancel your course within 7 days of purchase if you don’t like it. You can email us at support@criativcity.com & we’ll cancel and refund your money within hours. No awkward questions asked :"
   },
   {
      title: "Why Us?",
      detail: "Cause our content will help you build a career in video editing. Everyone else in the market just teaches premiere pro in 6-10 hours but we dive deep into every aspect from premiere pro to building a business. In addition to that, with our weekly live sessions, all your queries will be solved."
   },
   {
      title: "Where to ask queries?",
      detail: "You can either comment on a particular video or ask queries in our discord community and our managers and support team will respond withing 6 hours or sooner :)"
   },
   {
      title: "How can I access course materials and resources?",
      detail: "We provide google drive links of all the recourses and if you face any issue in downloading or accessing it, you can contact us, and we would love to help you out"
   },
   {
      title: "Is there job opportunity?",
      detail: "YES! There is a whole section on how to get your client and how to build a team and more but in addition to that, we will also announce PRIZE WINNING COMPETITIONS, CONTESTS & COMPETITIVE EXAMS for recruitment for our own production house and soon for other companies as well so yes there is a lot of job opportunity options available with us."
   },
   {
      title: "What is our future goal?",
      detail: "To make CRIATIVCITY, a place where like-minded and enthusiastic people come to build a legacy with the most powerful and creative community, to build an ecosystem where students can come, learn, showcase and earn."
   },
   {
      title: "What if I still have queries after watching the course?",
      detail: "We will conduct weekly qna sessions for a month live in google/zoom meeting through our discord where we will discuss and solve all the queries."
   }
]

const CourseComp = () => {
   const dispatch = useDispatch();
   const router = useRouter();
   const Courses = useSelector((state) => state.course.CourseList);
   const userDetail = useSelector((state) => state.user.UserDetail);
   const [domLoaded, setDomLoaded] = useState(false);
   const [isCheckoutOpen, setIsCheckoutOpen] = useState(true);

   useEffect(() => {
      setDomLoaded(true)
   }, [])

   useEffect(() => {
      if (!Courses?.length) {
         dispatch(CourseAction.getAllCourse());
      }
   }, []);


   function handleShow(id) {
      setShow((prev) => {
         return { ...prev, [id]: !prev[id] };
      });
   }

   const Item = (props) => {
      const [show, setShow] = useState(false);


      return (
         <div
            key={props.key}
            className=" rounded-lg border-[0.04rem] border-fuchsia-400 px-4 py-3 "
            onClick={() => {
               setShow(!show)
            }}
         >
            <h1 className="text-white relative flex items-center justify-between text-[0.9rem] lg:text-[1.3rem]  font-Lato">
               <h2 className="w-[90%] lg:w-[95%] mr-1 font-lato "> {props.title}</h2>
               {show ? (
                  <IoIosArrowUp size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowUp>
               ) : (
                  <IoIosArrowDown size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowDown>
               )}
            </h1>

            {show && (
               <div className="text-left w-[95%] ">
                  <h6 className="font-Lato text-[0.8rem] lg:text-[1.0rem]" >{props.detail} </h6>
               </div>
            )}
         </div>
      )
   }



   const onClickCourse = async () => {
      // const token = await localStorage.getItem('token');
      // if (!token) {
      //    router.push('./login')
      // } else {
      //    if (userDetail?.paidUser) {
      //       router.push('./video')
      //    }
      // }
   }

   const handleCheckoutClick = () => {
      setIsCheckoutOpen(true);
   };

   const handleCloseCheckout = () => {
      setIsCheckoutOpen(false);
   };

   return (
      <>
         {/* <SkeletonTheme baseColor="#ebebeb" highlightColor="#898989"> */}
         {
            domLoaded &&
            <section className=" text-white navbarbg">
               <ToastContainer />
               <div className="text-center lg:text-left lg:ml-[10rem] mt-[4rem] py-12">
                  <h1
                     className={`font-pressfont text-[1.5rem] lg:text-[3.1rem]  
                        pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
                  >
                     Courses
                  </h1>
               </div>
               {Courses?.length ? (
                  <div className="flex items-center navbarbg justify-center">
                     {Courses.map((item, index) => (
                        <section
                           key={index}
                           // hover:bg-[#17202A]
                           className="mt flex justify-center cursor-pointer  border-2 border-fuchsia-500 rounded-lg lg:w-[78%] px-2 mx-2 py-1"
                           onClick={() => {
                              onClickCourse()
                           }}
                        >
                           <div className="adobe-vid-cont w-[95%] lg:flex lg:items-start  justify-between">
                              <div className="text-cont ">
                                 <div className="">
                                    <h2 className=" font-Lato text-[1.0rem] lg:text-[1.2rem] w-3/4 mt-4 ">{item.courseName} </h2>
                                 </div>
                                 <div className=" mt-[20px] ">
                                    {item.details.map((x, i) => (
                                       <div key={index} className="flex items-start my-1 gap-x-2">
                                          <AiFillCaretRight className=" lg:mt-[8px] mt-[2px] " size={15} />
                                          <h6 className="text-white text-[0.8rem] lg:text-[1.1rem] font-Lato" >{x}</h6>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                              <div className="vidimg-cont">
                                 <div className="videocont lg:w-[500px] lg:h-[340px] mt-7">
                                    <Image src={vidimg} alt="videoimg"></Image>
                                 </div>
                                 {
                                    userDetail?.paidUser ?
                                       <div className="cta flex items-center justify-end pb-2   gap-x-8 lg:gap-x-14 mt-5 lg:mt-5 " >
                                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold font-pressfont py-2 px-4 rounded"
                                             onClick={() => {
                                                router.push('./video')
                                             }}
                                          >
                                             Watch Now
                                          </button>

                                       </div> :
                                       <div className="cta flex items-center justify-end pb-2  gap-x-8 lg:gap-x-14 mt-5 lg:mt-5 ">
                                          <div className="price flex row gap-2  items-center justify-center ">
                                             {/* <h3 className="line-through text-[#BDC3C7] text-[18px] font-pressfont font-semibold " >₹ 1250</h3> */}
                                             <h3 className="text-[#fff] text-[20px]  font-lato " >₹ 998</h3>
                                          </div>
                                          <div className="btn">
                                             <button className="logibtn lg:px-4 lg:py-3 py-2 px-2  font-lato font-bold uppercase text-white text-[0.8rem] lg:text-[1.1rem] rounded-lg"
                                                onClick={() => {
                                                   if (localStorage.getItem('token')) {
                                                      router.push('./checkout')
                                                   } else {
                                                      toast.info('You need to login first')
                                                   }
                                                }}
                                             >
                                                Buy Now
                                             </button>
                                          </div>
                                       </div>
                                 }
                              </div>
                           </div>
                        </section>
                     ))}
                  </div>
               ) :
                  <div className="flex items-center navbarbg justify-center">
                     <Shimmer />
                  </div>
               }

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
                  <div className="faqqna navbarbg lg:space-y-5  w-[70%] space-y-2 mt-3 pt-12 ">
                     {
                        FAQ.map((x, index) => (
                           <Item
                              key={index}
                              title={x.title}
                              detail={x.detail}
                           />
                        ))
                     }
                  </div>
               </div>
            </section>

         }
      </>
   );
};
export default CourseComp;
