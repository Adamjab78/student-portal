import React from "react";
import { Text, View, TextInput, Switch,  } from "react-native";

const EditProfile = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }}>
        Edit Profile
      </Text>
      <View>
        <View>
          <Text>Name :</Text>
          <TextInput style={{ borderWidth: 1, borderColor: "lightgrey" }} />
        </View>
        <View>
          <Text>Other Info :</Text>
          <Switch />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
