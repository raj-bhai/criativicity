import Document, { Html, Head, Main, NextScript } from 'next/document';
import { billdeskTest, billdeskLive } from '@/constants/url';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&family=Yatra+One&display=swap" rel="stylesheet" />
          <link href={`${billdeskTest}/billdesksdk/billdesksdk.css`} rel="stylesheet" />
          {/* <link href={`${billdeskTest}/billdesksdk/billdesksdk.css`} rel="stylesheet" /> */}
          {/* <script
            async
            type="module"
            src={`${billdeskTest}/billdesksdk/billdesksdk.esm.js`}
          ></script> */}
          {/* <script
            async
            nomodule
            src={`${billdeskTest}/billdesksdk/billdesksdk.js`}
          ></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
