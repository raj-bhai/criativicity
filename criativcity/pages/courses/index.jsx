import React,{useState,useEffect} from "react"
import Navbar from "@/components/Navbar"
import CourseComp from "@/components/CourseComp"
import FollowUs from "@/components/Followus"
import Subcontent from "@/components/Subcontent"
import Footer from "@/components/Footer"
const index = () => {
  return (
    <>
    <Navbar/>
    <CourseComp/>
    <FollowUs/>
    <Subcontent/>
    <Footer/>
    </>
  )
}
export default index