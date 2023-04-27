import React from 'react';
import Navbar from '@/components/Navbar';
import contactimg from '../../public/img/contactus.png';
import whatsappimg from '../../public/img/whatsappimg.png';
import discordimg from '../../public/img/discordimg.png';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Subcontent from '@/components/Subcontent';
import ellipse from '../../assets/ellipse.png';
import referral from '../../assets/gif/support.gif';
import Planet from '@/components/planet';
import Rain from '@/components/rain';

const SupportScreen = () => {
    return (
        <>
            <Navbar />
            <div className=' bg-contain bg-no-repeat  navbarbg'>
                {/* <Rain /> */}
                <section className=' min-h-screen flex  items-center justify-center bg-contain bg-no-repeat '>
                    <div className='flex lg:flex-row flex-col sm:flex-col md:flex-col items-center justify-center gap-4 lg:gap-16  '>
                        <div className='items-center justify-center w-[350px] h-[350px] lg:w-[700px] lg:h-[700px] '>
                            <Image src={referral} alt="" />
                        </div>
                        <div className=' min-w-[400px] flex flex-col justify-center '>
                            <div className='justify-center items-center px-16 text-white'>
                                <h2 className='font-pressfont text-[1.5rem] lg:text-[2rem]  pressFont text-transparent bg-clip-text bg-gradient-to-r from-dimPink to-dimPurple'>
                                    CONTACT US</h2>
                            </div>

                            <div action='' className='flex flex-col gap-4 text-white mt-10'>
                                <div className="border-2 border-fuchsia-50 h-[50px]  rounded-lg relative flex items-center justify-between">
                                    {/* <Image src={whatsappimg} alt="" className='absolute top-1/2 left-1' width="16" height="16" /> */}
                                    <input className="outline-none px-2 py-3 bg-transparent" placeholder="Contact us on WhatsApp" type="text" />
                                    <button
                                        className="px-5 border-2 mx-1 rounded-lg py-2 h-[35px] flex items-center justify-center logibtn text-white "
                                        onClick={() => {
                                            window.open('https://wa.me/8413802010')
                                        }}
                                    >Chat</button>
                                </div>

                                <div className="border-2 border-fuchsia-50 h-[50px] rounded-lg relative flex items-center justify-between ">
                                    {/* <Image src={discordimg} alt="" className='absolute top-1/2 left-1' width="16" height="16" /> */}
                                    <input className="outline-none px-2 py-3 bg-transparent" placeholder="Contact us on Discord" type="text" />
                                    <button className="px-5 border-2 mx-1 h-[35px] flex items-center justify-center rounded-lg py-2 logibtn text-white "
                                        onClick={() => {
                                            window.open('https://discord.gg/9gUHCnRbuR')
                                        }}
                                    >Chat</button>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>
                <div className="pt-12">
                    <Image src={ellipse} className="rounded-lg" alt=''></Image>
                </div>
                {/* <Subcontent /> */}
                <Footer />

            </div>
        </>
    )
}

export default SupportScreen