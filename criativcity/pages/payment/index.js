import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const CheckoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const loadBillDeskSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.js';
      script.async = true;
      script.onload = launchBillDeskSDK;

      document.body.appendChild(script);
    };

    const launchBillDeskSDK = () => {
      const dataParam = router.query.data;

      try {
        const data = JSON.parse(dataParam);

        const logo = 'https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png';
        const flowType = 'payments';
        const childWindow = true;
        const retryCount = 3;
        const returnUrl = 'https://criativcity.com/';
        const prefs = ['category1', 'category2', 'category3'];
        const bdOrderId = data.orderid;
        const merchantId = data.mercid;
        const authToken = data.links[1].headers.authorization;

        const responseHandler = (transactionMetadata) => {
          console.log('Transaction Metadata:', transactionMetadata);
          // Process the transaction metadata and handle the payment completion as needed
        };

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

    if (typeof window !== 'undefined' && !window.BillDeskSDK) {
      loadBillDeskSDK();
    } else {
      launchBillDeskSDK();
    }
  }, [router.query.data]);

  return (
    <div>
      {/* Your checkout page content here */}
    </div>
  );
};

export default CheckoutPage;
