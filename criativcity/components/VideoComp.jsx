import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import men from "../assets/men.png";
import { AiOutlineComment, AiFillLock } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaBackward } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const Video_ = (props) => {
   const videoRef = useRef(null);
   return (
      <video
         className="w-full h-auto  rounded-lg min-h-[500px] bg-[#000]"
         allow="autoplay; fullscreen"
         controls
         src={props.src}
         onEnded={() => props.onVideoEnd()}
         ref={videoRef}
         poster={props.thumbnail}
      ></video>
   );
};

const VideoComp = () => {
   const data = useSelector((state) => state.dummyData.data);
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [selectedVideo, setSelectedVideo] = useState("");
   const [loading, setLoading] = useState(false);
   const videoListRef = useRef(null);
   const mainScrollRef = useRef(null);

   useEffect(() => {
      setSelectedVideo(data[0].videos[selectedIndex].url);
   }, [selectedIndex]);

   const AllowedToWatch = (selectedI, i) => {
      if (selectedI + 1 >= i) {
         return true;
      } else {
         return false;
      }
   };

   const Completed = (selectedI, i) => {
      if (selectedI > i) {
         return true;
      } else {
         return false;
      }
   };




   return (
      <>
         <section className="navbarbg pt-32 text-white font-Lato pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 mx-8 lg:mx-12" ref={mainScrollRef} >
               <div className=" border-fuchsia-400 col-span-2 rounded-lg mx-4 lg:w-[100%]">
                  {!loading && (
                     <Video_
                        src={selectedVideo}
                        thumbnail={data[0].videos[selectedIndex].thumbnail}
                        onVideoEnd={async () => {
                           if (data[0].videos.length - 1 > selectedIndex) {
                              await setLoading(true);
                              await setSelectedIndex(selectedIndex + 1);
                              if (data[0].videos.length - 1 > selectedIndex + 1) {
                                 await videoListRef.current.children[selectedIndex + 1].scrollIntoView({ behavior: "smooth", block: "start" });
                              }
                              await setLoading(false);
                           }
                        }}
                     // poster={data[0].videos[selectedIndex].thumbnail}
                     />
                  )}
                  {/* <Image src={vidImg} alt="men" className="w-full h-auto rounded-t-lg " /> */}
                  <div className="p-4 border-[0.03rem] border-fuchsia-400 rounded-t-lg mt-4">
                     <h2 className="text-[1rem] font-Lato lg:text-[1.2rem] font-bold mb-4">{data[0].videos[selectedIndex].title}</h2>
                     <div className="flex justify-between items-center">
                        <div className="flex items-center">
                           <Image src={men} alt="men" className="w-8 h-8 rounded-full mr-2" />
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
                           {data[0].videos[selectedIndex].description}
                           {/* In this video, We are explaining about Introduction to Video Editing. Please do watch the complete video for in-depth
                           information. */}
                        </h2>
                     </div>
                     {
                        data[0].videos[selectedIndex]?.comments?.length ?
                           <div className="commentFilter flex items-center justify-between">
                              <div className="cms flex items-center gap-x-[0.7rem]">
                                 <AiOutlineComment className="lg:w-7 lg:h-7" />
                                 <h3>{data[0].videos[selectedIndex]?.comments?.length}</h3>
                                 <h3 className="text-[0.6rem] lg:text-[1.1rem]">comments</h3>
                              </div>
                              <div className="filter gap-x-[0.6rem] flex items-center ">
                                 <div className="">
                                    <GoSettings className="rotate-90 lg:w-4 lg:h-4" />
                                 </div>
                                 <div className="text-[0.6rem] lg:text-[1.1rem]">Sort By</div>
                              </div>
                           </div> : null
                     }
                  </div>
                  <div className="flex py-2.5 items-center border-r-[0.04rem] border-l-[0.04rem] px-4 border-b-[0.04rem] border-fuchsia-400 w-full">
                     <Image src={men} alt="men" className="w-8 h-8 rounded-full mr-2" />
                     <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">Satish Prajapati</h3>
                     <input
                        className=" mx-4 py-2 bg-transparent border-none focus:border-none border-transparent outline-none"
                        placeholder="Add a comment"
                        type="text"
                     />
                  </div>
                  {
                     data[0].videos[selectedIndex].comments.map((comment, i) => (
                        <div key={i} className="flex py-3 items-start flex-col border-r-[0.04rem] border-l-[0.04rem] px-4 border-b-[0.04rem] border-fuchsia-400">
                           <div className="flex items-center gap-x-[0.9rem] px-3">
                              <Image src={men} alt="men" className="w-8 h-8 rounded-full mr-2" />
                              <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">{comment.user}</h3>
                              <h3 className="text-[0.5rem] lg:text-[0.97rem] font-medium">2 days ago</h3>
                           </div>
                           <div className="flex ml-[4rem] flex-col">
                              <h3 className="text-[0.7rem] lg:text-[1.1rem] py-2">{comment.data}</h3>
                              <div className="flex gap-x-[0.4rem] items-center justify-between">
                                 <div className="flex gap-x-[0.6rem]">
                                    <BiLike></BiLike>
                                    <BiDislike />
                                 </div>
                                 <h2 className="text-[0.7rem] lg:text-[1rem]">Reply</h2>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
               {data.map((item, index) => (
                  <div className="space-y-4 mx-4 border-[0px] pr-[20px] " key={index}>
                     <div className="border border-fuchsia-400 rounded-md p-4">
                        {/* <h2 className="text-[0.6rem] lg:text-[0.89rem] font-bold mb-4">Adobe Premiere Pro CC Masterclass: Full Crash Course</h2> */}
                        <h2 className="text-[0.6rem] lg:text-[0.89rem] font-bold mb-4">
                           {item.courseName}
                        </h2>
                        {item.details.map((texts, index) => (
                           <div className="space-y-2" key={index}>
                              <h3 className="text-[0.9rem] font-medium">{texts}</h3>
                              {/* <h3 className="text-[0.9rem] font-medium">10 hours 33 Minutes Left</h3>
                              <h3 className="text-[0.9rem] font-medium">Creator: Yasir Quyoom</h3>
                              <h3 className="text-[0.9rem] font-medium">Last updated 08/2022</h3> */}
                           </div>
                        ))}
                     </div>
                     <div className="space-y-4 border- border-red-300 py-2 px-1 no-scrollbar overflow-auto h-[550px]" ref={videoListRef} >
                        {item.videos.map(
                           (viddet, index1) =>
                              // ((selectedIndex < index1) && (selectedIndex !== index1)) &&
                              // ((selectedIndex && index1 === selectedIndex - 1) || selectedIndex < index1) && 
                              (selectedIndex !== index1) &&
                              (
                                 <div
                                    className={`space-y-2 relative  ${AllowedToWatch(selectedIndex, index1) ? " cursor-pointer  " : "cursor-not-allowed "
                                       } ${Completed(selectedIndex, index1) ? "bg-[#CACFD2] " : ""}  `}
                                    key={index1}
                                    onClick={async () => {
                                       if (AllowedToWatch(selectedIndex, index1)) {
                                          await setLoading(true);
                                          await setSelectedIndex(index1);
                                          await setLoading(false);
                                          if (index1 !== item.videos.length - 1) {
                                             videoListRef.current.children[index1].scrollIntoView({ behavior: "smooth", block: "start" });
                                          }
                                       }
                                    }}
                                 >
                                    <div className="border border-fuchsia-400 rounded-md flex items-center p-4">
                                       <img src={viddet.thumbnail} alt="thumbnail" className="w-20 lg:w-1/2 h-auto rounded-md" />
                                       <div className="ml-4">
                                          <h3 className="text-[0.6rem] lg:text-[0.89rem] font-medium mb-1">{viddet.title}</h3>
                                          <h4 className="text-sm font-medium text-gray-500 mb-1">By: John Smith</h4>
                                          <div className="flex items-center">
                                             <h5 className="text-sm font-medium mr-2">Duration</h5>
                                             <h5 className="text-sm font-medium">{viddet.duration}</h5>
                                          </div>
                                       </div>
                                    </div>
                                    {!AllowedToWatch(selectedIndex, index1) ? (
                                       <div className=" absolute w-[50px] h-[50px] bg-white  top-[30%] left-[45%] flex items-center justify-center rounded-lg ">
                                          <AiFillLock color="#000" size={30} />
                                       </div>
                                    ) : null}
                                    {
                                       (selectedIndex + 1 === index1) ?
                                          <div className=" absolute w-[50px] h-[50px] bg-white  top-[30%] left-[45%] flex items-center justify-center rounded-lg " >
                                             <h1 className="text-[#000] font-bold " >Next</h1>
                                          </div>
                                          : null
                                    }
                                    {Completed(selectedIndex, index1) ? (
                                       <div className=" absolute w-[50px] h-[50px] bg-white top-[30%] left-[45%] flex items-center justify-center rounded-lg ">
                                          <FaBackward color="#000" size={30} />
                                       </div>
                                    ) : null}
                                 </div>
                              )
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </>
   );
};

export default VideoComp;
