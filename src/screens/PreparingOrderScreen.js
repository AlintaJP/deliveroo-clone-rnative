import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image } from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { DELIVERY_SCREEN } from "../../constants/screens";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(DELIVERY_SCREEN);
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Image
        source={require("../../assets/loader_gif.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
