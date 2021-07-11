import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Checkbox } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from "@react-native-async-storage/async-storage";
const screenWidth = Dimensions.get("window").width;  

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
  populateData
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

  const processEntry = () => {
    const profile = { image, name, age, gender, id, department };
    setData(profile);
    populateData();
    setShowEdit(false)
  };

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }}>
        Edit Profile
      </Text>
      <View>
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
            style={{ padding: 5, borderWidth: 1, borderColor: "lightgrey" }}
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
              <Text>Male</Text>
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
              <Text>Female</Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ paddingBottom: 5 }}>Age :</Text>
          <TextInput
            style={{ padding: 5, borderWidth: 1, borderColor: "lightgrey" }}
            onChangeText={(val) => setAge(val)}
            value={age}
            keyboardType={"number-pad"}
            maxLength={2}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ paddingBottom: 5 }}>Employee ID :</Text>
          <TextInput
            style={{ padding: 5, borderWidth: 1, borderColor: "lightgrey" }}
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
            items={[
              { label: "Physics", value: "Physics" },
              { label: "Biology", value: "Biology" },
              { label: "Economics", value: "Economics" },
            ]}
          />
        </View>
        <View
          style={{
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
        <CustomButton label={"Cancel"} onPress={setShowEdit} />
          <CustomButton label={"Save"} onPress={processEntry} />
          
        </View>
      </View>
    </View>
  );
};

const CustomButton = ({onPress,label})=>{
  return(<TouchableOpacity
    style={{ width: screenWidth/3,margin: 20, padding: 20, borderWidth: 1 }}
    onPress={() => onPress(false)}
  >
    <Text>{label}</Text>
  </TouchableOpacity>)

}

export default EditProfile;
