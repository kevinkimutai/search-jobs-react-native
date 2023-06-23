import { Stack, useRouter, useSearchParams } from "expo-router";
import React, { useState, useCallback } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import {
  Company,
  DetailsTabs,
  Footer,
  HeaderBackBtn,
  HeaderShareBtn,
  JobData,
} from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";
import useApi from "../../hooks/useFetch";

const TABS = ["Skills", "Qualifications"];

const JobDetails = () => {
  const [tab, setTab] = useState(TABS[0]);
  const router = useRouter();
  const params = useSearchParams();

  console.log("PARAMS", params.id);

  const { data, isLoading, error } = useApi("job-details", {
    job_id: params.id,
    extended_publisher_details: "false",
  });

  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#fffafa" },
          headerShadowVisible: false,
          headerTintColor: "#ffb347",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <HeaderBackBtn />
            </TouchableOpacity>
          ),
          headerRight: () => <HeaderShareBtn />,
          headerTitle: "",
        }}
      />
      <ScrollView className="bg-orange-100">
        {isLoading ? (
          <View className="flex justify-center items-center">
            <ActivityIndicator size="large" color="#A7F3FF" />
          </View>
        ) : data ? (
          <>
            <Company
              name={data.employer_name}
              logo={data.employer_logo}
              jobTitle={data.job_title}
              city={data.job_city}
              state={data.job_state}
              country={data.job_country}
              desc={data.job_description}
            />
            <DetailsTabs setTab={setTab} tab={tab} />
            {tab === "Qualifications" && <JobData data={data.job_highlights} />}
            {tab === "Skills" && <JobData data={data.job_required_skills} />}
            {/* {tab === "Education" && (
          <JobData data={jobData.job_required_education} />
        )} */}
          </>
        ) : error ? (
          <View>
            <Text>{error}</Text>
          </View>
        ) : (
          <View>
            <Text>unavailable at the moment</Text>
          </View>
        )}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default JobDetails;
