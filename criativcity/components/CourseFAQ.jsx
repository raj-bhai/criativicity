import React, { useState, useEffect } from "react";
import styles from "@/src/style";
import heroPlanet from "../assets/Group.png";
import * as CourseAction from '../redux/action/course';
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { slideIn, staggerContainer, textVariant, textVariant2 } from "@/utils/motion";
import rectange from "../assets/Rectangle.png";
import polygon from "../assets/polygon2.png";

let arr = [
   {
      title: "Master Adobe Premiere Pro",
      value: [
         {
            text: "Edit and enhance video footage"
         },
         {
            text: "Learn about the interface and various panels and workspaces"
         },
         {
            text: "Acquire the sense to create motion graphics and add effects as you desire"
         },
         {
            text: "Add music, sound effects, and voiceovers to your videos"
         },
         {
            text: "Create stunning visual effects"
         },
         {
            text: "Export your videos in a variety of formats for different platforms and many more...."
         }
      ]
   },
   {
      title: "Understand the Psychology behind Editing",
      value: [
         {
            text: "How and why some effects are used"
         },
         {
            text: "Understanding the requirements of different editing style in different genres"
         },
         {
            text: "The mindset behind the type of storytelling"
         },
         {
            text: "Deep dive into different industries and how to stylise your edit in each of them"
         },
      ]
   },
   {
      title: "Decoding Youtubers and industries",
      value: [
         {
            text: "Will decode the effects and how its done in Premiere pro"
         },
         {
            text: "Learn how to do complex editing in Premiere pro if necessary"
         },
         {
            text: "Take 5 different big industries or niche and completely decode them and explain"
         }
      ]
   },
   {
      title: "Businesses With Editing",
      value: [
         {
            text: "Learn everything about Freelancing"
         },
         {
            text: "How to get your first client"
         },
         {
            text: "Various different business ideas related to video editing"
         },
         {
            text: "How to do video editing fulltime"
         },
         {
            text: "Job and offers from us"
         }
      ]
   },

]

const CourseFAQ = () => {

   const dispatch = useDispatch()
   const Courses = useSelector((state) => state.course.CourseList);

   useEffect(() => {
      if (!Courses?.length) {
         dispatch(CourseAction.getAllCourse());
      }
   }, [])

   const Item = (props) => {
      const [show, setShow] = useState(false);
      return (
         <div
            key={props.key}
            className=" rounded-lg border-[0.04rem] border-fuchsia-400 px-4 py-3"
            onClick={() => {
               setShow(!show)
            }}
         >
            <h3 className="text-white relative flex items-center justify-between text-[0.9rem] lg:text-[1.8rem]  font-Lato">
               <h2 className="w-[90%] lg:w-[95%] mr-1 font-poppins">{props.item.title}</h2>
               {show ? <IoIosArrowUp size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowUp> : <IoIosArrowDown size={45} className="border-[0.04rem] rounded-md  border-fuchsia-400 px-2 py-2"></IoIosArrowDown>}
            </h3>

            {show && (
               <div className="text-left text-white font-Lato lg:text-[1.2rem] text-[0.9rem]">
                  {
                     props.item.value.map((value, i) => (
                        <h6 className="font-poppins" key={i} >&mdash;  {value.text} </h6>
                     ))
                  }
               </div>
            )}
         </div>
      )
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
         <div className="faqqna navbarbg lg:space-y-5 space-y-2 mt-3 w-[50%] ">
            {
               arr.map((x, index) => {

                  return (
                     <Item
                        key={index}
                        item={x}
                     />
                  )
               })
            }
         </div>
      </section>
   );
};

export default CourseFAQ;
