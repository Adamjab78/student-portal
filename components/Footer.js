import React from "react";
import { View} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <FooterButton name={"home"} />
      <FooterButton name={"person"} />
    </View>
  );
};

const FooterButton = ({name}) => {
  <View
    style={{
      flex: 1,
      borderWidth: 1,
      borderColor: "lightgrey",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Ionicons name={name} size={32} />
  </View>;
};

export default Footer;
