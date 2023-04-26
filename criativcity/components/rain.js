
import React, { useState } from "react";
import line1 from '../assets/planet/line1.png'


import Image from "next/image";

const Rain = () => { 

    return (
        <div className="w-[100%] h-[50%] md:h-[50%] lg:h-[100%] sm:h-[50%] px-[20px] absolute flex flex-col justify-center  " >
            <div className=" flex" >
                <Image src={line1} alt="line1" className=" line-animate absolute  "></Image>
                <Image src={line1} alt="line1" className="line-animate1 absolute  "></Image>
                <Image src={line1} alt="line1" className="line-animate2 absolute  "></Image>
            </div>
        </div>
    )
}

export default Rain