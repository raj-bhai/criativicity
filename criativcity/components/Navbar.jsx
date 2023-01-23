import React, { useState, useEffect } from "react";
import { navlinks } from "@/constants/navlinks";
import Image from "next/image";
import Logo from "../public/img/Criativcity.png";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Link from "next/link";
import styles from "@/src/style";

const Navbar = () => {
   const [toggle, setToggle] = useState(true);
   const [active, setActive] = useState("Home");
   return (
      <nav className="w-full fixed top-0 z-40 navbarbg text-white flex py-5 justify-between items-center navbar px-5 md:px-10 lg:px-20">
         <Link href={"/"}>
            {/* <Image src={Logo} alt="" className="h-[1.6rem] object-contain aspect-4/4 w-[11.2rem]" /> */}
            <h1 className="font-pressfont text-[1.3rem] lg:text-[2rem] uppercase">Criativcity</h1>
         </Link>
         <motion.nav animate={{ x:50 }} transition={{ type: "spring", stiffness: 100, damping:30 }}>
            <ul className="list-none sm:flex hidden text-white justify-end items-center flex-1">
               {navlinks.map((nav, index) => (
                  <li className={`text-white text-[1.1rem] mr-8`} key={index}>
                     <a href={`#${nav.id}`}>{nav.text}</a>
                  </li>
               ))}
               <style jsx>{`
                  li:last-of-type {
                     background: linear-gradient(95.75deg, #5200ff 5.19%, #ad00ff 104.15%);
                     font-family: "Lato";
                     font-style: "regular";
                     font-size: 17px;
                     padding: 12px 47px;
                     border-radius: 8px;
                     font-weight: 650;
                     align-content: Center;
                     vertical-align: Center;
                  }
               `}</style>
            </ul>
         </motion.nav>
         <div
            className="sm:hidden flex flex-1 justify-end items-center text-white"
            onClick={() => {
               setToggle((prev) => !prev);
            }}
         >
            {toggle ? <CgMenuRight className="" size={32} /> : <CgClose size={32} />}
         </div>
         <div className={`${toggle ? "hidden" : "flex"} p-6 bg-mob-menu absolute z-20 top-12 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
               {navlinks.map((nav, index) => (
                  <li
                     key={nav.id}
                     className={`font-pressfont font-medium cursor-pointer text-[16px]  ${active === nav.text ? "text-white" : "text-dimWhite"} ${
                        index === navlinks.length - 1 ? "mb-0" : "mb-4"
                     }`}
                     onClick={() => setActive(nav.text)}
                  >
                     <a href={`#${nav.id}`}>{nav.text}</a>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
};
export default Navbar;
