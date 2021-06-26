import React from "react";
import { Text, View, TextInput, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={{ flex: 1,flexDirection:"row" }}>
      <View style={{ flex: 1, borderWidth:1,borderColor:"lightgrey", justifyContent:"center",alignItems:"center" }}>
        <Ionicons name="home" size={32} />
      </View>
      <View style={{ flex: 1, borderWidth:1,borderColor:"lightgrey", justifyContent:"center",alignItems:"center" }}>
        <Ionicons name="person" size={32} />
      </View>
    </View>
  );
};

export default Footer;
