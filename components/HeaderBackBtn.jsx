import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HeaderBackBtn = () => {
  return (
    <View>
      <FontAwesome name="long-arrow-left" size={24} color="black" />
    </View>
  );
};

export default HeaderBackBtn;
