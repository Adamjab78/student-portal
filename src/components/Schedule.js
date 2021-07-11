import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { SubHeader } from "./Custom";

const Schedule = ({ goToCourses, schedule, scheduleExists }) => {
  return (
    <View
      style={{
        margin: 0,
        backgroundColor: "white",
      }}
    >
      <SubHeader>Schedule</SubHeader>
      {/* <View style={{borderWidth:1, borderColor:"lightgrey"}} /> */}
      {scheduleExists ? (
        <View
          style={{
            margin: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "lightgrey",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, padding: 5, margin: 5 }}>
              <View />
            </View>
            <View style={{ flex: 1, padding: 5, margin: 5 }}>
              <Text style={[styles.defaultText, { fontWeight: "bold" }]}>
                Morning
              </Text>
            </View>
            <View style={{ flex: 1, padding: 5, margin: 5 }}>
              <Text style={[styles.defaultText, { fontWeight: "bold" }]}>
                Afternoon
              </Text>
            </View>
          </View>

          {schedule.map((x, i) => (
            <DailySchedule key={i} goToCourses={goToCourses} item={x} />
          ))}
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
          <Text style={{textAlign:"center"}}>
            You have not configure your schedule yet. 
        
          </Text>
          <Text style={{textAlign:"center"}}>
         
            Click button to start
          </Text>
          <TouchableOpacity
          style={{backgroundColor:"orange", padding:10, margin:10}}
            onPress={() => goToCourses({ day: "Monday", session: "Morning" })}
          >
            <Text style={{color:"white"}}>Create Schedule</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const DailySchedule = ({ item, goToCourses }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1, padding: 5, margin: 5 }}>
        <View>
          <Text style={[styles.defaultText, { fontWeight: "bold" }]}>
            {item.day}
          </Text>
        </View>
      </View>
      {item.schedule.map((x, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => goToCourses({ day: item.day, session: x.session })}
          style={{ flex: 1, padding: 5, margin: 5 }}
        >
          <View>
            <Text style={[styles.defaultText, { fontWeight: "bold" }]}>
              {x.courseName || "Vacant"}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Schedule;
