import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, SubHeader } from "../components/Custom";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfileSummary = ({ goToProfile, isFocused }) => {
  const [profile, setProfile] = useState({});

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("profile");
      console.log("JSONValue", jsonValue);

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const setProfileData = (value) => {
    console.log(`profile data is ${JSON.stringify(value)}`);
    setProfile(value);
  };

  const populateData = async () => {
    const profile = await getData();
    if (profile) {
      console.log("ada data", profile);
      // setSchedule(scheduleData);
      setProfileData(profile);
    } else {
      //setData(initialScheduleData);
      setProfileData(profile);
      console.log("tiada data");
      // setSchedule(initialScheduleData);
    }
  };

  useEffect(() => {
      console.log("profilesummary populate")
    populateData();
  }, [isFocused]);

  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      <SubHeader>Profile </SubHeader>
      {profile ? (
        <View style={{ marginBottom: 10, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 10 }}>
            {profile.image ? (
              <Image
                source={{ uri: profile.image }}
                style={{
                  flex: 1,
                  width: undefined,
                  height: undefined,
                  borderRadius: 5,
                }}
                resizeMode={"cover"}
              />
            ) : (
              <Ionicons name="person" size={70} color={"lightgrey"} />
            )}
          </View>
          <View style={{ flex: 2, padding: 10 }}>
            <Data item={profile.name} />
            <Data item={profile.id} />
            <Data item={profile.department} />
          </View>
        </View>
      ) : (
        <View
          style={{
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "lightgrey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>
            You have not entered your profile yet.
          </Text>
          <Text style={{ textAlign: "center" }}>Click button to start</Text>
          <TouchableOpacity
            style={{ backgroundColor: "orange", padding: 10, margin: 10 }}
            onPress={() => goToProfile()}
          >
            <Text style={{ color: "white" }}>Enter Profile</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const Data = ({ item }) => {
  return (
    <View style={{ marginBottom: 5, alignItems: "flex-start" }}>
      <Text
        style={{ paddingBottom: 5, fontSize: 17, textTransform: "capitalize" }}
      >
        {item}
      </Text>
    </View>
  );
};

export default ProfileSummary;