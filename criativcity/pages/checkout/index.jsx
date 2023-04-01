import React, { useState } from 'react';
import CheckoutComp from '@/components/checkout';
import Navbar from "@/components/Navbar"
import CourseComp from "@/components/CourseComp"
import FollowUs from "@/components/Followus"
import Subcontent from "@/components/Subcontent"
import Footer from "@/components/Footer"

const CheckoutScreen = () => {

    return (
        <>
            <Navbar />
            <CheckoutComp />
            <Footer />
        </>

    );
};

export default CheckoutScreen;

