import React from "react";
import { Text, View, TextInput, Button } from "react-native";

const EditProfile = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }}>
        Edit Profile
      </Text>
      <View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ paddingBottom: 5 }}>Name :</Text>
          <TextInput
            style={{ padding: 5, borderWidth: 1, borderColor: "lightgrey" }}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ paddingBottom: 5 }}>Department :</Text>
          <TextInput
            style={{ padding: 5, borderWidth: 1, borderColor: "lightgrey" }}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button
            title={"SUBMIT"}
            color={"grey"}
            onPress={() => console.log("Button pressed")}
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
