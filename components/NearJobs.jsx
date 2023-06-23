import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import useApi from "../hooks/useFetch";
import NearJobItems from "./NearJobItems";
import { useRouter } from "expo-router";

const NearJobs = () => {
  const { data, isLoading, error } = useApi("search", {
    query: "Software Jobs in Kenya",
    page: "1",
  });
  const router = useRouter();

  return (
    <View className="p-4">
      <Text className="text-lg mb-2" style={{ fontFamily: "Nunito-Bold" }}>
        Nearby jobs
      </Text>
      {isLoading ? (
        <View className="flex justify-center items-center">
          <ActivityIndicator size="large" color="#A7F3FF" />
        </View>
      ) : data ? (
        <>
          <FlatList
            data={data}
            renderItem={({ item }) => <NearJobItems job={item} />}
            keyExtractor={(item) => item.job_id}
          />
        </>
      ) : (
        <View className="flex justify-center items-center">
          <Text>something went wrong!</Text>
        </View>
      )}
    </View>
  );
};

export default NearJobs;
