import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import { BsEye, BsFacebook, BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Apiurl } from '@/constants/url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignupScreen = () => {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const SignUp = async () => {

        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        console.log(regex.test(email))
        console.log("email :", email)
        console.log("password :", password)
        console.log("Name :", fullName)
        if (fullName.length < 3) {
            toast.warn("Invalid name")
            return
        }
        if (!regex.test(email)) {
            toast.warn("Invalid email")
            return
        }
        if (password.length < 6) {
            toast.warn("Too short password")
            return
        }

        if (regex.test(email) && password.length >= 6 && fullName.length >= 3) {
            const postData = {
                "name": fullName,
                "email": email,
                "password": password
            };
            axios.post(`${Apiurl}/auth/Register`, postData)
                .then((response) => {
                    if (response.data.success) {
                        const token = response.data.token
                        localStorage.setItem('token', token);
                        router.push('./')
                    } else {
                        toast.warn(response.data.message)
                    }
                })
                .catch((error) => {
                    console.error('Error creating post:', error);
                });
        } else {
            console.log("check input fields")
        }
    }

    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className='w-full h-full bg-planets bg-contain bg-no-repeat rounded-top-[120px] z-[0] mt-[80x] navbarbg'>
                <section className='bg-planets min-h-screen flex items-center justify-center pt-8 bg-contain bg-no-repeat rounded-top-[120px]'>
                    <div className='bg-black text-white border border-fuchsia-500 rounded-lg  shadow-lg max-w-3xl p-10'>
                        <div className='justify-center items-center px-16'>
                            <h2 className='font-pressfont text-[1rem] lg:text-[2rem]  pressFont text-white'>Create Account</h2>
                        </div>
                        <div className='flex flex-col gap-4' >
                            <div className='relative'>
                                <span>FULL NAME</span>
                                <input className='p-2 w-full text-gray-500' type="text" name="name" placeholder='Enter Your FullName' autoComplete='off'
                                    value={fullName}
                                    onChange={(e) => {
                                        setFullName(e.target.value)
                                    }}
                                />
                            </div>
                            <div className='relative'>
                                <span>EMAIL</span>
                                <input className='p-2 w-full text-gray-500' type="text" name="email" placeholder='name@email.com' autoComplete='off'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className='relative'>
                                <span>PASSWORD</span>
                                <input className='p-2 w-full text-gray-500' type="password" name="password" placeholder='create Your Password' autoComplete='off'
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                                <BsEye className='absolute top-1/2 right-3 -translate-y-1/2' width="16" height="16" />
                            </div>
                            <span className='text-dimPink'>Have an account? <span className='cursor-pointer hover:text-[#fff] ' 
                            onClick={() => {
                                router.push('./login')
                            }}
                            >Login</span></span>
                            <button className='logibtn text-white py-2 px-3'
                                onClick={() => {
                                    SignUp()
                                }}
                            >Sign Up</button>
                        </div>
                        {/* Google Login */}
                        {/* <div className='mt-5 grid grid-cols-3 items-center text-dimPink'>
                            <hr className='border-gray-400' />
                            <p className='text-center text-sm' >OR</p>
                            <hr className='border-gray-400' />
                        </div>
                        <button className=' border-dimPink border-2 py-2 px-3 items-center w-full mt-4 flex justify-center text-sm'><FcGoogle width="25px" height="25px" className='mr-8' />Continue with Google</button> */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default SignupScreen;