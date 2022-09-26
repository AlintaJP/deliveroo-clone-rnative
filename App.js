import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import BasketScreen from "./src/screens/BasketScreen";
import { store } from "./store";
import { Provider } from "react-redux";
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen";
import {
  BASKET_SCREEN,
  HOME_SCREEN,
  PREPARING_ORDER_SCREEN,
  RESTAURANT_SCREEN,
  DELIVERY_SCREEN,
} from "./constants/screens";
import DeliveryScreen from "./src/screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen name={RESTAURANT_SCREEN} component={RestaurantScreen} />
          <Stack.Screen
            name={BASKET_SCREEN}
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name={PREPARING_ORDER_SCREEN}
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name={DELIVERY_SCREEN}
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
