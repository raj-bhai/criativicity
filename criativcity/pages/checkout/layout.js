import React, { useEffect } from 'react';
import Head from 'next/head';
import { billdeskTest, billdeskLive } from '@/constants/url';

const Layout = ({ children }) => {
  useEffect(() => {
    const loadSDK = () => {
      const script = document.createElement('script');
      script.src = `${billdeskLive}/billdesksdk/billdesksdk.js`;
      script.defer = true;

      script.onload = () => {
        console.log('BillDesk SDK loaded');
      };

      document.head.appendChild(script);
    };

    loadSDK();
  }, []);

  return (
    <>
      <Head>
      </Head>
      {children}
    </>
  );
};

export default Layout;
