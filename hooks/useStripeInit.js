import { initStripe } from "@stripe/stripe-react-native";
import { useLayoutEffect } from "react";
import { API_URL } from "../config";

const useStripeCheckout = () => {
  useLayoutEffect(() => {
    fetch(`${API_URL}/public-key`)
      .then((response) => response.json())
      .then((response) =>
        initStripe({
          publishableKey: response.publishableKey,
        })
      );
  }, []);
};

export default useStripeCheckout;
