import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View className="flex flex-row justify-center items-center p-2 bg-white">
      <AntDesign name="heart" size={44} color="red" />
      <View className="flex-1 ml-6">
        <TouchableOpacity className="p-4 flex justify-center item-center bg-orange-300 rounded-2xl">
          <Text className="text-white text-center">Apply This Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
