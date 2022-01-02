import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }: { price: number }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JWiAqKWdvWiOub0w375wxqMtw4c4pmlfbeOfHv1RTfurS6DldrdXuWyvp6OGxKWUfovBmTa4fbaPzXqVa5OHk0g00boe8fEL7";

  const onToken = (token: any) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
