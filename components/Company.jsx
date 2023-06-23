import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native";
import { checkImageURL } from "../utils";
import { FontAwesome5 } from "@expo/vector-icons";

const Company = ({ name, logo, jobTitle, city, state, country }) => {
  return (
    <View className="p-4 flex justify-center items-center mb-2">
      {checkImageURL(logo) ? (
        <Image
          source={{ uri: logo }}
          style={{ width: 40, height: 40 }}
          className="contain mb-3"
        />
      ) : (
        <FontAwesome5 name="building" size={40} color="#C0C0C0" />
      )}
      <Text className=" text-sm text-slate-600">{name}</Text>
      <View className="flex flex-row mb-3">
        {city ? <Text className="text-sm text-slate-600">{city},</Text> : null}
        {state ? (
          <Text className="text-sm text-slate-600">{state},</Text>
        ) : null}
        {country ? (
          <Text className="text-sm text-slate-600">{country}.</Text>
        ) : null}
      </View>
      <Text
        className="text-xl"
        numberOfLines={1}
        style={{ fontFamily: "Nunito-Bold" }}
      >
        {jobTitle}
      </Text>
    </View>
  );
};

export default Company;
