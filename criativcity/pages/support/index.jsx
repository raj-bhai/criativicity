import React from 'react';
import Navbar from '@/components/Navbar';
import contactimg from '../../public/img/contactus.png';
import whatsappimg from '../../public/img/whatsappimg.png';
import discordimg from '../../public/img/discordimg.png';
import Image from 'next/image';
import Footer from '@/components/Footer';

const SupportScreen = () => {
    return (
        <>
            <Navbar />
            <div className='w-full h-full bg-planets bg-contain bg-no-repeat rounded-top-[120px] mt-24 navbarbg'>
                <section className='bg-planets min-h-screen flex items-center justify-center bg-contain bg-no-repeat '>
                    <div className='flex flex-row'>
                        <div className='w-1/2 items-center justify-center'>
                            <Image src={contactimg} alt="" />

                        </div>
                        <div className='w-1/2'>
                            <div className='justify-center items-center px-16 text-white'>
                                <h2 className='font-pressfont text-[1rem] lg:text-[1.5rem]  pressFont text-dimPink '>
                                    CONTACT US</h2>
                            </div>

                            <form action='' className='flex flex-col gap-4 text-white '>
                                <div className='relative'>
                                    <Image src={whatsappimg} alt="" className='absolute top-1/2 left-1' width="16" height="16" />
                                    <input className='p-2 w-full border-dimPink border-2' type="text" name="whatapp" placeholder='Contact us on WhatsApp' autoComplete='off' />
                                    <button className='absolute bg-gradient-to-r from-dimPink to-dimPurple py-2 px-3 rounded-sm right-3'>
                                        whatapp
                                    </button>
                                </div>
                                <div className='relative'>
                                    <Image src={discordimg} alt="" className='absolute top-1/2 left-1' width="16" height="16" />
                                    <input className='p-2 w-full border-dimPink border-2' type="text" name="" placeholder='Contact us on Discord' autoComplete='off'
                                    />
                                    <button className='absolute bg-gradient-to-r from-dimPink to-dimPurple py-2 px-3 rounded-sm right-3'>
                                        whatapp
                                    </button>
                                </div>
                            </form>

                        </div>

                    </div>

                </section>
                <Footer />

            </div>
        </>
    )
}

export default SupportScreen