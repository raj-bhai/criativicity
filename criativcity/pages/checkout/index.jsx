import React, { useState } from 'react';
import CheckoutComp from '@/components/checkout';
import Navbar from "@/components/Navbar"
import CourseComp from "@/components/CourseComp"
import FollowUs from "@/components/Followus"
import Subcontent from "@/components/Subcontent"
import Footer from "@/components/Footer"
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51MvZaGSB8NyItH1JpBDZEV9GCj1Ait4hUzXZLT0ZFOG3hbCr9EWEXMb6urkhAIEJ8W0e7FfLLTbqvZsQ8v4LUV8W00hOPtM781');

const CheckoutScreen = () => {

    return (
        // <>
        <Elements stripe={stripePromise} >
            <Navbar />
            <CheckoutComp />
            <Footer />
        </Elements>
        // </>

    );
};

export default CheckoutScreen;

