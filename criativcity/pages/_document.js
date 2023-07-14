import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato&family=Yatra+One&display=swap" rel="stylesheet" />
            <script type="module" src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.esm.js"></script>
            <script nomodule src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.js"></script>
            <link href="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css" rel="stylesheet" />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
    );
  }
}

export default MyDocument;
