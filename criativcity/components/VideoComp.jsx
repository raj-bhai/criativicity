import React, { useState, useEffect } from "react";
import student from "../assets/student.png";
import Image from "next/image";
import vidImg from "../assets/videoimg.png";
import men from "../assets/men.png";
import smallvid from "../assets/smallvid.png";
import { AiOutlineComment } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { BiLike, BiDislike } from "react-icons/bi";

const VideoComp = () => {
   return (
      <>
         <section className="navbarbg pt-32 text-white font-Lato pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 mx-8 lg:mx-12">
               <div className=" border-fuchsia-400 col-span-2 rounded-lg mx-4 lg:w-[100%]">
                  <Image src={vidImg} className="w-full h-auto rounded-t-lg " />
                  <div className="p-4 border-[0.03rem] border-fuchsia-400 rounded-t-lg mt-4">
                     <h2 className="text-[1rem] font-Lato lg:text-[1.2rem] font-bold mb-4">Adobe Premiere Pro Essentials Course</h2>
                     <div className="flex justify-between items-center">
                        <div className="flex items-center">
                           <Image src={men} className="w-8 h-8 rounded-full mr-2" />
                           <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">Satish Prajapati</h3>
                        </div>
                        <div className="flex items-center">
                           <div className="bg-white rounded-full p-2 shadow-md mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                 <path
                                    fillRule="evenodd"
                                    d="M10 19c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm1 12a1 1 0 11-2 0 1 1 0 012 0zm-.833-4.834a1 1 0 011.662-.11l.083.11v2.83a1 1 0 11-2 0v-2.83a1 1 0 01.255-.656z"
                                    clipRule="evenodd"
                                 />
                              </svg>
                           </div>
                           <div className="flex items-center">
                              <h5 className="text-sm font-medium mr-2">Last Updated</h5>
                              <h2 className="text-lg lg:text-xl font-bold">2</h2>
                           </div>
                        </div>
                     </div>
                     <div className="summary px-2 py-2">
                        <h2 className="text-[0.78rem] font-Lato lg:text-[1rem] ">
                           In this video, We are explaining about Introduction to Video Editing. Please do watch the complete video for in-depth
                           information.
                        </h2>
                     </div>
                     <div className="commentFilter flex items-center justify-between">
                        <div className="cms flex items-center gap-x-[0.7rem]">
                           <AiOutlineComment className="lg:w-7 lg:h-7" />
                           <h3>51</h3>
                           <h3 className="text-[0.6rem] lg:text-[1.1rem]">comments</h3>
                        </div>
                        <div className="filter gap-x-[0.6rem] flex items-center ">
                           <div className="">
                              <GoSettings className="rotate-90 lg:w-4 lg:h-4" />
                           </div>
                           <div className="text-[0.6rem] lg:text-[1.1rem]">Sort By</div>
                        </div>
                     </div>
                  </div>
                  <div className="flex py-2.5 items-center border-r-[0.04rem] border-l-[0.04rem] px-4 border-b-[0.04rem] border-fuchsia-400 w-full">
                     <Image src={men} className="w-8 h-8 rounded-full mr-2" />
                     <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">Satish Prajapati</h3>
                     <input
                        className=" mx-4 py-2 bg-transparent border-none focus:border-none border-transparent outline-none"
                        placeholder="Add a comment"
                        type="text"
                     />
                  </div>
                  <div className="flex py-3 items-start flex-col border-r-[0.04rem] border-l-[0.04rem] px-4 border-b-[0.04rem] border-fuchsia-400">
                     <div className="flex items-center gap-x-[0.9rem] px-3">
                        <Image src={men} className="w-8 h-8 rounded-full mr-2" />
                        <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">Satish Prajapati</h3>
                        <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">2 days ago</h3>
                     </div>
                     <div className="flex ml-[4rem] flex-col">
                        <h3 className="text-[0.7rem] lg:text-[1.1rem] py-2">All this was Comment section</h3>
                        <div className="flex gap-x-[0.4rem] items-center justify-between">
                           <div className="flex gap-x-[0.6rem]">
                              <BiLike></BiLike>
                              <BiDislike />
                           </div>
                           <h2 className="text-[0.7rem] lg:text-[1rem]">Reply</h2>
                        </div>
                     </div>
                  </div>

                  <div className="flex py-3 items-start flex-col border-r-[0.04rem] border-l-[0.04rem] px-4 border-b-[0.04rem] border-fuchsia-400">
                     <div className="flex items-center gap-x-[0.9rem] px-3">
                        <Image src={men} className="w-8 h-8 rounded-full mr-2" />
                        <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">Satish Prajapati</h3>
                        <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">2 days ago</h3>
                     </div>
                     <div className="flex ml-[4rem] flex-col">
                        <h3 className="text-[0.7rem] lg:text-[1.1rem] py-2">All this was Comment section</h3>
                        <div className="flex gap-x-[0.4rem] items-center justify-between">
                           <div className="flex gap-x-[0.6rem]">
                              <BiLike></BiLike>
                              <BiDislike />
                           </div>
                           <h2 className="text-[0.7rem] lg:text-[1rem]">Reply</h2>
                        </div>
                     </div>
                  </div>

                  <div className="flex py-3 items-start flex-col border-r-[0.04rem] border-l-[0.04rem] px-4 border-b-[0.04rem] border-fuchsia-400">
                     <div className="flex items-center gap-x-[0.9rem] px-3">
                        <Image src={men} className="w-8 h-8 rounded-full mr-2" />
                        <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">Satish Prajapati</h3>
                        <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">2 days ago</h3>
                     </div>
                     <div className="flex ml-[4rem] flex-col">
                        <h3 className="text-[0.7rem] lg:text-[1.1rem] py-2">All this was Comment section</h3>
                        <div className="flex gap-x-[0.4rem] items-center justify-between">
                           <div className="flex gap-x-[0.6rem]">
                              <BiLike></BiLike>
                              <BiDislike />
                           </div>
                           <h2 className="text-[0.7rem] lg:text-[1rem]">Reply</h2>
                        </div>
                     </div>
                  </div>


               </div>
               <div className="space-y-4 mx-4">
                  <div className="border border-fuchsia-400 rounded-md p-4">
                     <h2 className="text-[0.6rem] lg:text-[0.89rem] font-bold mb-4">Adobe Premiere Pro CC Masterclass: Full Crash Course.</h2>
                     <div className="space-y-2">
                        <h3 className="text-[0.9rem] font-medium">24.5 hours on-demand video</h3>
                        <h3 className="text-[0.9rem] font-medium">10 hours 33 Minutes Left</h3>
                        <h3 className="text-[0.9rem] font-medium">Creator: Yasir Quyoom</h3>
                        <h3 className="text-[0.9rem] font-medium">Last updated 08/2022</h3>
                     </div>
                  </div>
                  <div className="space-y-2">
                     <div className="border border-fuchsia-400 rounded-md flex items-center p-4">
                        <Image src={smallvid} className="w-20 lg:w-1/2 h-auto rounded-md" />
                        <div className="ml-4">
                           <h3 className="text-[0.6rem] lg:text-[0.89rem] font-medium mb-1">The Complete Adobe Premiere Pro Masterclass</h3>
                           <h4 className="text-sm font-medium text-gray-500 mb-1">By: John Smith</h4>
                           <div className="flex items-center">
                              <h5 className="text-sm font-medium mr-2">Last Updated:</h5>
                              <h5 className="text-sm font-medium">10/2022</h5>
                           </div>
                        </div>
                     </div>
                     <div className="border border-fuchsia-400 rounded-md flex items-center p-4">
                        <Image src={smallvid} className="w-20 lg:w-1/2 h-auto rounded-md" />
                        <div className="ml-4">
                           <h3 className="text-[0.6rem] lg:text-[0.89rem] font-medium mb-1">Adobe Premiere Pro CC: Video Editing for Beginners</h3>
                           <h4 className="text-sm font-medium text-gray-500 mb-1">By: Jane Doe</h4>
                           <div className="flex items-center">
                              <h5 className="text-sm font-medium mr-2">Last Updated:</h5>
                              <h5 className="text-sm font-medium">09/2021</h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default VideoComp;
