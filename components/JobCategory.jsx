import React from "react";
import { Text, View } from "react-native";

const JobCategory = ({ title }) => {
  return (
    <View className="bg-white m-2 p-2 rounded-3xl">
      <Text className="text-slate-500">{title}</Text>
    </View>
  );
};

export default JobCategory;
