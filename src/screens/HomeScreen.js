import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Profile from "../components/Profile";
import Schedule from "../components/Schedule";
import EditProfile from "../components/EditProfile";
import Footer from "../components/Footer";

import initialScheduleData from "../data/initialScheduleData";


const HomeScreen = ({ navigation }) => {
  
  const goToCourses = (item) => {
    console.log(JSON.stringify(item))
    navigation.navigate("Courses",{item});
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("schedule");
      console.log("JSONValue", jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const populateData = async () => {
    const scheduleData = await getData();
    if (scheduleData) {
      console.log("ada data", scheduleData);
      setSchedule(scheduleData);
    } else {
      //setData(initialScheduleData);
      console.log("tiada data");
      setSchedule(initialScheduleData);
    }
  };

  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    populateData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Ionicons name="chevron-back" size={32} />
          </View>
          <View
            style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "bold" }}>Portal Pelajar</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Ionicons name="md-person-circle-outline" size={32} />
          </View>
        </View>
      </View>
      <View style={{ flex: 10 }}>
        {schedule && <Schedule schedule={schedule} goToCourses={goToCourses} />}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
