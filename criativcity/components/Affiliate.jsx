import React, { useState, useEffect } from "react";
import student from "../assets/student.png";
import Image from "next/image";
import affimg from "../assets/affimg.png";
import ellipse from '../assets/ellipse.png'
import planets from '../assets/Group.png'


const Affiliate = () => {
   return (
      <>
         <section className="navbarbg lg:pt-[12rem] pt-[8rem]">
            <div className="outerTextDiv flex items-center justify-around lg:justify-between lg:mx-[10rem]">
               <div className="afftext">
                  <h1
                     className={`font-pressfont text-[1.5rem] lg:text-[3.1rem]  
                  pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple`}
                  >
                     Affiliates
                  </h1>
               </div>
               <div className="paymenBTn">
                  <button className="logibtn lg:px-4 lg:py-3 py-2 px-2 font-Lato font-bold uppercase text-white text-[0.8rem] lg:text-[1.1rem] rounded-lg">
                     Manage Payments
                  </button>
               </div>
            </div>
            <div className="flex items-center navbarbg justify-center mt-[3.3rem] ">
               <section className="mt flex justify-center border-[0.04rem]  border-fuchsia-50 rounded-lg lg:w-[80%]  px-2 mx-2 py-1">
                  <div className="adobe-vid-cont lg:flex lg:items-start w-full justify-between">
                     <div className="text-cont mx-auto text-white">
                        <h2 className="text-[1.2rem]  mt-4">Here's how we are doing </h2>
                        <div className="flex items-center justify-center mt-[2rem]">
                           <div className="grid grid-cols-3 gap-4">
                              <div className="border-fuchsia-50 rounded-lg px-4 py-6 text-white text-center border-[0.04rem]  ">
                                 <div>
                                    <h3>$199</h3>
                                 </div>
                                 <div>
                                    <h3>Available Balance</h3>
                                 </div>
                              </div>
                              <div className="border-fuchsia-50 rounded-lg px-4 py-6 text-white text-center border-[0.04rem] ">
                                 <div>
                                    <h3>$199</h3>
                                 </div>
                                 <div>
                                    <h3>Available Balance</h3>
                                 </div>
                              </div>
                              <div className="border-fuchsia-50 rounded-lg px-4 py-6 text-white text-center border-[0.04rem] ">
                                 <div>
                                    <h3>$199</h3>
                                 </div>
                                 <div>
                                    <h3>Available Balance</h3>
                                 </div>
                              </div>
                              <div className="border-fuchsia-50 rounded-lg px-4 py-6 text-white text-center border-[0.04rem] ">
                                 <div>
                                    <h3>$199</h3>
                                 </div>
                                 <div>
                                    <h3>Available Balance</h3>
                                 </div>
                              </div>
                              <div className="border-fuchsia-50 rounded-lg px-4 py-6 text-white text-center border-[0.04rem] ">
                                 <div>
                                    <h3>$199</h3>
                                 </div>
                                 <div>
                                    <h3>Available Balance</h3>
                                 </div>
                              </div>
                              <div className="border-fuchsia-50 rounded-lg px-4 py-4 text-white text-center border-[0.04rem] ">
                                 <div>
                                    <h3>$199</h3>
                                 </div>
                                 <div>
                                    <h3>Available Balance</h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="vidimg-cont">
                        <div className="videocont lg:w-[500px] lg:h-[340px] mt-7 ">
                           <Image src={affimg} className="rounded-lg"></Image>
                        </div>
                        <div className="cta flex items-center justify-center  gap-x-8 lg:gap-x-14 mt-3 lg:mt-10 ">
                           <div className="imgencont flex items-center justify-start flex-col">
                              <div className="w-full h-full aspect-3/2 object-contain flex items-center justify-center gap-2">
                                 <Image src={student}></Image>
                                 <h1 className="text-[#00DB8C] text-[1.5rem] lg:text-[2rem] font-bold font-Lato">414</h1>
                              </div>
                              <h1 className="text-white font-normal font-Lato text-[0.8rem] lg:text-[1.1rem]">Recently Joined</h1>
                           </div>
                           <div className="price">
                              <h3>$199</h3>
                           </div>
                           <div className="btn">
                              <button className="logibtn lg:px-4 lg:py-3 py-2 px-2 font-Lato font-bold uppercase text-white text-[0.8rem] lg:text-[1.1rem] rounded-lg">
                                 Invite Friends
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
            <div className=" text-white mt-4 outerTextDiv flex border-[0.04rem]  rounded-lg border-fuchsia-50 items-center justify-around lg:justify-between lg:mx-[8.5rem]">
               <div className="px-5 py-7">
                  <h3 className="text-[1.2rem] mb-4">How Criativcity Affiliate Program Will Work</h3>
                  <h6>
                     You can earn money by sharing Criativcity courses through their affiliate program. To become an affiliate, you must first create
                     an account on Criativcity. Once your account is created, you can access the affiliate section and generate unique links for any
                     course on the website. When someone clicks on your link and enrolls in a course, you will earn a commission on the sale.
                     Additionally, You can also share courses on your website or social media channels and use tracking links to earn 20% commission
                     on any course purchases made through your links.
                  </h6>
               </div>
            </div>
            <div className="pt-12">
               <Image src={planets}></Image>
            </div>
            <div className="pt-12">
               <Image src={ellipse}></Image>
            </div>
         </section>
      </>
   );
};
export default Affiliate;
