import React from 'react';
import { ElementsConsumer, PaymentElement, PaymentRequestButtonElement } from '@stripe/react-stripe-js';

class CheckoutForm extends React.Component {

  handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "/courses",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };


  render() {
    return (
      <form className='flex flex-col h-screen items-center justify-center navbarbg' onSubmit={this.handleSubmit}>
        <div className='bg-white flex flex-col items-center p-[50px] rounded-lg' >
          <PaymentElement
          />
          <button className='bg-green-500 text-white font-semibold px-[10px] py-[5px] rounded-md  mt-[20px] '  disabled={!this.props.stripe}>Submit</button>
        </div>
      </form>
    );
  }
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

