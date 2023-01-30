import Navbar from '@/components/Navbar';
import React from 'react';
import { BsEye, BsFacebook, BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';


const LoginScreen = () => {

    return (
        <>
            <Navbar />
            <div className='w-full h-full bg-planets bg-contain bg-no-repeat rounded-top-[120px] z-[0]'>
                <section className='bg-planets min-h-screen flex items-center justify-center mt-24 bg-contain bg-no-repeat rounded-top-[120px]'>
                    <div className='bg-black text-white  shadow-lg max-w-3xl p-5'>
                        <div className='justify-center items-center px-16'>
                            <h2 className='font-pressfont text-[1rem] lg:text-[1.5rem]  pressFont text-transparent text-white'>
                                {" "}
                                Welcome Back</h2>
                        </div>

                        <form action='' className='flex flex-col gap-4'>
                            <span>Email</span>
                            <input className='p-2' type="text" name="email" placeholder='name@email.com' autoComplete='off' />
                            <div className='relative'>
                                <span>Password</span>
                                <input className='p-2 w-full' type="password" name="password" placeholder='Enter Your Password' autoComplete='off'
                                />
                                <BsEye className='absolute top-1/2 right-3' width="16" height="16" />
                            </div>
                            <span className='text-dimPink'>Forget Password?</span>
                            <button className='bg-gradient-to-r from-dimPink to-dimPurple text-white py-2 px-3'>Login</button>
                        </form>
                        <div className='mt-5 grid grid-cols-3 items-center text-dimPink'>
                            <hr className='border-gray-400' />
                            <p className='text-center text-sm' >OR</p>
                            <hr className='border-gray-400' />
                        </div>
                        <button className=' border-dimPink border-2 py-2 px-3 items-center w-full mt-4 flex justify-center text-sm'><FcGoogle width="25px" height="25px" className='mr-8' />Continue with Google</button>
                        <button className='border-dimPink border-2 py-2 px-3 items-center w-full mt-4 flex justify-center text-sm'><BsFacebook width="25px" height="25px" className='mr-8' />Continue with Facebook</button>
                        <button className='border-dimPink border-2 py-2 px-3 items-center w-full mt-4 flex justify-center text-sm'><BsApple width="25px" height="25px" className='mr-8' />Continue with Apple</button>
                        <div className='mt-3 text-xs flex justify-center items-center'>
                            <p>New to Coursera?</p>
                            <button className='py-2 hover:scale-110 duration-300'><a href='signup'>Sign up</a></button>
                        </div>
                        <hr className='border-white' />
                        <div className='justify-center items-center text-sm'>
                            <p className='text-dimPink'>Log in with your organization</p>
                            <br></br>
                            <p className='text-white'>Having trouble logging in?<u>Learner Help center</u></p>
                            <br />
                            <p className='text-white'>This site is protected by reCAPTCHA Enterprise and <br />the Google <u>Privacy Policy</u> and <u>Terms of Service</u> apply.</p>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default LoginScreen;