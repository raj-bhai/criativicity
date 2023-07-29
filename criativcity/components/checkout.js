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
            bdOrderId: data.bdorderid,
            authToken: data.links[1].headers.authorization,
            flowType: 'payments', // Add the flowType propert
            childWindow: false,
            // returnUrl : "https://criativcitybe.onrender.com/razorpay/webhook",
            // returnUrl: "https://criativcity.com/",
            retryCount: 3,
            prefs: {
                "payment_categories": ["card", "emi", "nb", "upi", "wallets", "qr", "gpay"]
            }
        };

        console.log(mandate_flow_config)

        var responseHandler = function (txn) {
            console.log("callback received status:: ", txn.status)
            console.log("callback received response:: ", txn.response)
            try {
                control.log("inside response handler")
                var responseXHR = new XMLHttpRequest();
                responseXHR.onreadystatechange = function () {
                    if (responseXHR.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
                        if (responseXHR.status == 200) {
                            var jsonStr = responseXHR.responseText;
                            console.log(jsonStr);
                            jsonObj = JSON.parse(jsonStr);
                            console.log(jsonObj);
                            console.log(jsonObj.orderid);
                            var htm = "";
                            htm += "<div>Transaction Id: " + jsonObj.transactionid + " </div>";
                            htm += "<div>Auth Status: " + jsonObj.auth_status + " </div>";
                            htm += "<div>Transaction Date: " + jsonObj.transaction_date + " </div>";
                            htm += "<div>Payment Method Type: " + jsonObj.payment_method_type + " </div>";
                            htm += "<div>Amount: " + jsonObj.charge_amount + " </div>";
                            htm += "<div>Bank Ref No.: " + jsonObj.bank_ref_no + " </div>";
                            htm += "<div>Error code: " + jsonObj.transaction_error_code + " </div>";
                            htm += "<div>Error desc: " + jsonObj.transaction_error_desc + " </div>";
                            document.getElementById("result").innerHTML = htm;
                            // hideSpinner();
                        } else if (responseXHR.status == 400) {
                            //alert('There was an error 400');
                        } else {
                            //alert('something else other than 200 was returned');
                        }
                    }
                };
                console.log(txn);
                if (txn.txnResponse) {

                    responseXHR.open("POST", "https://pguatweb.billdesk.io/pgtxnsimulator/v1_2/txnresponse", true);

                    responseXHR.send(txn.txnResponse.transaction_response);
                } else {
                    console.log("fghjkl")
                    // hideSpinner();
                }
            } catch (err) {
                alert('There was an error 400');
            }
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
            "amount": "1000.00"
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
