import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const CheckoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const launchBillDeskSDK = () => {
      // Retrieve the query parameter value
      const dataParam = router.query.data;

      try {
        // Attempt to parse the value as JSON
        const data = JSON.parse(dataParam);

        const logo = 'https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png';
        const flowType = 'payments';
        const childWindow = true;
        const retryCount = 3; // Number of retry attempts
        const returnUrl = 'https://criativcity.com/'; // Merchant return URL
        const prefs = ['category1', 'category2', 'category3']; // Payment categories in preferred order
        const bdOrderId = data.orderid; // Order ID generated using Create Order API
        const merchantId = data.mercid; // Merchant ID received from BillDesk
        const authToken = data.links[1].headers.authorization; // Authorization token generated using Create Order API

        const responseHandler = (transactionMetadata) => {
          // Callback function to receive transaction metadata after completion of the transaction journey
          console.log('Transaction Metadata:', transactionMetadata);

          // Process the transaction metadata and handle the payment completion as needed
          // Redirect the user to a success page or trigger any necessary actions
        };

        // Call the BillDesk SDK function to launch the checkout experience

        if (typeof window !== 'undefined' && window.BillDeskSDK && typeof window.BillDeskSDK.invokePaymentSDK === 'function') {
          window.BillDeskSDK.invokePaymentSDK(
            logo,
            flowType,
            childWindow,
            retryCount,
            returnUrl,
            prefs,
            responseHandler,
            bdOrderId,
            merchantId,
            authToken
          );
        } else {
          console.error('BillDeskSDK.invokePaymentSDK is not available');
        }

      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    const loadBillDeskSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.js';
      script.async = true;
      script.onload = launchBillDeskSDK;

      document.body.appendChild(script);
    };

    loadBillDeskSDK();
  }, [router.query.data, typeof window]);

  return (
    <div>
      {/* Your checkout page content here */}
    </div>
  );
};

export default CheckoutPage;
