import React from "react";
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
];

const CoursesScreen = ({ route, navigation }) => {
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

    const itemToAdd = {
      day: item.day,
      schedule: [
        { session: "Pagi", courseName: item.session === "Pagi" ? x : null },
        {
          session: "Petang",
          courseName: item.session === "Petang" ? x : null,
        },
      ],
    };

    const newScheduleData = initialScheduleData;

    const index = newScheduleData.indexOf(
      newScheduleData.find((x) => x.day === item.day)
    );

    if (index !== -1) {
      newScheduleData[index] = itemToAdd;
    }
    console.log(JSON.stringify(newScheduleData));

    setData(newScheduleData);

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
            ListHeaderComponent={
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text>Title</Text>
              </View>
            }
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => addCourse(item.title)}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CoursesScreen;
