import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useIonAlert } from "@ionic/react";

const StripeCheckoutButton = ({ price }: { price: number }) => {
  const [present] = useIonAlert();
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JWiAqKWdvWiOub0w375wxqMtw4c4pmlfbeOfHv1RTfurS6DldrdXuWyvp6OGxKWUfovBmTa4fbaPzXqVa5OHk0g00boe8fEL7";

  const presentAlert = (header: string, message: string) => {
    present({
      header,
      message,
      buttons: ["Ok"],
    });
  };

  const onToken = (token: any) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    }).then(
      (response) => {
        presentAlert("Success", "Payment Successful");
      },
      (error) => {
        console.log("Payment error: ", JSON.parse(error));
        presentAlert(
          "Error",
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      }
    );
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
