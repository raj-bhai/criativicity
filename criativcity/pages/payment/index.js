import React, { useState, useEffect } from 'react';
import CheckoutComp from '@/components/checkout';
import Navbar from "@/components/Navbar"    
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/checkoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Apiurl } from '@/constants/url';
import { useRouter } from 'next/router';

const stripePromise = loadStripe('pk_live_51MvZaGSB8NyItH1JpBDZEV9GCj1Ait4hUzXZLT0ZFOG3hbCr9EWEXMb6urkhAIEJ8W0e7FfLLTbqvZsQ8v4LUV8W00hOPtM781');

const CheckoutScreen = () => {
    const router = useRouter()
    // console.log("data :", router.query.data)

    const options = {
        // passing the client secret obtained from the server
        // clientSecret: "pi_3MwIZwSB8NyItH1J1xnxHhls_secret_nf7qkMFVq2WqhnwAnqcA08pgc",
        clientSecret : router.query.data
    };
    return (
        options &&
        <>
            <Elements stripe={stripePromise} options={options} >
                <Navbar />
                <CheckoutForm />
                <Footer />
            </Elements>
        </>

    );
};

export default CheckoutScreen;

