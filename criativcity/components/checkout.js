import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Apiurl } from '../constants/url';
import { useRouter } from 'next/router';
// import { loadBillDeskSDK } from '@/utils/billdesk';


const CheckoutComp = () => {
    const [price, setPrice] = useState('₹ 1000');
    const [gst, setGst] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [subtotal, setSubtotal] = useState('₹ 1000');
    const [couponCode, setCouponCode] = useState('');
    const [netPayableAmount, setNetPayableAmount] = useState("₹ 1000");
    const [validCoupon, setValidCoupon] = useState("doubt")
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    useEffect(() => {
        loadBillDeskSDK()
    }, [])


    const loadBillDeskSDK = () => {
        const script = document.createElement('script');
        script.src = 'https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.js';
        script.async = true;

        script.onload = onLoad;
      
        document.head.appendChild(script);
      };

      const onLoad = () => {
        console.log("billdeskLoaded>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      }
      

      const launchBillDeskSDK = (data) => {
        // Retrieve the query parameter value
        // const dataParam = router.query.data;
  
        try {
          // Attempt to parse the value as JSON
        //   const data = JSON.parse(dataParam);


  
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

          console.log(" log",window.BillDeskSDK)

          return
  
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


    const handleCouponCodeChange = async (event) => {
        await setCouponCode(event.target.value);
        if (event.target.value.length === 8) {
            setLoading(true)
            CouponValidation(event.target.value)
        } else {
            setValidCoupon("doubt")
            setDiscount(0)
            setSubtotal("₹1000")
            setNetPayableAmount("₹ 1000")
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
console.log("type of :", typeof(result.data.data));
        launchBillDeskSDK(result.data.data)
        console.log(result.data)
    }


    const CouponValidation = async (value) => {

        // axios.post(`${Apiurl}/user/verifyReferral`, {
        //     "code": value
        // })
        const token = localStorage.getItem('token');
        axios.post(`${Apiurl}/user/verifyReferral`, {
            "code": value
        }, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                // console.log(response.data);
                if (response.data.success) {
                    setValidCoupon("valid")
                    setDiscount("₹ 250")
                    setSubtotal("₹750")
                    setNetPayableAmount("₹ 750")
                    setLoading(false)
                } else {
                    setValidCoupon("invalid")
                    setDiscount(0)
                    setSubtotal("₹1000")
                    setNetPayableAmount("₹ 1000")
                    setLoading(false)
                }
            })
            .catch(error => {
                // console.error(error);
                setValidCoupon("invalid")
                setDiscount(0)
                setSubtotal("₹1000")
                setNetPayableAmount("₹ 1000")
                setLoading(false)
            });
    }



    return (
        <div className="container mx-auto px-4 py-8 pt-[100px]">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  md:px-32 py-8">
                <div>
                    <label htmlFor="price" className="block font-medium mb-2">Price:</label>
                    <input
                        id="price"
                        type="text"
                        className="border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="gst" className="block font-medium mb-2">GST:</label>
                    <input
                        id="gst"
                        type="text"
                        className="border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                        value={gst}
                        onChange={(event) => setGst(event.target.value)}
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="discount" className="block font-medium mb-2">Discount:</label>
                    <input
                        id="discount"
                        type="text"
                        className="border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                        value={discount}
                        onChange={(event) => setDiscount(event.target.value)}
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="subtotal" className="block font-medium mb-2">Subtotal:</label>
                    <input
                        id="subtotal"
                        type="text"
                        className="border-gray-300 rounded-lg w-full py-2 px-4 mb-4"
                        value={subtotal}
                        onChange={() => { }}
                        disabled
                    />
                </div>
                <div>
                    <div className='relative' >
                        <label htmlFor="couponCode" className="block font-medium mb-2">Coupon Code:</label>
                        <input
                            id="couponCode"
                            type="text"
                            maxLength={8}
                            className="border-[#000] border rounded-lg w-full py-2 px-4 mb-4"
                            value={couponCode}
                            onChange={handleCouponCodeChange}
                        />
                        <span className={loading ? 'loader' : 'hidden'}></span>
                    </div>
                    {
                        validCoupon === "invalid" &&
                        <p className=' -mt-[10px] text-red-600 font-semibold ' >Invalid Coupod Code</p>
                    }
                    {
                        validCoupon === "valid" &&
                        <p className=' -mt-[10px] text-green-600 font-semibold ' >You have saved &#8377;250</p>
                    }
                </div>
                <div>
                    <div>
                        <label htmlFor="netPayableAmount" className="block font-medium mb-2">Net Payable Amount:</label>
                        <input
                            id="netPayableAmount"
                            type="text"
                            className=" border border-green-600 rounded-lg w-full py-2 px-4 mb-4"
                            value={netPayableAmount}
                            onChange={() => { }}
                            disabled
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-8">
                    <button className="bg-gray-800 text-white rounded-lg py-2 px-4"
                        onClick={() => {
                            if (validCoupon === "valid") {
                                createOrder(generateRandomOrderId(), "750.00")
                            } else {
                                createOrder(generateRandomOrderId(), "1000.00")
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

