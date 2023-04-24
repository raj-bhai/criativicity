import React, { useState, useEffect } from "react";
import { navlinks } from "@/constants/navlinks";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import * as userAction from '../redux/action/user';
import { useDispatch } from "react-redux";

const Navbar = () => {
   const [toggle, setToggle] = useState(true);
   const [active, setActive] = useState("Home");
   const [token, setToken] = useState(null);
   const router = useRouter()
   const dispatch = useDispatch();
   const currentRoute = router.pathname;


   useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
         setToken(token)
         dispatch(userAction.getUserDetail())
      }
   }, [])

   const Selected = (index) => {
      if (index === 0 && currentRoute === "/") {
         return true
      }
      else if (index === 1 && currentRoute === "/courses") {
         return true
      }
      else if (index === 2 && currentRoute === "/affiliates") {
         return true
      }
      else if (index === 3 && currentRoute === "/support") {
         return true
      }
      else {
         return false
      }
   }



   return (
      <nav className="w-full fixed top-0 z-40 navbarbg text-white flex py-5 justify-between items-center navbar px-5 md:px-10 lg:px-20">
         <Link href={"/"}>
            {/* <Image src={Logo} alt="" className="h-[1.6rem] object-contain aspect-4/4 w-[11.2rem]" /> */}
            <h1 className="font-pressfont text-[1.3rem] lg:text-[2rem] uppercase">Criativcity</h1>
         </Link>
         <motion.nav animate={{ x: 50 }} transition={{ type: "spring", stiffness: 100, damping: 45 }}>
            {/* <ul className="list-none sm:flex hidden text-white justify-end items-center flex-1">
               {navlinks.map((nav, index) => (
                  index !== 4 ?
                     <li
                        className={` text-white font-Lato ${Selected(index) ? 'text-[1.2rem] decoration-dimPink underline underline-offset-8 ' : 'text-[1.1rem] '}  w-[100px] hover:text-[1.2rem] transition duration-1000`}
                        key={index}>
                        <a href={`${nav.path}`}>{nav.text}</a>
                     </li>
                     :
                     <li className={`text-white text-[1.1rem] mr-8`} key={index}
                        onClick={() => {
                           if (token) {
                              localStorage.removeItem('token');
                              setToken(null)
                              router.reload()
                           } else {
                              router.push('/login')
                           }
                        }}
                     >
                        <a>{token ? "Logout" : nav.text}</a>
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
                     cursor:pointer;
                  }
                  li:last-of-type:hover {
                     background: linear-gradient(95.75deg, #ad00ff 5.19%, #5200ff 104.15%);
                 }
               `}</style>
            </ul> */}

            <ul className="list-none sm:flex hidden text-white justify-end items-center flex-1">
               {navlinks.map((nav, index) => (
                  index !== 4 ? (
                     <div key={index} className={`${(index === 0)? 'w-[90px]' : 'w-[120px]'} h-[50px] flex flex-col justify-center items-center`} >
                        <li
                           className={`text-white font-Lato ${Selected(index) ?
                              `${styles.selectedNav} ${styles.selectedUnderline}` :
                              styles.navLink
                              }`}
                           key={index}
                        >
                           <a href={`${nav.path}`}>{nav.text}</a>
                        </li>
                     </div>
                  ) : (
                     <li
                        className={`${styles.logoutLink} ${styles.loggedIn} ml-2`}
                        key={index}
                        onClick={() => {
                           if (token) {
                              localStorage.removeItem('token');
                              setToken(null);
                              router.reload();
                           } else {
                              router.push('/login');
                           }
                        }}
                     >
                        <a>{token ? 'Logout' : 'Login'}</a>
                     </li>
                  )
               ))}
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
         <div className={`${toggle ? "hidden" : "flex"} p-6 bg-mob-menu absolute z-20 top-[3.9rem] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
               {navlinks.map((nav, index) => (
                  <li
                     key={nav.id}
                     className={`font-pressfont font-medium cursor-pointer text-[16px]  ${active === nav.text ? "text-white" : "text-dimWhite"} ${index === navlinks.length - 1 ? "mb-0" : "mb-4"
                        }`}
                     onClick={() => setActive(nav.text)}
                  >
                     <a href={`${nav.path}`}>{nav.text}</a>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
};


const styles = {
   navLink: 'text-[1.1rem] hover:text-[1.2rem] transition duration-5000',
   selectedNav: 'text-[1.2rem] decoration-dimPink',
   selectedUnderline: 'underline underline-offset-8',
   logoutLink: 'text-white text-[1.1rem] mr-8 cursor-pointer font-weight-bold',
   loggedIn: 'bg-purple-600 rounded-lg px-4 py-2 logibtn',
};

export default Navbar;
