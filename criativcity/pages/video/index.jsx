import React,{useEffect, useState} from "react";
import VideoComp from "@/components/VideoComp";
import Navbar from "@/components/Navbar";

const index = () => {
  return (
    <>
    <Navbar></Navbar>
    <VideoComp/>
    </>
  )
}
export default index