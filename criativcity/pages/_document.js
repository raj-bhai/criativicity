import Document, { Html, Head, Main, NextScript } from 'next/document';
import { billdeskTest, billdeskLive } from '@/constants/url';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&family=Yatra+One&display=swap" rel="stylesheet" />
          <link href={`${billdeskLive}/billdesksdk/billdesksdk.css`} rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
