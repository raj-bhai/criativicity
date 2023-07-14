import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&family=Yatra+One&display=swap" rel="stylesheet" />
          <link href="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css" rel="stylesheet" />
          <script
            async
            type="module"
            src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.esm.js"
          ></script>
          <script
            async
            nomodule
            src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
