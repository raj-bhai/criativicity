import React, { useState, useEffect } from 'react';
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
    const [domLoaded, setDomLoaded] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    const Login = (email, password) => {
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
            {
                domLoaded &&
                <div className='w-full h-full bg-planets bg-contain bg-no-repeat rounded-top-[100px] mt-[80px] navbarbg'>
                    <section className='bg-planets min-h-screen flex items-start justify-center pt-[100px]  bg-contain bg-no-repeat '>
                        <div className='bg-black shadow-lg max-w-3xl p-10 rounded-lg border border-fuchsia-500 '>
                            <div className='justify-center items-center px-16 text-white'>
                                <h2 className='font-pressfont text-[1rem] lg:text-[2rem] pressFont  '>
                                    Welcome Back</h2>
                            </div>
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
                                    <input className='p-2 w-full text-gray-500' type={showPassword ? 'text' : 'password'} name="password" placeholder='Enter Your Password' autoComplete='off'
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                    />
                                    <BsEye
                                        onClick={() => {
                                            setShowPassword(!showPassword)
                                        }}
                                        className='absolute top-9 right-3 text-[20px] text-black' />
                                </div>
                                <span className='text-dimPink'>Forget Password?</span>
                                <button className='logibtn text-white py-2 px-3'
                                    onClick={() => {
                                        Login(email, password)
                                    }}
                                >Login</button>
                            </div>
                            {/* Google Login */}
                            {/* <div className='mt-5 grid grid-cols-3 items-center text-dimPink'>
                                <hr className='border-gray-400' />
                                <p className='text-center text-sm' >OR</p>
                                <hr className='border-gray-400' />
                            </div>
                            <button className=' border-dimPink border-2 py-2 px-3 items-center w-full mt-4 flex justify-center text-sm text-white'><FcGoogle width="25px" height="25px" className='mr-8 text-white' />Continue with Google</button> */}
                            <div className='mt-3 text-xs flex justify-center items-center text-white'>
                                <p>New to criativcity?</p>
                                <button className='py-2 hover:scale-110 duration-300 ml-2'><a href='signup'>Sign up</a></button>
                            </div>
                            <hr className='border-white' />
                        </div>
                    </section>

                </div >
            }
        </>
    )
}

export default LoginScreen;