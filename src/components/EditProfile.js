import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Text } from "../components/Custom";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Checkbox } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from "@react-native-async-storage/async-storage";
const screenWidth = Dimensions.get("window").width;

const departmentOptions = [
  { label: "Physics", value: "Physics" },
  { label: "Biology", value: "Biology" },
  { label: "Economics", value: "Economics" },
];

const EditProfile = ({
  setShowEdit,
  image,
  name,
  gender,
  age,
  id,
  department,
  setImage,
  setName,
  setGender,
  setAge,
  setId,
  setDepartment,
  populateData,
  setProfile
}) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [4, 3],
      // quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const setData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("profile", jsonValue);
      console.log("Saving success");
    } catch (e) {
      // saving error
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("profile");
      console.log("Remove success");
    } catch (e) {
      // saving error
    }
  };

  const processEntry = () => {
    const profile = { image, name, age, gender, id, department };
    setData(profile);
    populateData();
    setShowEdit(false);
  };

  const reset = () => {
    // const profile = { image, name, age, gender, id, department };
    removeData();
    setProfile({})
    setImage()
    setName()
    setAge()
    setGender()
    setId()
    setDepartment()
    populateData();
    setShowEdit(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "navy", paddingHorizontal: 10 }}>
        <Text
          style={{
            marginVertical: 10,
            fontSize: 17,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Edit Profile
        </Text>
      </View>

      <ScrollView style={{ padding: 10 }}>
        <View style={{ marginBottom: 10, alignItems: "center" }}>
          <TouchableOpacity onPress={() => pickImage()}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 100, height: 100 }}
                resizeMode={"contain"}
              />
            ) : (
              <Ionicons name="person" size={150} color={"lightgrey"} />
            )}
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ paddingBottom: 5 }}>Name :</Text>
          <TextInput
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "lightgrey",
              borderRadius: 5,
              fontSize: 25,
            }}
            onChangeText={(val) => setName(val)}
            value={name}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ paddingBottom: 5 }}>Gender :</Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Checkbox.IOS
                status={gender === "Male" ? "checked" : "unchecked"}
                onPress={() => {
                  setGender(gender === "Male" ? "Female" : "Male");
                }}
              />
              <Text
                style={{
                  fontSize: 25,
                  color: gender === "Male" ? "black" : "grey",
                }}
              >
                Male
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <Checkbox.IOS
                status={gender === "Female" ? "checked" : "unchecked"}
                onPress={() => {
                  setGender(gender === "Female" ? "Male" : "Female");
                }}
              />
              <Text
                style={{
                  fontSize: 25,
                  color: gender === "Female" ? "black" : "grey",
                }}
              >
                Female
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ paddingBottom: 5 }}>Age :</Text>
          <TextInput
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "lightgrey",
              borderRadius: 5,
              fontSize: 25,
            }}
            onChangeText={(val) => setAge(val)}
            value={age}
            keyboardType={"number-pad"}
            maxLength={2}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ paddingBottom: 5 }}>Employee ID :</Text>
          <TextInput
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "lightgrey",
              borderRadius: 5,
              fontSize: 25,
            }}
            onChangeText={(val) => setId(val)}
            value={id}
            keyboardType={"decimal-pad"}
            maxLength={10}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ paddingBottom: 5 }}>Department :</Text>
          <RNPickerSelect
            value={department}
            onValueChange={(value) => setDepartment(value)}
            items={departmentOptions}
            style={{ ...pickerSelectStyles }}
          />
        </View>
        <View
          style={{
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CustomButton
            buttonColor={"orange"}
            label={"Cancel"}
            onPress={setShowEdit}
          />
          <CustomButton
            buttonColor={"palegreen"}
            label={"Save"}
            onPress={processEntry}
          />
          <CustomButton
            buttonColor={"orangered"}
            label={"Reset"}
            onPress={reset}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const CustomButton = ({ onPress, label, labelColor, buttonColor }) => {
  return (
    <TouchableOpacity
      style={{
        width: screenWidth / 4,
        margin: 5,
        padding: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: buttonColor,
      }}
      onPress={() => onPress(false)}
    >
      <Text style={{ color: labelColor ? labelColor : "white" }}>{label}</Text>
    </TouchableOpacity>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 25,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 25,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default EditProfile;
