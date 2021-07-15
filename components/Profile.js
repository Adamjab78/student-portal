import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Text } from "../components/Custom";
import { dimension } from "../constants/constants";

const Profile = ({ profile }) => {
  return (
    <View style={{ margin: 10, backgroundColor: "white" }}>
      {profile ? (
        <View style={{ backgroundColor: "white" }}>
          {Object.entries(profile).length === 0 &&
          <View
          style={{
            backgroundColor: "orange",
            padding: 10,
            alignItems: "center",
            marginBottom: 10,
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="information"
            size={27}
            color={"white"}
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "white" }}>
            Please enter your information
          </Text>
        </View> }
          <View
            style={{
              marginBottom: 10,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "lightgrey",
              padding: 10,
            }}
          >
            <View>
              {profile.image ? (
                <Image
                  source={{ uri: profile.image }}
                  style={{
                    width: dimension.width / 1.5,
                    height: dimension.width / 1.5,
                  }}
                  resizeMode={"cover"}
                />
              ) : (
                <Ionicons name="person" size={150} color={"lightgrey"} />
              )}
            </View>
          </View>
          <Data
            iconColor={"steelblue"}
            iconName={"person"}
            item={profile.name}
          />
          <Data
            iconColor={"steelblue"}
            iconName={"body"}
            item={profile.gender}
          />
          <Data
            iconColor={"steelblue"}
            iconName={"calendar"}
            item={profile.age}
          />
          <Data iconColor={"steelblue"} iconName={"card"} item={profile.id} />
          <Data
            iconColor={"steelblue"}
            iconName={"business"}
            item={profile.department}
          />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const Data = ({ item, iconColor, iconName }) => {
  return (
    <View
      style={{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "lightgrey",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Ionicons
        name={iconName}
        color={iconColor}
        size={27}
        style={{ marginRight: 20 }}
      />
      <Text
        style={{
          paddingBottom: 5,
          textTransform: "capitalize",
          fontSize: 20,
          color: "grey",
        }}
      >
        {item}
      </Text>
    </View>
  );
};

export default Profile;