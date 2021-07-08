import React, {useState,useEffect} from "react";
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

const courses = [
  { title: "English", description: "Modern English", lecturer: "John Doe" },
  { title: "Math", description: "Modern Math", lecturer: "Max Power" },
  { title: "Geography", description: "Modern Geography", lecturer: "Max Power" },
];

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

    const itemOri=schedule.find(x=>x.day===item.day)
    console.log("itemOri",itemOri)
    const itemToAdd = {
      day: item.day,
      schedule: [
        { session: "Pagi", courseName: item.session === "Pagi" ? x : (itemOri.schedule.find(y=>y.session==="Pagi")).courseName },
        {
          session: "Petang",
          courseName: item.session === "Petang" ? x : (itemOri.schedule.find(y=>y.session==="Petang")).courseName ,
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

    navigation.goBack()

  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Ionicons
              name="chevron-back"
              size={32}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View
            style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "bold" }}>List of Course</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <AntDesign
              name="edit"
              size={32}
              onPress={() => navigation.navigate("EditProfile")}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 10 }}>
        <View style={{ padding: 10 }}>
          <FlatList
            data={courses}
            keyExtractor={(item, index) => index.toString()}
            // ListHeaderComponent={
            //   <View style={{ flex: 1, flexDirection: "row",borderWidth:1 }}>
            //     <Text>Title</Text>
            //   </View>
            // }
            renderItem={({ item, index }) => (
              <TouchableOpacity
              style={{borderWidth:1,padding:10,marginBottom:10, borderRadius:10,borderColor:"lightgrey"}} onPress={() => addCourse(item.title)}>
                <Text>{item.title}</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CoursesScreen;
