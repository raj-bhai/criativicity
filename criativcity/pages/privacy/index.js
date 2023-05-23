import React from "react";
import Head from 'next/head';
import Link from 'next/link'

function PrivacyPolicy() {
    return (
        <div className="flex flex-col  items-center h-screen" style={{ height: "100vh" }} >
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Criativcity Privacy policy" />
                {/* Other meta tags */}
            </Head>
            <div className="max-w-3xl w-full px-4 py-8 ">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-2">
                    Please read this privacy policy (the &quot;Policy&quot;) carefully
                    to understand how Elixzor technologies Pvt Ltd., B-208, PRABHAKAR CHS LTD, JANGID ESTATE,
                    NEAR VIJAY PARK, MIRA ROAD EAST, THANE, India (&quot;Elixzor&quot;, &quot;we&quot;) uses personal information.
                </p>
                <p className="mb-2">
                    By accessing or using www.Criativcity.com, you acknowledge that you have read
                    and understood this Policy. This Policy may change from time to time;
                    any changes we make to this Policy will be posted on this Site,
                    we will also take any other steps, to the extent required by applicable law, including
                    notifying you about material changes. Changes to this Policy are effective as of the stated &quot;Last Updated&quot;
                    date. We recommend that you check the Policy periodically for any updates or changes. Information We Collect – You
                    directly provide us with most of the information we collect: when you register to the Site, use it, complete
                    forms, or register to any of our programs. We also collect information about your communications with Criativcity
                    as well as any of your posts on our blogs or forums and your communication with other users of Criativcity.
                </p>
                <p className="mb-2">
                    In addition, we automatically collect information while you access, browse, view or otherwise use the Site and receive
                    information from third party vendors or other available sources. Our Legal Basis for Using Your Personal
                    Information - Where relevant under applicable laws, all processing of your personal information will be justified by
                    a &quot;lawful ground&quot; for processing as detailed below. How Do We Use the Information Collected? – We use
                    personal information to provide you with quality service and security, to operate the Site, understand how people use
                    the Site, and to perform our obligations to you; to ensure our integrity and security; to prevent fraud; to contact you
                    and send you direct marketing communications; to promote and advertise the Site, our services; to comply with lawful
                    requests by public authorities and to comply with applicable laws and regulations. How Long Do We Keep Personal
                    Information – We will keep personal information only for as long as is required to fulfil the purpose for which it was
                    collected.
                </p>
                <p className="mb-2">
                    However, in some cases we will retain personal information for longer periods of time. Children - This Site is offered
                    and available to users who are at least 18 years of age and of legal age to form a binding contract. Minors under 18 and
                    at least 13 years of age, are only permitted to use the Site through an account owned by a parent or legal guardian with
                    their appropriate permission. Minors under 13 are not permitted to use the Site or the Fiverr services. We do not
                    knowingly collect personal information from children under 13. Sharing Personal Information with Third Parties – We
                    share personal information with third parties in order to operate the Site, provide our services to you, fulfil
                    obligations imposed on us by applicable laws and regulations, and prevent fraud, infringements and illegal activities.
                    Where We Store Personal Information - Some of the personal information you provide to us will be stored or processed on
                    our behalf by third party suppliers and data processors and may be located in other jurisdictions, such as the United
                    States and India. Cookies - We use cookies and similar technologies (such as web beacons, pixels, tags, and scripts)
                    to improve and personalize your experience, provide our services, analyze website performance and for marketing
                    purposes. Do Not Track (DNT) – Our Site does not respond to Do Not Track (DNT) signals. External Links - the Site
                    contains links to third party sites and if you link to a third party site from the Site, any data you provide to that
                    site and any use of that data by the third party are not under the control of Criativcity and are not subject to this
                    Policy.
                </p>
                <p className="mb-2">
                    Security – We implement technical and organizational measures to maintain the security of the Site and your personal
                    information and in preventing unauthorized access, loss, misuse, alteration, destruction or damage to it through industry
                    standard technologies and internal procedures. Updating Personal Information – We take steps to ensure that the personal
                    information we collect is accurate and up to date, and we provide you with the opportunity to update your information
                    through your account profile settings. In the event that you believe your information is in any way incorrect or
                    inaccurate,
                </p>
                <p className="mb-2" >
                    please let us know immediately. Contact Us - You can exercise your rights over your personal information, by contacting
                    us at Support@criativcity.com
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
