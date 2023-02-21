import React,{useEffect, useState} from "react";
import VideoComp from "@/components/VideoComp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <>
    <Navbar></Navbar>
    <VideoComp/>
    <Footer></Footer>
    </>
  )
}
export default index