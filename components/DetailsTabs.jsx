import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const TABS = ["Skills", "Qualifications"];

const DetailsTabs = ({ setTab, tab }) => {
  return (
    <View className="flex justify-center items-center p-4">
      <FlatList
        data={TABS}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setTab(item)}>
            <View
              className={`rounded-2xl p-3 px-6 m-2 ${
                item === tab ? "bg-sky-200 text-white" : "bg-white"
              }`}
            >
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default DetailsTabs;
