import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Constants from "expo-constants";
import { Text } from "./Custom";

const Header = ({ title, iconTitle, onPress, goBack }) => {
  return (
    <View style={[styles.header, { paddingTop: Constants.statusBarHeight }]}>
      {goBack ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
        <Ionicons name={"chevron-back"} size={32} color={"grey"} onPress={goBack} />
      </View>
      ) : (
        <View style={{ flex: 1 }} />
      )}

      <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", textTransform: "uppercase" }}>
          {title}
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Ionicons name={iconTitle} size={32} color={"grey"} onPress={onPress} />
      </View>
    </View>
  );
};

export default Header;
