import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a payment intent on the server
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 1000, // Amount in cents
      }),
    });
    const { client_secret } = await response.json();

    // Collect payment details
    const cardElement = elements.getElement(CardElement);

    // Confirm the payment with Stripe
    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardElement,
      },
    });

    // Handle payment confirmation
    if (result.error) {
      setPaymentError(result.error.message);
    } else {
      setPaymentSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>Payment successful!</div>}
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default CheckoutForm;
