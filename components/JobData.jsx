import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const JobData = ({ data }) => {
  return (
    <View className="p-4">
      {data &&
        data.map((item, indx) => (
          <View key={indx} className="flex flex-row items-start justify-start">
            <Entypo name="dot-single" size={24} color="black" />
            <Text className={"ml-2"}>{item}</Text>
          </View>
        ))}
    </View>
  );
};

export default JobData;
