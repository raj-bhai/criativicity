import ReturnPolicy from "@/pages/returnPolicy";
import React from "react";

import earth1 from '../assets/planet/earth1.png'
import earth2 from '../assets/planet/earth2.png'
import sEarth2 from '../assets/planet/sEarth2.png'
import line1 from '../assets/planet/line1.png'


import Image from "next/image";

const Planet = () => {
    return (
        <div className="w-[100%] h-[50%] md:h-[50%] lg:h-[100%] sm:h-[50%] px-[20px]  absolute flex flex-col justify-center  " >
            <div className=" flex" >
                <Image src={line1} alt="line1" className=" line-animate absolute  "></Image>
                <Image src={line1} alt="line1" className="line-animate1 absolute  "></Image>
                <Image src={line1} alt="line1" className="line-animate2 absolute  "></Image>
            </div>
            <div className=" items-center border-yellow-200 sm:border-green-500 md:border-gray-200 lg:border-pink-600  flex flex-row justify-between -rotate-3 px-2 lg:px-4 md:px-8 sm:px-2 " >
                <div className=" flex flex-col items-center justify-center animate-superslow w-[100px] sm:w-[100px] md:w-[150px] lg:w-[300px]  relative  sm:h-[100px] md:h-[150px] lg:h-[300px] h-[100px] " >
                    <Image src={earth1} alt="polygon" className=" animate-slowReverse "></Image>
                    <Image src={sEarth2} alt="polygon" className=" absolute -top-[100px] -right-[10px] lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]  animate-slow"></Image>
                </div>
                <div className=" w-[100px] sm:w-[100px] md:w-[120px] lg:w-[300px]  sm:h-[100px] md:h-[120px] lg:h-[300px] h-[100px]  " >
                    <Image src={earth2} alt="polygon" className="animate-slow"></Image>
                </div>
            </div>
        </div>
    )
}

export default Planet