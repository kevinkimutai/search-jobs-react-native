import { Stack } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import {
  HeaderLeftBtn,
  HeaderRight,
  NearJobs,
  PopularJobs,
  Welcome,
} from "../components";

//NOTE: SAFEAREAVIEW IS ONLY AVAILABLE IN IOS

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#fffafa" },
          headerShadowVisible: false,
          headerTintColor: "#ffb347",
          headerLeft: () => <HeaderLeftBtn />,
          headerTitle: "",
        }}
      />
      <ScrollView className="bg-orange-100">
        <Welcome />
        <PopularJobs />
        <NearJobs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
