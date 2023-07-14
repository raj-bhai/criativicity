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

        const logo = 'base64_image_of_merchant_logo';
        const flowType = 'payments';
        const childWindow = 'true';
        const retryCount = 3; // Number of retry attempts
        const returnUrl = 'https://your-return-url.com'; // Merchant return URL
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

      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    // Load the BillDesk SDK script dynamically
    const loadBillDeskSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.js';
      script.async = true;
      script.onload = launchBillDeskSDK;

      document.body.appendChild(script);
    };

    // Call the function to load the BillDesk SDK when the component mounts
    loadBillDeskSDK();
  }, []);

  return (
    <div>
      {/* Your checkout page content here */}
    </div>
  );
};

export default CheckoutPage;
