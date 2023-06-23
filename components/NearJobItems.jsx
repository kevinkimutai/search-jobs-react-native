import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { checkImageURL } from "../utils/index";
import { useRouter } from "expo-router";

const NearJobItems = ({ job }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/job/${job.job_id}`);
      }}
    >
      <View className="p-4 rounded-md bg-white mb-2 flex flex-row">
        {checkImageURL(job.employer_logo) ? (
          <Image
            source={{ uri: job.employer_logo }}
            style={{ width: 40, height: 40 }}
            className="contain mr-4"
          />
        ) : (
          <View className="mr-3">
            <FontAwesome5 name="building" size={40} color="#C0C0C0" />
          </View>
        )}
        <View className="flex-1">
          <Text className="text-slate-600 mb-2 text-sm">
            {job.employer_name}
          </Text>
          <Text
            className="text-md"
            numberOfLines={1}
            style={{ fontFamily: "Nunito-Bold" }}
          >
            {job.job_title}
          </Text>
          {/* <View className="flex flex-row">
          <Text className="text-slate-500">{job.job_country}</Text>
          <Text className="text-slate-500">, {job.job_city}</Text>
          <Text className="text-slate-500">, {job.job_state}.</Text>
        </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NearJobItems;
