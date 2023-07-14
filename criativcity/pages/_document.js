import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&family=Yatra+One&display=swap" rel="stylesheet" />
          <link href="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="module"
            src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.esm.js"
            async
          ></script>
          <script
            nomodule
            src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.js"
            defer
          ></script>
          <script
            type="text/javascript"
            src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
