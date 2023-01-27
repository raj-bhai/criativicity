import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "@/src/style";
import Hero from "@/components/Hero";

export default function Home() {
   return (
      <>
         <Head>
            <title>Criativcity</title>
            <meta name="description" content="Best Video Editing Platform" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato&family=Yatra+One&display=swap" rel="stylesheet" />
         </Head>
         <div className=" bg-black-gradient w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
               <div className={`${styles.boxWidth}`}>
                  <Navbar />
               </div>
            </div>

            <div className={`navbarbg ${styles.flexStart}`}>
               <div className={`${styles.boxWidth}`}>
                  <Hero />
               </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
               <div className={`${styles.boxWidth}`}>{/* components */}</div>
            </div>
         </div>
      </>
   );
}
