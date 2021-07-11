import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {  useIsFocused } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Profile from "../components/Profile";
import Schedule from "../components/Schedule";
import EditProfile from "../components/EditProfile";
import Footer from "../components/Footer";
import Constants from 'expo-constants';

import initialScheduleData from "../data/initialScheduleData";
import NewsLists from "../components/NewsLists";


const HomeScreen = ({ navigation }) => {

  const isFocused=useIsFocused()
  
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

  useEffect(() => {
    console.log("focus")
    populateData();
  }, [isFocused]);

  return (
    <View style={{ flex: 1, }}>
      <View style={{ flex: 1 }}>
        <View style={[styles.header,{paddingTop:Constants.statusBarHeight}]}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          />
            
          <View
            style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "bold" }}>Home</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Ionicons name="md-person-circle-outline" size={32} />
          </View>
        </View>
      </View>
      <View style={{ flex: 7 }}>
        
        {schedule && <Schedule schedule={schedule} goToCourses={goToCourses} />}
        <NewsLists />
      </View>
    </View>
  );
};

export default HomeScreen;
