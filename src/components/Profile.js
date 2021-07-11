import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Profile = ({ profile }) => {
  return (
    <View style={{ margin: 10, backgroundColor: "white" }}>
      <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }}>
        Profile
      </Text>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ marginBottom: 10, alignItems: "center" }}>
          <View>
            {profile.image ? (
              <Image
                source={{ uri: profile.image }}
                style={{ width: 200, height: 200, borderRadius: 20 }}
                resizeMode={"cover"}
              />
            ) : (
              <Ionicons name="person" size={150} color={"lightgrey"} />
            )}
          </View>
        </View>
        <Data item={profile.name} />
        <Data item={profile.gender} />
        <Data item={profile.age} />
        <Data item={profile.id} />
        <Data item={profile.department} />
      </View>
    </View>
  );
};

const Data = ({ item }) => {
  return (
    <View style={{ marginBottom: 10, alignItems: "center" }}>
      <Text style={{ paddingBottom: 5 }}>{item}</Text>
    </View>
  );
};

export default Profile;
