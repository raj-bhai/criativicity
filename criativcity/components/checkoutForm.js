import React from 'react';
import { useStripe, useElements, ElementsConsumer, PaymentElement, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Apiurl } from '@/constants/url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import * as userAction from '../redux/action/user';
import { useRouter } from 'next/router';

function CheckoutForm() {
  const router = useRouter()
  const dispatch = useDispatch()
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        // return_url: "https://criativcity.com/courses",
        return_url: "http://localhost:3000/courses",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      console.log("calling updatePayment");
      updatePayment()
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const updatePayment = async () => {
    console.log("started")
    const token = localStorage.getItem('token');
    axios.post(`${Apiurl}/user/purchasePlan`, {
      "referralCode": ""
    }, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
      .then(response => {
        if (response.data.success) {
          toast.success("plannes purchased successfully")
          dispatch(userAction.getUserDetail())
          router.push('/courses')
        } else {
          toast.warn(response.data.message)
        }
      })
      .catch(error => {
        toast.error("some error occured")
      });
  }

  return (
    <form className='flex flex-col h-screen items-center justify-center navbarbg' onSubmit={handleSubmit}>
      <ToastContainer />
      <div className='bg-white flex flex-col items-center p-[50px] rounded-lg' >
        <PaymentElement
        />
        <button className='bg-green-500 text-white font-semibold px-[10px] py-[5px] rounded-md  mt-[20px] ' disabled={!stripe}>Submit</button>
      </div>
    </form>
  );
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  )
}
