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
import Header from "../components/Header";
import {dimension} from "../constants/constants"

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
  
  const showEditFunction=()=>{
    setShowEdit(true)
  }

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
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <View
            style={{ flex: 1, marginVertical: 100, marginHorizontal:10, backgroundColor: "white" }}
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
              setProfile={setProfile}
            
            />
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
      <Header title={"profile"} iconTitle={"build-sharp"} onPress={() => showEditFunction()} />

      </View>
      <View style={{ flex: 7,backgroundColor:"white" }}>
        <Profile profile={profile} />
      </View>
    </View>
  );
};

export default ProfileScreen;
