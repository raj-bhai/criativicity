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
                    Yes! You can cancel your course within 7 days of purchase if you don’t like it. We don’t want your money if you are not happy with the course.
                    You can email us at support@criativcity.com & we will cancel and refund your money within hours. No awkward questions asked.
                    Contact us for any issues:
                </p>
                <p className="mb-2">
                    If you have any questions about our Returns and Refunds Policy, please contact us at: support@criativcity.com
                </p>
            </div>
        </div>
    );
}

export default ReturnPolicy;
