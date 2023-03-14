import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { BsEye, BsFacebook, BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { Apiurl } from '@/constants/url';
import { useRouter } from 'next/router';


const LoginScreen = () => {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = (email, password) => {
        console.log("hello mf")
        const postData = {
            email: email,
            password: password,
        };
        axios.post(`${Apiurl}/auth/Login`, postData)
            .then((response) => {
                if (response.data.success) {
                    const token = response.data.token
                    localStorage.setItem('token', token);
                    router.push('/')
                }
            })
            .catch((error) => {
                console.error('Error creating post:', error);
            });
    }

    return (
        <>
            <Navbar />
            <div className='w-full h-full bg-planets bg-contain bg-no-repeat rounded-top-[120px] mt-20 navbarbg'>
                <section className='bg-planets min-h-screen flex items-center justify-center  bg-contain bg-no-repeat '>
                    <div className='bg-black shadow-lg max-w-3xl p-5 '>
                        <div className='justify-center items-center px-16 text-white'>
                            <h2 className='font-pressfont text-[1rem] lg:text-[1.5rem] pressFont  '>
                                Welcome Back</h2>
                        </div>
                        {/* 
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            Login(email, password);
                        }} className='flex flex-col gap-4 text-white '> */}
                        <div className='flex flex-col gap-4 text-white ' >
                            <div className='relative'>
                                <span>EMAIL</span>
                                <input className='p-2 w-full text-gray-500' type="text" name="email" placeholder='name@email.com' autoComplete='off'
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className='relative'>
                                <span>PASSWORD</span>
                                <input className='p-2 w-full text-gray-500' type="password" name="password" placeholder='Enter Your Password' autoComplete='off'
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                                <BsEye className='absolute top-1/2 right-3 text-black' width="16" height="16" />
                            </div>
                            <span className='text-dimPink'>Forget Password?</span>
                            <button className='logibtn text-white py-2 px-3'
                                onClick={() => {
                                    Login(email, password)
                                }}
                            >Login</button>
                        </div>
                        {/* </form> */}
                        <div className='mt-5 grid grid-cols-3 items-center text-dimPink'>
                            <hr className='border-gray-400' />
                            <p className='text-center text-sm' >OR</p>
                            <hr className='border-gray-400' />
                        </div>
                        <button className=' border-dimPink border-2 py-2 px-3 items-center w-full mt-4 flex justify-center text-sm text-white'><FcGoogle width="25px" height="25px" className='mr-8 text-white' />Continue with Google</button>
                        {/* <button className='border-dimPink border-2 py-2 px-3 items-center w-full mt-4 flex justify-center text-sm text-white'><BsFacebook width="25px" height="25px" className='mr-8 text-white' />Continue with Facebook</button>
                        <button className='border-dimPink border-2 py-2 px-3 items-center w-full mt-4 flex justify-center text-sm text-white'><BsApple width="25px" height="25px" className='mr-8' />Continue with Apple</button> */}
                        <div className='mt-3 text-xs flex justify-center items-center text-white'>
                            <p>New to Coursera?</p>
                            <button className='py-2 hover:scale-110 duration-300 ml-2'><a href='signup'>Sign up</a></button>
                        </div>
                        <hr className='border-white' />
                        <div className='justify-center items-center text-sm text-white'>
                            {/* <p className='text-dimPink'>Log in with your organization</p> */}
                            <br></br>
                            <p className='text-white'>Having trouble logging in?<u>Learner Help center</u></p>
                            <br />
                            <p className='text-white'>This site is protected by reCAPTCHA Enterprise and <br />the Google <u>Privacy Policy</u> and <u>Terms of Service</u> apply.</p>
                        </div>
                    </div>
                </section>

            </div >
        </>
    )
}

export default LoginScreen;