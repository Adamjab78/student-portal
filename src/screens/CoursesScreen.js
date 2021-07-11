import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Profile from "../components/Profile";
import initialScheduleData from "../data/initialScheduleData";
import Constants from "expo-constants";
import courses from "../data/courses";
import Header from "../components/Header";

const CoursesScreen = ({ route, navigation }) => {
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

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("schedule");
      console.log("Remove success");
    } catch (e) {
      // saving error
    }
  };

  const resetSchedule = () => {
    removeData();
  };

  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    populateData();
  }, []);

  const setData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("schedule", jsonValue);
      console.log("Saving success");
    } catch (e) {
      // saving error
    }
  };

  const addCourse = (x) => {
    const { item } = route.params;
    console.log(JSON.stringify(item));
    console.log(x);

    const itemOri = schedule.find((x) => x.day === item.day);
    console.log("itemOri", itemOri);
    const itemToAdd = {
      day: item.day,
      schedule: [
        {
          session: "Morning",
          courseName:
            item.session === "Morning"
              ? x
              : itemOri.schedule.find((y) => y.session === "Morning")
                  .courseName,
        },
        {
          session: "Afternoon",
          courseName:
            item.session === "Afternoon"
              ? x
              : itemOri.schedule.find((y) => y.session === "Afternoon")
                  .courseName,
        },
      ],
    };

    const newScheduleData = schedule;

    const index = newScheduleData.indexOf(
      newScheduleData.find((x) => x.day === item.day)
    );

    if (index !== -1) {
      newScheduleData[index] = itemToAdd;
    }
    console.log(JSON.stringify(newScheduleData));

    setData(newScheduleData);

    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
       <Header title={"List of Courses"} iconTitle={"book"} goBack={()=>navigation.goBack()} />
      </View>
      <View style={{ flex: 6 }}>
        <View style={{ }}>
          <FlatList
          contentContainerStyle={{padding:10}}
            data={courses}
            keyExtractor={(item, index) => index.toString()}
            // ListHeaderComponent={
            //   <View style={{ flex: 1, flexDirection: "row",borderWidth:1 }}>
            //     <Text>Title</Text>
            //   </View>
            // }
            ListFooterComponent={() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  padding: 20,
                  alignItems: "flex-end",
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {resetSchedule();navigation.goBack()}}
                >
                  <Ionicons
                    name="ios-close-circle-outline"
                    size={24}
                    color="red"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{ color: "red" }}>Reset</Text>
                </TouchableOpacity>
              </View>
            )}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  padding: 10,
                  marginBottom: 10,
                  borderRadius: 10,
                  borderColor: "lightgrey",
                }}
                onPress={() => addCourse(item.title)}
              >
                <Text style={{color:"navy", fontWeight:"bold",paddingBottom:5}}>{item.title}</Text>
                <Text style={{paddingBottom:10}}>{item.lecturer}</Text>
                <Text style={{color:"grey",paddingBottom:5}}>{item.description}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default CoursesScreen;
