import React from "react";
import { Text, View,SafeAreaView, Modal, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Profile from "../components/Profile";

const ProfileScreen = ({ navigation }) => {
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
            <AntDesign name="edit" size={32}  onPress={()=>navigation.navigate("EditProfile")}/>
          </View>
        </View>
      </View>
      <View style={{ flex: 10 }}>
        <Profile />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
