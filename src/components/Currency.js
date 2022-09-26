import { Text } from "react-native";
import React from "react";
import CurrencyFormat from "react-currency-format";

const Currency = ({ value, styles }) => {
  return (
    <CurrencyFormat
      displayType="text"
      value={value}
      decimalScale={2}
      fixedDecimalScale={true}
      prefix={"£"}
      allowNegative={false}
      renderText={(value) => <Text className={styles}>{value}</Text>}
    />
  );
};

export default Currency;
