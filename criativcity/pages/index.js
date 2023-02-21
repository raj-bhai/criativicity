import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "@/src/style";
import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import LowMidSection from "@/components/LowMidSection";
import CourseFAQ from "@/components/CourseFAQ";
import Instructor from "@/components/Followus";
import FollowUs from "@/components/Followus";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import Subcontent from "@/components/Subcontent";

export default function Home() {
   return (
      <>

         <Head>
            <title>Criativcity</title>
            <meta name="description" content="Best Video Editing Platform" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className=" bg-black-gradient w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
               <div className={`${styles.boxWidth}`}>
                  <Navbar />
               </div>
            </div>

            <div className={`navbarbg ${styles.flexCenter}`}>
               <div className={`${styles.boxWidth}`}>
                  <Hero />
               </div>
            </div>

            <div className={`navbarbg `}>
               <div className={`${styles.boxWidth}`}>
                  <MidSection />
               </div>
            </div>

            <div className={`navbarbg `}>
               <div className={`${styles.boxWidth}`}>
                  <LowMidSection />
               </div>
            </div>

            <div className={`navbarbg `}>
               <div className={`${styles.boxWidth}`}>
                  <CourseFAQ />
               </div>
            </div>
            <div className={`navbarbg `}>
               <div className={`${styles.boxWidth}`}>
                  <FollowUs />
               </div>
            </div>
            <div className={`navbarbg `}>
               <div className={`${styles.boxWidth}`}>
                  <Quote />
               </div>
            </div>
            <div className={`navbarbg `}>
               <div className={`${styles.boxWidth}`}>
                  <Subcontent />
               </div>
            </div>

            <div className={`navbarbg `}>
               <div className={`${styles.boxWidth}`}>
                  <Footer />
               </div>
            </div>
         </div>
      </>
   );
}
