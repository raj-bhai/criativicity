import React, { useState } from 'react';
import CheckoutComp from '@/components/checkout';
import Navbar from "@/components/Navbar"
import CheckoutForm from '@/components/checkoutForm';
import Footer from "@/components/Footer"
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51MvZaGSB8NyItH1JpBDZEV9GCj1Ait4hUzXZLT0ZFOG3hbCr9EWEXMb6urkhAIEJ8W0e7FfLLTbqvZsQ8v4LUV8W00hOPtM781');

const CheckoutScreen = () => {

    return (
        <>
            <Elements stripe={stripePromise} >
                <Navbar />
                <CheckoutForm />
                <Footer />
            </Elements>
        </>

    );
};

export default CheckoutScreen;

