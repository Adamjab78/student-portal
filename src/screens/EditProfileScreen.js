import React from "react";
import { Text, View, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import EditProfile from "../components/EditProfile";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Ionicons name="chevron-back" size={32} onPress={()=>navigation.goBack()} />
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
        <EditProfile />
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
