import React from "react";
import { Text, View, Image } from "react-native";
import { checkImageURL } from "../utils";
import { FontAwesome5 } from "@expo/vector-icons";

const Job = ({ job }) => {
  return (
    <View className="flex justify-between p-4 rounded-md bg-white m-2 w-48 ">
      {checkImageURL(job.employer_logo) ? (
        <Image
          source={{ uri: job.employer_logo }}
          style={{ width: 40, height: 40 }}
          className="contain mb-1"
        />
      ) : (
        <FontAwesome5 name="building" size={40} color="#C0C0C0" />
      )}

      <Text className="text-slate-600 mb-2">{job.employer_name}</Text>
      <Text
        className="text-lg"
        numberOfLines={1}
        style={{ fontFamily: "Nunito-Bold" }}
      >
        {job.job_title}
      </Text>
      <View className="flex flex-row">
        <Text className="text-slate-500">{job.job_country}</Text>
        <Text className="text-slate-500">, {job.job_city}</Text>
        <Text className="text-slate-500">, {job.job_state}.</Text>
      </View>
    </View>
  );
};

export default Job;
