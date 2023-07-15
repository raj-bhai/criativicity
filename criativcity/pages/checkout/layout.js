import React, { useEffect } from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  useEffect(() => {
    const loadSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.js';
      script.defer = true;

      script.onload = () => {
        console.log('BillDesk SDK loaded');
        // Any additional logic or function invocations after the SDK is loaded
      };

      document.head.appendChild(script);
    };

    loadSDK();
  }, []);

  return (
    <>
      <Head>
        <link href="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css" rel="stylesheet" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
