import React, { useState, useEffect } from "react";
import student from "../assets/student.png";
import Image from "next/image";
import affimg from "../assets/affimg.png";
import ellipse from '../assets/ellipse.png'
import planets from '../assets/Group.png';
import axios from "axios";

import { useSelector } from "react-redux";
import { Apiurl } from "@/constants/url";
import { AiFillLock } from 'react-icons/ai';



const CopyText = () => {
   // const [textToCopy, setTextToCopy] = useState("This is the text to copy.");
   const [copySuccess, setCopySuccess] = useState(false);
   const userDetail = useSelector((state) => state.user.UserDetail)

   const handleCopyClick = () => {
      navigator.clipboard.writeText(userDetail?.referralCodey).then(() => {
         setCopySuccess(true);
         setTimeout(() => {
            setCopySuccess(false);
         }, 3000);
      });
   };

   return (
      <div className="relative">
         <p className="mb-4 text-[30px] font-semibold ">{userDetail?.referralCode}</p>
         <button
            className={`absolute right-0 bottom-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${copySuccess ? "bg-green-500 hover:bg-green-600" : ""
               }`}
            onClick={handleCopyClick}
         >
            {copySuccess ? "Copied!" : "Copy"}
         </button>
      </div>
   );
}


const Popup = (props) => {

   const [email, setEmail] = useState('');
   const [isEmailValid, setIsEmailValid] = useState(true);
   const [loading, setLoading] = useState(false);

   function ReferToFriend(postData) {
      return new Promise((resolve, reject) => {
         axios.post(`${Apiurl}/course/referral`, postData)
            .then(response => {
               resolve(response.data);
               props.onSubmit()
               setEmail("")
               setLoading(false)
            })
            .catch(error => {
               reject(error);

            });
      });
   }

   const SubmitHandler = async () => {
      if (isValidEmail(email)) {
         await setLoading(true)
         ReferToFriend(
            {
               "email": email
            }
         )
      } else {
         setIsEmailValid(false);
      }
   }

   const isValidEmail = (email) => {
      // Basic email validation using regular expression
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
   };

   return (
      props.showPop &&
      <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center">
         <div className="absolute bg-white w-[400px]  p-6 rounded">
            <CopyText />
            <p className="text-[10px] text-green-500 font-semibold" >Share this code to earn through our referral program</p>
            <div
            >
               <label className="block mb-2 font-bold text-gray-700">
                  Refer through Email :
               </label>
               <input
                  className="border rounded w-full py-2 px-3 mb-4"
                  type="text"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value);
                  }}
               />
               {!isEmailValid && (
                  <p className="text-red-500 mb-4">Invalid email address</p>
               )}
               <div className="flex justify-end mt-4">
                  <button
                     className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2 rounded"
                     type="button"
                     onClick={() => {
                        props.onSubmit()
                     }}
                  >
                     Cancel
                  </button>
                  <button
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                     type="submit"
                     onClick={() => {
                        SubmitHandler()
                     }}
                     disabled={loading} // Disable the button while loading is true
                  >
                     {loading ? "Loading..." : "Submit"} {/* Show "Loading..." while loading is true */}
                  </button>
               </div>

            </div>
         </div>
      </div>
   );
}


const Item = ({ locked }) => {
   const classes = locked ? "opacity-50 pointer-events-none" : "";
   return (
      <div className={`border-fuchsia-400 rounded-lg px-4 py-6 flex justify-center items-center text-white text-center border-[0.04rem] ${classes}`}>
         {
            !locked &&
            <div>
               <h3>Available Balance</h3>
               <h3>&#8377; 250</h3>
            </div>
         }
         {
            locked &&
            <AiFillLock
               size={40}
            />
         }
      </div>
   )
}


const Affiliate = () => {

   const [showPop, setShowPop] = useState(false);

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
               {/* <div className="paymenBTn">
                  <button className="logibtn lg:px-4 lg:py-3 py-2 px-2 font-Lato font-bold uppercase text-white text-[0.8rem] lg:text-[1.1rem] rounded-lg">
                     Manage Payments
                  </button>
               </div> */}
            </div>
            <div className="flex items-center navbarbg justify-center mt-[3.3rem] ">
               <section className="mt flex justify-center border-[0.04rem]  border-fuchsia-400 rounded-lg lg:w-[80%]  px-2 mx-2 py-1">
                  <div className="adobe-vid-cont lg:flex lg:items-start w-full justify-between">
                     <div className="text-cont mx-auto text-white">
                        <h2 className="text-[1.2rem]  mt-4">Here&apos;s how we are doing </h2>
                        <div className="flex items-center justify-center mt-[2rem]">
                           <div className="grid grid-cols-3 gap-4">
                              <Item
                                 locked={true}
                              />
                              <Item
                                 locked={true}
                              />
                              <Item />
                              <Item />
                              <Item />
                              <Item />
                           </div>
                        </div>
                     </div>
                     <div className="vidimg-cont">
                        <div className="videocont lg:w-[500px] lg:h-[340px] mt-7 ">
                           <Image src={affimg} className="rounded-lg" alt="image affiliate"></Image>
                        </div>
                        <div className="cta flex items-center justify-end pr-[20px] pb-[10px]  gap-x-8 lg:gap-x-14 mt-3 lg:mt-10 ">
                           {/* <div className="imgencont flex items-center justify-start flex-col">
                              <div className="w-full h-full aspect-3/2 object-contain flex items-center justify-center gap-2">
                                 <Image src={student} alt="Student Enrolled"></Image>
                                 <h1 className="text-[#00DB8C] text-[1.5rem] lg:text-[2rem] font-bold font-Lato">414</h1>
                              </div>
                              <h1 className="text-white font-normal font-Lato text-[0.8rem] lg:text-[1.1rem]">Recently Joined</h1>
                           </div> */}
                           {/* <div className="price text-white">
                              <h3>$199</h3>
                           </div> */}
                           <div className="btn">
                              <button className="logibtn lg:px-4 lg:py-3 py-2 px-2 font-Lato font-bold uppercase text-white text-[0.8rem] lg:text-[1.1rem] rounded-lg"
                                 onClick={() => {
                                    setShowPop(true)
                                 }}
                              >
                                 Invite Friends
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
            <div className=" text-white mt-4 outerTextDiv flex border-[0.04rem]  rounded-lg border-fuchsia-400 items-center justify-around lg:justify-between lg:mx-[8.5rem]">
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
               <Image src={planets} alt="planets"></Image>
            </div>
            <div className="pt-12">
               <Image src={ellipse} alt="ellipse"></Image>
            </div>
            <Popup
               showPop={showPop}
               onSubmit={() => {
                  setShowPop(false)
               }}
            />
         </section>
      </>
   );
};
export default Affiliate;
