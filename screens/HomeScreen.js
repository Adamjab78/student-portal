import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";
import Profile from "../components/Profile";
import Schedule from "../components/Schedule";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Back</Text>
          </View>
          <View
            style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Portal Pelajar</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Icon</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 10 }}>
        <Profile />
        <Schedule />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontStyle: "italic" }}>Dhiya Training & Services</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
