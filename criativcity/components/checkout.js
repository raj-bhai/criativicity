import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Apiurl } from '../constants/url';
import { useRouter } from 'next/router';



const CheckoutComp = () => {
  const [price, setPrice] = useState('₹ 1000');
  const [gst, setGst] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [subtotal, setSubtotal] = useState('₹ 1000');
  const [couponCode, setCouponCode] = useState('');
  const [netPayableAmount, setNetPayableAmount] = useState("₹ 1000");
  const [validCoupon, setValidCoupon] = useState("doubt");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const launchSDK = (data) => {
    const mandate_flow_config = {
      merchantId: data.mercid,
      bdOrderId: data.orderid,
      authToken: data.links[1].headers.authorization,
      flowType: 'payments', // Add the flowType propert
      childWindow: true,
      returnUrl: "https://criativcity.com/",
      retryCount: 3,
      prefs: {
        "payment_categories": ["card", "emi", "nb", "upi", "wallets", "qr", "gpay"]
      }
    };

    var responseHandler = function (txn) {
        console.log("callback received status:: ",txn.status)
        console.log("callback received response:: ",txn.response)
        }

        var config = {
            responseHandler: responseHandler,
            merchantLogo: "data:image/png;base64:eqwewqesddhgjdxsc==",
            flowConfig: mandate_flow_config,
            flowType: "payments"
            }

    const launch = () => {
      if (window.loadBillDeskSdk) {
        window.loadBillDeskSdk(config);
      } else {
        console.error("BillDesk SDK not available.");
      }
    };

    if (window.loadBillDeskSdk) {
      launch();
    } else {
      // Wait for SDK to become available
      const checkSDK = setInterval(() => {
        if (window.loadBillDeskSdk) {
          clearInterval(checkSDK);
          launch();
        }
      }, 100);
      console.log("SDK not available");
    }
  };
  

  const handleCouponCodeChange = async (event) => {
    await setCouponCode(event.target.value);
    if (event.target.value.length === 8) {
      setLoading(true);
      CouponValidation(event.target.value);
    } else {
      setValidCoupon("doubt");
      setDiscount(0);
      setSubtotal("₹1000");
      setNetPayableAmount("₹ 1000");
    }
  };

  function generateRandomOrderId() {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 8);
    const orderId = `ORDER-${timestamp}-${randomString}`;
    return orderId;
  }

  const createOrder = async (orderId, amount) => {
    const result = await axios.post(`${Apiurl}/razorpay/createOrder`, {
      "orderId": orderId,
      "amount": "10.00"
    });

    if (!result) {
      return;
    }

    launchSDK(result.data.data);
  };

  const CouponValidation = async (value) => {
    const token = localStorage.getItem('token');
    axios.post(`${Apiurl}/user/verifyReferral`, {
      "code": value
    }, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
      .then(response => {
        if (response.data.success) {
          setValidCoupon("valid");
          setDiscount("₹ 250");
          setSubtotal("₹750");
          setNetPayableAmount("₹ 750");
          setLoading(false);
        } else {
          setValidCoupon("invalid");
          setDiscount(0);
          setSubtotal("₹1000");
          setNetPayableAmount("₹ 1000");
          setLoading(false);
        }
      })
      .catch(error => {
        setValidCoupon("invalid");
        setDiscount(0);
        setSubtotal("₹1000");
        setNetPayableAmount("₹ 1000");
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-[100px]">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  md:px-32 py-8">
        {/* Rest of your code */}
        <div className="flex justify-end mt-8">
          <button className="bg-gray-800 text-white rounded-lg py-2 px-4"
            onClick={() => {
              if (validCoupon === "valid") {
                createOrder(generateRandomOrderId(), "750.00");
              } else {
                createOrder(generateRandomOrderId(), "1000.00");
              }
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComp;
