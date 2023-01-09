import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51MO6MbEAvyR2N7zQF3fx853v2K9RgwzHJX8YTkOPPnHkDHmOWqd1Lw4NR3aLt7LNr95oTtdyJYkRCQSBTPYZ4U6L00saVekbic";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Wolf Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://cdn-icons-png.flaticon.com/512/4081/4081893.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
