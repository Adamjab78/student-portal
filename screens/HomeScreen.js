import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Profile from "../components/Profile";
import Schedule from "../components/Schedule";
import EditProfile from "../components/EditProfile";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
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
            <Text>Portal Pelajar</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Ionicons name="md-person-circle-outline" size={32} />
          </View>
        </View>
      </View>
      <View style={{ flex: 10 }}>
        <Profile />
        <Schedule />
        <EditProfile />
      </View>
      <View style={{ flex: 1}}>
        <Footer />
      </View>
    </View>
  );
};

export default HomeScreen;
