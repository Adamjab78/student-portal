import React from "react";
import { Text, View, Image } from "react-native";

const Profile = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }}>
        Profile
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/favicon.png")}
            style={{ height: 50, width: 50 }}
          />
        </View>
        <View style={{ flex: 3, alignItems: "flex-start" }}>
          <Text>John Doe</Text>
          <Text>Some other useful information</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
