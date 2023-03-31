import React from "react";
import Head from 'next/head';
import Link from 'next/link'

function ReturnPolicy() {
    return (
        <div className="flex flex-col items-center h-screen" style={{ height: "100vh" }} >
            <Head>
                <title>Return Policy</title>
                <meta name="description" content="Criativcity Return Policy" />
                {/* Other meta tags */}
            </Head>
            <div className="max-w-3xl w-full px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Return Policy</h1>
                <p className="mb-2">
                    Thank you for shopping at www.criativcity.com
                </p>
                <p className="mb-2">
                    Non-tangible irrevocable goods (&quot;Digital products&quot;)
                    We do issue refunds for non-tangible irrevocable goods (&quot;digital products&quot;) once the order is confirmed and the
                    product is sent.
                    We recommend contacting us for assistance if you experience any issues receiving or downloading our products.
                </p>
                <p className="mb-2">
                    Certainly, we understand that clarity is important when it comes to refunds. If you decide to cancel your course within
                    the 7-day window and are eligible for a refund, we will process a full refund of the amount you paid for the course.
                    For example, if the course costs 1000 Rs, you will receive a full refund of 1000 Rs. Our goal is to provide our
                    customers with a worry-free purchasing experience, and we are committed to upholding this policy. Please don&apos;t hesitate
                    to contact us if you have any further questions or concerns.
                </p>
                <p className="mb-2">
                    If you have any questions about our Returns and Refunds Policy, please contact us at: support@criativcity.com
                </p>
            </div>
        </div>
    );
}

export default ReturnPolicy;
