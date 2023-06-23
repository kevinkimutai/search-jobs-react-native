import { EvilIcons } from "@expo/vector-icons";

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import JobCategory from "./JobCategory";

const CATEGORIES = ["full-time", "temporary", "intern"];

const Welcome = () => {
  const [jobCategory, setJobCategory] = useState("full-Time");
  return (
    <View className="p-4 bg-orange-200">
      <Text className="text-2xl " style={{ fontFamily: "Nunito-Bold" }}>
        Welcome.
      </Text>
      <Text className="text-lg mb-4" style={{ fontFamily: "Nunito-Regular" }}>
        Find your next big job.
      </Text>
      <View className="flex flex-row mb-2">
        <TextInput
          className="rounded-3xl bg-white p-2 flex-1 mr-2"
          placeholder="Which Job are you searching for ?"
          placeholderTextColor={"#C0C0C0"}
          cursorColor={"#cc5500"}
        />
        <TouchableOpacity className="flex justify-center items-center bg-orange-500 rounded-2xl p-2">
          <EvilIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => <JobCategory title={item} />}
          keyExtractor={(item) => item}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
