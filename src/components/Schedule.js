import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Schedule = ({ goToCourses, schedule }) => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }}>
        Schedule
      </Text>
      <View>
        {schedule.map((x, i) => (
          <DailySchedule key={i} goToCourses={goToCourses} item={x} />
        ))}
      </View>
    </View>
  );
};

const DailySchedule = ({ item, goToCourses }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, padding: 5, margin: 5 }}>
        <View>
          <Text style={{ fontWeight: "bold" }}>{item.day}</Text>
        </View>
      </View>
      {item.schedule.map((x, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => goToCourses({day:item.day,session:x.session})}
          style={{ flex: 1, padding: 5, margin: 5 }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>
              {x.courseName || "Vacant"}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Schedule;
