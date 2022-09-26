import { useNavigation } from "@react-navigation/native";
import { useStripe } from "@stripe/stripe-react-native";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../config";
import {
  PREPARING_ORDER_SCREEN,
  RESTAURANT_SCREEN,
} from "../constants/screens";
import { emptyBasket } from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";

const useStripeCheckout = (amount) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const currentRestaurant = useSelector(selectRestaurant);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const fetchPaymentIntentClientSecret = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currency: "gbp",
          amount,
        }),
      });
      const { clientSecret } = await response.json();

      return clientSecret;
    } catch (e) {
      console.log(e);
    }
  }, [amount]);

  const initializePaymentSheet = useCallback(async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: "Deliveroo React Native",
    });

    if (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const handlePaymentSheet = useCallback(async () => {
    const { error } = await presentPaymentSheet();
    if (error) {
      if (error.code === "Canceled") {
        navigation.navigate(RESTAURANT_SCREEN, {
          ...currentRestaurant,
        });
      }
    } else {
      dispatch(emptyBasket());
      navigation.navigate(PREPARING_ORDER_SCREEN);
    }
  }, [currentRestaurant]);

  return handlePaymentSheet;
};

export default useStripeCheckout;
