import React, { useState } from 'react';
import CheckoutComp from '@/components/checkout';
import Navbar from "@/components/Navbar"
import Layout from './layout';
import Footer from "@/components/Footer"

const CheckoutScreen = () => {

    return (
        <Layout>
            <Navbar />
            <CheckoutComp />
            <Footer />
        </Layout>

    );
};

export default CheckoutScreen;

