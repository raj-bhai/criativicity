import React, { useState } from 'react';
import axios from 'axios';
import { Apiurl } from '@/constants/url';

const CheckoutComp = () => {
    const [price, setPrice] = useState('₹ 1000');
    const [gst, setGst] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [subtotal, setSubtotal] = useState('₹ 1000');
    const [couponCode, setCouponCode] = useState('');
    const [netPayableAmount, setNetPayableAmount] = useState("₹ 1000");
    const [validCoupon, setValidCoupon] = useState("doubt")
    const [loading, setLoading] = useState(false);

    const calculateSubtotal = () => {
        const priceNumber = parseFloat(price);
        const gstNumber = parseFloat(gst);
        const discountNumber = parseFloat(discount);
        const gstAmount = priceNumber * (gstNumber / 100);
        const discountAmount = priceNumber * (discountNumber / 100);
        const subtotalAmount = priceNumber + gstAmount - discountAmount;
        setSubtotal(subtotalAmount);
        calculateNetPayableAmount(subtotalAmount);
    };

    const calculateNetPayableAmount = (subtotalAmount) => {
        const netPayableAmount = subtotalAmount;
        setNetPayableAmount(netPayableAmount);
    };

    const handleCouponCodeChange = async (event) => {
        await setCouponCode(event.target.value);
        if (event.target.value.length === 8) {
            CouponValidation(event.target.value)
        } else {
            setValidCoupon("doubt")
        }
    };

    //loadScript Rzpay
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const makePayment = async (amount) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        const result = await axios.post(`${Apiurl}/razorpay/createOrder`, {
            amount: amount * 100,
        });

        // console.log("Result :", result)
        // return

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
        if (!result.data.success) {
            return;
        }
        var options = {
            description: "Add money in wallet",
            // image: "https://beyobo-static-data.s3.ap-south-1.amazonaws.com/icons/beyobologo.png",
            currency: "INR",
            key: "rzp_test_0NvMtWlychjUkW",
            amount: result.data.data.amount,
            name: "Creativcity",
            order_id: result.data.data.id,
            handler: async function (response) {
                // OrderPlaced(paymentMethod);
                console.log("Payment success :", response)
            },
            prefill: {
                email: "test@gmail.com",
                contact: "9954546495",
                name: "Test name",
            },
            theme: { color: "#2BA4F6" },
        };

        const paymentObject = new window.Razorpay(options);
        await paymentObject.open();
    };

    const CouponValidation = async (value) => {
        if (value === "12345678") {
            await setLoading(true)
            await setValidCoupon("valid")
            await setDiscount("₹ 250")
            await setSubtotal("₹750")
            await setNetPayableAmount("₹ 750")
            await setLoading(false)

        } else {
            setValidCoupon("invalid")
            setLoading(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 pt-[100px]">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <div className="grid grid-cols-2 gap-4  px-32 py-8">
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
                                makePayment(750)
                            } else {
                                makePayment(1000)
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
