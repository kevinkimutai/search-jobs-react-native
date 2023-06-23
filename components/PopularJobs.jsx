import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Job from "./Job";
import useApi from "../hooks/useFetch";
import { useRouter } from "expo-router";

const PopularJobs = () => {
  const { data, isLoading, error } = useApi("search", {
    query: "Popular Software Jobs",
    page: "1",
  });
  const router = useRouter();

  return (
    <View className="p-4">
      <Text className="text-lg mb-2" style={{ fontFamily: "Nunito-Bold" }}>
        Popular jobs
      </Text>
      {isLoading ? (
        <View className="flex justify-center items-center">
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : data ? (
        <TouchableOpacity
          onPress={() => {
            router.push(`/job/${data.job_id}`);
          }}
        >
          <View>
            <FlatList
              data={data}
              renderItem={({ item }) => <Job job={item} />}
              keyExtractor={(item) => item.job_id}
              horizontal
            />
          </View>
        </TouchableOpacity>
      ) : (
        <View className="flex justify-center items-center">
          <Text>something went wrong</Text>
        </View>
      )}
    </View>
  );
};

export default PopularJobs;
