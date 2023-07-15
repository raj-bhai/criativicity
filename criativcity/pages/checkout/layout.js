import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
      <script type="module" src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.esm.js"></script>
      <script nomodule src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.js"></script>
      <link href="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css" rel="stylesheet" />
    </Head>
    {children}
  </>
);

export default Layout;
