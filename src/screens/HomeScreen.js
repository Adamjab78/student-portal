import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Text } from "../components/Custom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Schedule from "../components/Schedule";
import Constants from "expo-constants";
import initialScheduleData from "../data/initialScheduleData";
import NewsLists from "../components/NewsLists";
import ProfileSummary from "./ProfileSummary";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  const goToCourses = (item) => {
    console.log(JSON.stringify(item));
    navigation.navigate("Courses", { item });
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("schedule");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const populateData = async () => {
    const scheduleData = await getData();
    if (scheduleData) {
      setSchedule(scheduleData);
      setScheduleExists(true);
    } else {
      //setData(initialScheduleData);
      setSchedule(initialScheduleData);
      setScheduleExists(false);
    }
  };

  const [schedule, setSchedule] = useState(null);
  const [scheduleExists, setScheduleExists] = useState(false);

  useEffect(() => {
    populateData();
  }, []);

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  useEffect(() => {
    console.log("focus");
    populateData();
  }, [isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header title={"home"} iconTitle={"md-person-circle-outline"} />
      </View>
      <View style={{ flex: 7, backgroundColor: "white" }}>
        <ScrollView>
          <ProfileSummary isFocused={isFocused} goToProfile={goToProfile} />
          {schedule && (
            <Schedule
              scheduleExists={scheduleExists}
              schedule={schedule}
              goToCourses={goToCourses}
            />
          )}
          <NewsLists />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
