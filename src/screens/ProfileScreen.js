import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";
import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = ({ navigation }) => {
  const [showEdit, setShowEdit] = useState(false);

  const [image, setImage] = useState(null);
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [id, setId] = useState();
  const [department, setDepartment] = useState();

  const [profile,setProfile]=useState({})

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

  const setProfileData=(value)=>{
    console.log(`profile data is ${JSON.stringify(value)}`)
    setProfile(value)
    
  }

  const populateData = async () => {
    const profile = await getData();
    if (profile) {
      console.log("ada data", profile);
      // setSchedule(scheduleData);
      setProfileData(profile)
    
        setImage(profile.image);
        setName(profile.name);
        setGender(profile.gender);
        setAge(profile.age);
        setId(profile.id);
        setDepartment(profile.department);
      
    } else {
      //setData(initialScheduleData);
      console.log("tiada data");
      // setSchedule(initialScheduleData);
    }
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        transparent={true}
        visible={showEdit}
        // presentationStyle={"overFullScreen"}
      >
        <ScrollView
          style={{
            flex: 1,
            borderWidth: 1,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <View
            style={{ flex: 1, marginVertical: 100, backgroundColor: "white" }}
          >
            
            <EditProfile
              setShowEdit={setShowEdit}
              populateData={populateData}
              image={image}
              name={name}
              age={age}
              gender={gender}
              department={department}
              id={id}
              setImage={setImage}
              setName={setName}
              setAge={setAge}
              setId={setId}
              setGender={setGender}
              setDepartment={setDepartment}
            
            />
          </View>
        </ScrollView>
      </Modal>
      <View style={{ flex: 1 }}>
        <View
          style={[styles.header, { paddingTop: Constants.statusBarHeight }]}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Ionicons name="chevron-back" size={32} />
          </View>
          <View
            style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontWeight: "bold" }}>Profile</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <AntDesign
              name="edit"
              size={32}
              // onPress={() => navigation.navigate("EditProfile")}
              onPress={() => setShowEdit(true)}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 7 }}>
        <Profile profile={profile} />
      </View>
    </View>
  );
};

export default ProfileScreen;
